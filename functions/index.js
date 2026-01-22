const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true}); // Add CORS middleware

admin.initializeApp();
const db = admin.firestore();

const APP_NAME = 'Safety Observation Form'; // Your App Name
const LOGIN_URL = 'https://observationform-e6977.web.app/login.html'; // Your login page URL

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: functions.config().gmail.email,
    pass: functions.config().gmail.password,
  },
});

// Helper function to send email
async function sendEmail(toEmail, subject, htmlContent) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@yourdomain.com>`, // Replace with your actual domain if you have one
    to: toEmail,
    subject: subject,
    html: htmlContent,
  };

  try {
    await mailTransport.sendMail(mailOptions);
    console.log(`Email sent to: ${toEmail} with subject: ${subject}`);
  } catch (error) {
    console.error(`Error sending email to: ${toEmail} with subject: ${subject}`, error);
  }
}

// Function to send approval email
async function sendApprovalEmail(userEmail, displayName) {
  const subject = 'Your Account Has Been Approved! | Akun Anda Telah Disetujui!';
  const htmlContent = `
    <p>Dear ${displayName},</p>
    <p>Good news! Your account for the ${APP_NAME} has been approved by the administrator.</p>
    <p>You can now log in and start submitting your observations.</p>
    <p style="text-align: center; margin: 20px 0;">
      <a href="${LOGIN_URL}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Login to ${APP_NAME}</a>
    </p>
    <p style="font-size: 12px; color: #666;">If the button above does not work, please open this link in your browser: <a href="${LOGIN_URL}">${LOGIN_URL}</a></p>
    <p>Thank you for your patience.</p>
    <p>Best regards,</p>
    <p>The ${APP_NAME} Team</p>
    <hr/>
    <p>Yth. ${displayName},</p>
    <p>Kabar baik! Akun Anda untuk ${APP_NAME} telah disetujui oleh administrator.</p>
    <p>Anda sekarang dapat masuk dan mulai mengirimkan observasi Anda.</p>
    <p style="text-align: center; margin: 20px 0;">
      <a href="${LOGIN_URL}" style="background-color: #007bff; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Masuk ke ${APP_NAME}</a>
    </p>
    <p style="font-size: 12px; color: #666;">Jika tombol di atas tidak berfungsi, silakan buka tautan ini di browser Anda: <a href="${LOGIN_URL}">${LOGIN_URL}</a></p>
    <p>Terima kasih atas kesabaran Anda.</p>
    <p>Hormat kami,</p>
    <p>Tim ${APP_NAME}</p>
  `;
  await sendEmail(userEmail, subject, htmlContent);
}

// Function to send disapproval/deletion email
async function sendDisapprovalEmail(userEmail, displayName, reason) {
  const subject = 'Your Account Status Update | Pembaruan Status Akun Anda';
  const htmlContent = `
    <p>Dear ${displayName},</p>
    <p>We regret to inform you that your account for the ${APP_NAME} has been ${reason} by the administrator.</p>
    <p>This means you will no longer be able to log in. If you believe this is a mistake, please contact the administrator.</p>
    <p>You will need to register again if you wish to use the service in the future.</p>
    <p>Best regards,</p>
    <p>The ${APP_NAME} Team</p>
    <hr/>
    <p>Yth. ${displayName},</p>
    <p>Dengan berat hati kami memberitahukan bahwa akun Anda untuk ${APP_NAME} telah ${reason} oleh administrator.</p>
    <p>Ini berarti Anda tidak lagi dapat masuk. Jika Anda merasa ini adalah kesalahan, silakan hubungi administrator.</p>
    <p>Anda perlu mendaftar ulang jika Anda ingin menggunakan layanan ini di masa mendatang.</p>
    <p>Hormat kami,</p>
    <p>Tim ${APP_NAME}</p>
  `;
  await sendEmail(userEmail, subject, htmlContent);
}

// Firestore trigger to send email when user status changes to 'approved'
exports.sendUserApprovalEmail = functions.firestore
  .document('users/{userId}')
  .onUpdate(async (change, context) => {
    const newValue = change.after.data();
    const previousValue = change.before.data();

    // Check if the status field changed to 'approved'
    if (newValue.status === 'approved' && previousValue.status !== 'approved') {
      const userEmail = newValue.email;
      const displayName = newValue.displayName || 'User';

      if (userEmail) {
        await sendApprovalEmail(userEmail, displayName);
      } else {
        console.warn(`User ${context.params.userId} has no email to send approval notification.`);
      }
    }
    return null;
  });

// HTTP Callable Cloud Function to delete user and send disapproval email
exports.deleteUserAndSendEmail = functions.https.onCall(async (data, context) => {
  // Ensure the request is made by an authenticated admin
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Only authenticated users can perform this action.');
  }

  const adminUserDoc = await db.collection('users').doc(context.auth.uid).get();
  if (!adminUserDoc.exists || !['admin', 'superadmin'].includes(adminUserDoc.data().role)) {
    throw new functions.https.HttpsError('permission-denied', 'Only administrators can delete users.');
  }

  const { uid, userEmail, displayName, reason } = data;

  if (!uid || !userEmail || !displayName || !reason) {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with uid, userEmail, displayName, and reason.');
  }

  try {
    // Delete user from Firebase Authentication
    await admin.auth().deleteUser(uid);
    console.log(`Successfully deleted user from Auth: ${uid}`);

    // Delete user's document from Firestore
    await db.collection('users').doc(uid).delete();
    console.log(`Successfully deleted user document from Firestore: ${uid}`);

    // Send disapproval/deletion email
    await sendDisapprovalEmail(userEmail, displayName, reason);

    return { success: true, message: `User ${uid} deleted and email sent.` };
  } catch (error) {
    console.error(`Error deleting user ${uid}:`, error);
    throw new functions.https.HttpsError('internal', 'Unable to delete user.', error.message);
  }
});

// HTTP Callable Cloud Function to update user role
exports.updateUserRole = functions.https.onCall(async (data, context) => {
  // Ensure the request is made by an authenticated user
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'Only authenticated users can perform this action.');
  }

  const callerUid = context.auth.uid;
  const callerUserDoc = await db.collection('users').doc(callerUid).get();
  
  if (!callerUserDoc.exists || callerUserDoc.data().role !== 'superadmin') {
    throw new functions.https.HttpsError('permission-denied', 'Only superadmins can change user roles.');
  }

  const { uid, newRole } = data;
  if (!uid || !newRole) {
    throw new functions.https.HttpsError('invalid-argument', 'The function must be called with uid and newRole.');
  }
  
  if (!['user', 'admin'].includes(newRole)) {
       throw new functions.https.HttpsError('invalid-argument', 'Invalid role specified. Must be "user" or "admin".');
  }

  try {
    // Update Firestore
    await db.collection('users').doc(uid).update({ role: newRole });
    // Update Custom Claims
    await admin.auth().setCustomUserClaims(uid, { role: newRole });
    
    return { success: true, message: `User ${uid} role updated to ${newRole}.` };
  } catch (error) {
    console.error(`Error updating role for user ${uid}:`, error);
    throw new functions.https.HttpsError('internal', 'Unable to update user role.', error.message);
  }
});

