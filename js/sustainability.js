    // ... (Javascript logic for charts and calculations) ...
    // Set print date
    document.getElementById('print-date').textContent = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Chart Downloader Function
    function downloadChart(chartId) {
        const canvas = document.getElementById(chartId);
        if (!canvas) return;
        const url = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = chartId + '.png';
        link.href = url;
        link.click();
    }

    // --- Translation Logic ---
    let currentLang = 'id';
    const translations = {
        id: {
            // ... (Same as before) ...
            badge: "Program Sustainability • Framework Umum",
            title: "Peta Konsep Program Sustainability",
            subtitle: "Kerangka umum: struktur program, pemetaan aktivitas → dampak → indikator, konsep perhitungan, scorecard internal, dan outline dokumen.",
            mainNodeTitle: "Program Sustainability Framework",
            mainNodeDesc: "Hubungan antara aktivitas perusahaan, dampak, indikator, perhitungan kinerja, dan pelaporan.",
            node1Title: "Struktur Program (High Level)",
            node1Chip: "Tujuan & Scope",
            node1Summary: "Definisi tujuan, ruang lingkup, dan prinsip acuan (GRI / GHG Protocol / GHI).",
            node1Pill: "◎ Tujuan & Ruang Lingkup",
            node1H4_1: "1. Tujuan Program",
            node1H4_2: "2. Ruang Lingkup",
            node1H4_3: "3. Prinsip & Referensi",
            node1List1: "<li>Mengelola dampak lingkungan, sosial, dan ekonomi secara terstruktur.</li><li>Menetapkan target kinerja (emisi, energi, K3, limbah, dsb.).</li><li>Menyediakan informasi yang transparan untuk investor & pemangku kepentingan.</li>",
            node1List2: "<li>Fasilitas: pabrik, kantor, proyek konstruksi, rumah sakit, dll.</li><li>Aktivitas: operasi harian, proyek khusus, rantai pasok kritis.</li><li>Jenis dampak: ekonomi, lingkungan, sosial, tata kelola (ESG).</li>",
            node1List3: "<li>GRI Standards sebagai acuan pelaporan keberlanjutan.</li><li>GHG Protocol untuk perhitungan emisi GHG Scope 1–3.</li><li>GHI / Green Healthcare Initiative untuk konteks rumah sakit.</li><li>Regulasi nasional dan standar internal perusahaan.</li>",
            node2Title: "Pemetaan Aktivitas → Dampak → Indikator",
            node2Chip: "Materiality",
            node2Summary: "Menentukan aktivitas kunci, dampak utama, dan indikator kuantitatif yang akan dipantau.",
            node2Pill: "⇄ Materiality Sederhana",
            node2Desc: "Contoh pemetaan aktivitas ke dampak dan KPI:",
            tableActivity: "Aktivitas",
            tableImpact: "Dampak",
            tableIndicator: "Indikator (KPI)",
            tableBody2: "<tr><td>Konsumsi listrik pabrik</td><td>Emisi GHG Scope 2</td><td>Emisi CO₂e dari listrik (tCO₂e)</td></tr><tr><td>Bahan bakar (genset/kendaraan)</td><td>Emisi GHG Scope 1</td><td>Emisi CO₂e bahan bakar (tCO₂e)</td></tr><tr><td>Penggunaan air proses</td><td>Deplesi sumber air</td><td>Total konsumsi air (m³)</td></tr><tr><td>Limbah padat & B3</td><td>Risiko pencemaran</td><td>Ton limbah / % didaur ulang</td></tr><tr><td>Jam kerja karyawan</td><td>Risiko kecelakaan</td><td>LTIFR (kasus / 1jt jam)</td></tr>",
            node3Title: "Konsep Perhitungan KPI Utama",
            node3Chip: "Rumus & Simulasi",
            node3Summary: "Rumus dasar dan kalkulator simulasi. Klik tombol di bawah untuk melihat contoh kasus Pertamina.",
            node3Pill: "∑ Kalkulator Simulasi",
            btnPertamina: "📝 Muat Contoh Kasus Pertamina (Refinery Unit IV)",
            explainTitle: "Penjelasan Data (Simulasi Kilang/Hulu)",
            explainDesc: "Data di atas adalah simulasi sederhana untuk fasilitas operasi migas harian:",
            explainItem1: '<span class="demo-key">1. Emisi Genset/Boiler (Scope 1)</span>Konsumsi 5.000 Liter Solar per hari. Faktor emisi solar ≈ 0.00268 tCO₂e/Liter.',
            explainItem2: '<span class="demo-key">2. Intensitas Kilang</span>Emisi total harian (13.4 tCO₂e) dibagi output produk BBM harian (misal 500 Ton).',
            explainItem3: '<span class="demo-key">3. K3 (Safety)</span>Simulasi 1 kejadian LTI (Lost Time Injury) dalam 1.000.000 jam kerja aman akumulatif.',
            explainItem4: '<span class="demo-key">4. Limbah B3 (Sludge)</span>Dari 10 ton sludge/limbah minyak yang dihasilkan, 6 ton berhasil di-recovery atau dikirim ke pengolah berizin.',
            node4Title: "Scorecard Internal (Mini GHI/GRI)",
            node4Chip: "Rating 0–2",
            node4Summary: "Sistem penilaian 0–2 per elemen untuk topik energi, air, limbah, K3, dan tata kelola.",
            node4Pill: "★ Penilaian Mandiri (Interactive)",
            node4Desc: "Lakukan penilaian mandiri dengan memilih skala 0-2:",
            tableTopic: "Topik",
            tableElement: "Assessment Element",
            tableScale: "Skala",
            scoreTotal: "Total Skor",
            scoreLevel: "Status",
            scoreLevels: ["Awal (Early)", "Berkembang (Developing)", "Maju (Advanced)"],
            node4Note: "Total skor akan dihitung otomatis berdasarkan input Anda.",
            node5Title: "Outline Dokumen “Program Sustainability”",
            node5Chip: "Chapter Structure",
            node5Summary: "Document chapter structure: from introduction, reference framework, methodology, to reporting.",
            node5Pill: "▤ Document Structure",
            node5List: "<li><strong>Pendahuluan:</strong> Latar belakang, tujuan, risiko iklim.</li><li><strong>Kerangka Acuan:</strong> GRI, GHG Protocol, Regulasi.</li><li><strong>Materiality:</strong> Peta aktivitas & dampak prioritas.</li><li><strong>Metodologi:</strong> Rumus perhitungan & sumber data.</li><li><strong>Target & Scorecard:</strong> KPI jangka pendek/panjang.</li><li><strong>Implementasi:</strong> PIC, timeline, anggaran.</li><li><strong>Pelaporan:</strong> Format laporan & frekuensi review.</li>",
            node6Title: "Daftar Pustaka & Referensi",
            node6Chip: "Sumber Ilmiah",
            node6Summary: "Rujukan standar dan regulasi yang digunakan sebagai dasar penentuan threshold/batas aman pada kalkulator di atas.",
            node6Pill: "📖 Referensi",
            // New Investment Node
            nodeInvTitle: "Simulasi Investasi Hijau (Green CapEx)",
            nodeInvChip: "Perencanaan Finansial",
            nodeInvSummary: "Kalkulator sederhana untuk menghitung kelayakan proyek keberlanjutan (ROI, Payback Period, dan Biaya Abatement).",
            nodeInvPill: "💲 Analisis Tekno-Ekonomi",
            lblCapex: "Biaya Investasi Awal (IDR)",
            lblSaving: "Penghematan per Tahun (IDR)",
            lblReduction: "Reduksi Emisi (tCO₂e/tahun)",
             // Calc Labels
            cl_emission: "Kalkulator Emisi (Scope 1 - BBM)",
            cl_emission2: "Kalkulator Emisi (Scope 2 - Listrik)",
            cl_emission3: "Kalkulator Emisi (Scope 3 - Perjalanan)",
            cl_tax: "Estimasi Pajak Karbon (Ekonomi)",
            cl_act: "Aktivitas (Liter Solar/BBM)",
            cl_act2: "Aktivitas (kWh Listrik)",
            cl_act3: "Aktivitas (Jumlah Penerbangan)",
            cl_tax_rate: "Tarif Pajak (IDR/tCO₂e)",
            cl_fact: "Faktor Emisi (tCO₂e/Liter)",
            cl_fact2: "Faktor Emisi (kgCO₂e/kWh)",
            cl_fact3: "Faktor (tCO₂e/Flight)",
            cl_res: "Hasil:",
            cl_intensity: "Intensitas Emisi Kilang",
            cl_tot_em: "Total Emisi (tCO₂e)",
            cl_out: "Output Produksi (Ton Produk)",
            cl_ltifr: "LTIFR (Safety Migas)",
            cl_cases: "Jml Kasus Cedera (LTI)",
            cl_hours: "Jam Kerja Total (Manhours)",
            cl_recycle: "% Daur Ulang Limbah",
            cl_rec_ton: "Limbah Daur Ulang (Ton)",
            cl_tot_waste: "Total Limbah (Ton)",
            cl_rate: "Rate:",
            msg_pass: "✅ Memenuhi Persyaratan",
            msg_fail: "❌ Tidak Memenuhi Syarat",
            detail_pass: "Angka berada di area aman",
            detail_fail: "Angka melewati batas aman",
            // Chart
            chart_actual: "Aktual",
            chart_limit: "Batas (Limit)",
            summaryTotal: "Total Estimasi Emisi (S1+S2+S3+Limbah)"
        },
        en: {
            // ... existing translations ...
            badge: "Sustainability Program • General Framework",
            title: "Sustainability Program Conceptual Map",
            subtitle: "General framework: program structure, activity mapping → impact → indicators, calculation concepts, internal scorecard, and document outline.",
            mainNodeTitle: "Sustainability Program Framework",
            mainNodeDesc: "Relationship between corporate activities, impacts, indicators, performance calculation, and reporting.",
            node1Title: "Program Structure (High Level)",
            node1Chip: "Objectives & Scope",
            node1Summary: "Defining objectives, scope, and guiding principles (GRI / GHG Protocol / GHI).",
            node1Pill: "◎ Objectives & Scope",
            node1H4_1: "1. Program Objectives",
            node1H4_2: "2. Scope",
            node1H4_3: "3. Principles & References",
            node1List1: "<li>Manage environmental, social, and economic impacts structurally.</li><li>Set performance targets (emissions, energy, OHS, waste, etc.).</li><li>Provide transparent information for investors & stakeholders.</li>",
            node1List2: "<li>Facilities: factories, offices, construction projects, hospitals, etc.</li><li>Activities: daily operations, special projects, critical supply chain.</li><li>Impact types: economic, environmental, social, governance (ESG).</li>",
            node1List3: "<li>GRI Standards as sustainability reporting reference.</li><li>GHG Protocol for Scope 1–3 emission calculations.</li><li>GHI / Green Healthcare Initiative for hospital contexts.</li><li>National regulations and internal corporate standards.</li>",
            node2Title: "Activity → Impact → Indicator Mapping",
            node2Chip: "Materiality",
            node2Summary: "Determining key activities, major impacts, and quantitative indicators to monitor.",
            node2Pill: "⇄ Simple Materiality",
            node2Desc: "Example mapping of activities to impacts and KPIs:",
            tableActivity: "Activity",
            tableImpact: "Impact",
            tableIndicator: "Indicator (KPI)",
            tableBody2: "<tr><td>Factory electricity consumption</td><td>GHG Scope 2 Emissions</td><td>Electricity CO₂e Emissions (tCO₂e)</td></tr><tr><td>Fuel (generator/vehicles)</td><td>GHG Scope 1 Emissions</td><td>Fuel CO₂e Emissions (tCO₂e)</td></tr><tr><td>Process water usage</td><td>Water source depletion</td><td>Total water consumption (m³)</td></tr><tr><td>Solid & Haz. Waste</td><td>Pollution risk</td><td>Tons of waste / % recycled</td></tr><tr><td>Employee working hours</td><td>Accident risk</td><td>LTIFR (cases / 1M hours)</td></tr>",
            node3Title: "Key Performance Indicator (KPI) Calculation Concepts",
            node3Chip: "Formulas & Simulation",
            node3Summary: "Basic formulas and simulation calculator. Click the button below to view the Pertamina case study.",
            node3Pill: "∑ Simulation Calculator",
            btnPertamina: "📝 Load Pertamina Case Study (Refinery Unit IV)",
            explainTitle: "Data Explanation (Refinery/Upstream Simulation)",
            explainDesc: "The data above is a simple simulation for daily oil & gas operations:",
            explainItem1: '<span class="demo-key">1. Generator/Boiler Emission (Scope 1)</span>Consumption of 5,000 Liters of Diesel per day. Diesel emission factor ≈ 0.00268 tCO₂e/Liter.',
            explainItem2: '<span class="demo-key">2. Refinery Intensity</span>Total daily emissions (13.4 tCO₂e) divided by daily fuel product output (e.g., 500 Tons).',
            explainItem3: '<span class="demo-key">3. OHS (Safety)</span>Simulation of 1 LTI (Lost Time Injury) event within 1,000,000 accumulative safe working hours.',
            explainItem4: '<span class="demo-key">4. Haz. Waste (Sludge)</span>Out of 10 tons of sludge/oil waste produced, 6 tons were successfully recovered or sent to licensed processors.',
            node4Title: "Internal Scorecard (Mini GHI/GRI)",
            node4Chip: "Rating 0–2",
            node4Summary: "0–2 rating system per element for energy, water, waste, OHS, and governance topics.",
            node4Pill: "★ Self Assessment (Interactive)",
            node4Desc: "Perform self-assessment by selecting scale 0-2:",
            tableTopic: "Topic",
            tableElement: "Assessment Element",
            tableScale: "Scale",
            scoreTotal: "Total Score",
            scoreLevel: "Status",
            scoreLevels: ["Early Stage", "Developing", "Advanced/Leader"],
            node4Note: "Total score is calculated automatically based on your input.",
            node5Title: "Sustainability Program Document Outline",
            node5Chip: "Chapter Structure",
            node5Summary: "Document chapter structure: from introduction, reference framework, methodology, to reporting.",
            node5Pill: "▤ Document Structure",
            node5List: "<li><strong>Introduction:</strong> Background, objectives, climate risks.</li><li><strong>Reference Framework:</strong> GRI, GHG Protocol, Regulations.</li><li><strong>Materiality:</strong> Priority activity & impact mapping.</li><li><strong>Methodology:</strong> Calculation formulas & data sources.</li><li><strong>Target & Scorecard:</strong> Short/long-term KPIs.</li><li><strong>Implementation:</strong> PIC, timeline, budget.</li><li><strong>Reporting:</strong> Report format & review frequency.</li>",
            node6Title: "Bibliography & References",
            node6Chip: "Scientific Sources",
            node6Summary: "Standard references and regulations used as the basis for determining safety thresholds in the calculator above.",
            node6Pill: "📖 References",
            // New Investment Node
            nodeInvTitle: "Green Investment Simulator (Green CapEx)",
            nodeInvChip: "Financial Planning",
            nodeInvSummary: "Simple calculator to assess sustainability project feasibility (ROI, Payback Period, and Abatement Cost).",
            nodeInvPill: "💲 Techno-Economic Analysis",
            lblCapex: "Initial Investment Cost (IDR)",
            lblSaving: "Annual Cost Saving (IDR)",
            lblReduction: "Emission Reduction (tCO₂e/year)",
             // Calc Labels
            cl_emission: "Emission Calculator (Scope 1 - Fuel)",
            cl_emission2: "Emission Calculator (Scope 2 - Electricity)",
            cl_emission3: "Emission Calculator (Scope 3 - Travel)",
            cl_tax: "Carbon Tax Estimate (Economics)",
            cl_act: "Activity (Liter Diesel/Fuel)",
            cl_act2: "Activity (kWh Electricity)",
            cl_act3: "Activity (Number of Flights)",
            cl_tax_rate: "Tax Rate (IDR/tCO₂e)",
            cl_fact: "Emission Factor (tCO₂e/Liter)",
            cl_fact2: "Emission Factor (kgCO₂e/kWh)",
            cl_fact3: "Factor (tCO₂e/Flight)",
            cl_res: "Result:",
            cl_intensity: "Refinery Emission Intensity",
            cl_tot_em: "Total Emission (tCO₂e)",
            cl_out: "Product Output (Tons)",
            cl_ltifr: "LTIFR (Oil & Gas Safety)",
            cl_cases: "No. of Injuries (LTI)",
            cl_hours: "Total Manhours",
            cl_recycle: "Waste Recycling %",
            cl_rec_ton: "Recycled Waste (Tons)",
            cl_tot_waste: "Total Waste (Tons)",
            cl_rate: "Rate:",
            msg_pass: "✅ Meets Requirements",
            msg_fail: "❌ Does Not Meet Requirements",
            detail_pass: "Figure is within safe limits",
            detail_fail: "Figure exceeds safe limits",
            // Chart
            chart_actual: "Actual",
            chart_limit: "Limit",
            summaryTotal: "Total Est. Emissions (S1+S2+S3+Waste)"
        }
    };

    // --- Scorecard Logic ---
    const scorecardData = [
        { topic: "Energi & Emisi", element: "Kebijakan tertulis (Policy)", topicEn: "Energy & Emissions", elementEn: "Written Policy", group: "energy" },
        { topic: "", element: "Target reduksi (Reduction Target)", topicEn: "", elementEn: "Reduction Target", group: "energy" },
        { topic: "Air & Limbah", element: "Pengelolaan air (Water Mgmt)", topicEn: "Water & Waste", elementEn: "Water Management", group: "water" },
        { topic: "", element: "Daur ulang limbah (Recycling)", topicEn: "", elementEn: "Waste Recycling", group: "water" },
        { topic: "K3 (OHS)", element: "Pelacakan LTIFR (Safety Tracking)", topicEn: "OHS", elementEn: "LTIFR Tracking", group: "safety" },
        { topic: "Tata Kelola", element: "Pelaporan ESG (Reporting)", topicEn: "Governance", elementEn: "ESG Reporting", group: "gov" }
    ];

    let scoreChart = null;
    let emissionChart = null;
    let recycleChart = null;
    let totalPieChart = null;

    function resetData() {
        if(confirm("Apakah Anda yakin ingin menghapus semua data yang tersimpan?")) {
            localStorage.removeItem('calculatorValues');
            localStorage.removeItem('scorecardValues');
            location.reload();
        }
    }

    function downloadCSV() {
        const savedCalc = JSON.parse(localStorage.getItem('calculatorValues')) || {};
        const savedScores = JSON.parse(localStorage.getItem('scorecardValues')) || {};
        
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "Category,Item,Value\n";
        
        for (const [key, value] of Object.entries(savedCalc)) {
            csvContent += `Calculator,${key},${value}\n`;
        }
        
        for (const [key, value] of Object.entries(savedScores)) {
            const item = scorecardData[key].element;
            csvContent += `Scorecard,${item},${value}\n`;
        }

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "sustainability_data.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // --- New Report Generator (Complete) ---
    function generateReportText() {
        // Gather all data
        const totalEm = parseFloat(document.getElementById('total-emission-display').textContent.replace(/\./g,'').replace(',','.')) || 0;
        const target = parseFloat(document.getElementById('target-emission').value) || 0;
        const levelText = document.getElementById('rating-text').textContent;
        const date = new Date().toLocaleDateString('id-ID', { dateStyle: 'full' });
        
        // Investment Data
        const calcCardInvest = document.querySelector('.calc-card[data-calc="capex"]');
        let roi = "-", payback = "-", abatement = "-";
        if (calcCardInvest) {
             // Using textContent directly since values are calculated
             const pEl = document.querySelector('[data-field="payback"]');
             const rEl = document.querySelector('[data-field="roi"]');
             const aEl = document.querySelector('[data-field="abatement"]');
             if(pEl) payback = pEl.textContent;
             if(rEl) roi = rEl.textContent;
             if(aEl) abatement = aEl.textContent;
        }

        // Detailed Emissions
        const s1 = globalScope1.toLocaleString('id-ID', {maximumFractionDigits: 2});
        const s2 = globalScope2.toLocaleString('id-ID', {maximumFractionDigits: 2});
        const s3 = globalScope3.toLocaleString('id-ID', {maximumFractionDigits: 2});
        const waste = globalWasteEmission.toLocaleString('id-ID', {maximumFractionDigits: 2});

        // Status Logic
        let statusHtml = "";
        if (target > 0) {
             const gap = ((totalEm - target) / target * 100).toFixed(1);
             if (totalEm > target) {
                 statusHtml = `<span style="color:#dc2626; font-weight:bold;">⚠️ Melampaui Target (+${gap}%)</span>`;
             } else {
                 statusHtml = `<span style="color:#16a34a; font-weight:bold;">✅ Sesuai Target (Under by ${Math.abs(gap)}%)</span>`;
             }
        } else {
            statusHtml = "Target belum ditetapkan.";
        }

        const reportHTML = `
            <h3>Laporan Kinerja Keberlanjutan (Draft)</h3>
            <p><strong>Tanggal Laporan:</strong> ${date}</p>
            
            <div class="narrative-section">
                <h4>1. Ringkasan Eksekutif</h4>
                <p>Total estimasi emisi GRK perusahaan saat ini adalah <strong>${totalEm.toLocaleString('id-ID')} tCO₂e</strong>. Status kinerja saat ini: ${statusHtml}. Tingkat kematangan keberlanjutan perusahaan dinilai pada level <strong>${levelText}</strong>.</p>
            </div>

            <div class="narrative-section">
                <h4>2. Rincian Emisi (Environmental Footprint)</h4>
                <table class="report-table">
                    <tr><th>Kategori</th><th>Emisi (tCO₂e)</th></tr>
                    <tr><td>Scope 1 (Langsung/BBM)</td><td>${s1}</td></tr>
                    <tr><td>Scope 2 (Energi/Listrik)</td><td>${s2}</td></tr>
                    <tr><td>Scope 3 (Perjalanan Dinas)</td><td>${s3}</td></tr>
                    <tr><td>Scope 3 (Limbah Operasional)</td><td>${waste}</td></tr>
                    <tr><td><strong>Total</strong></td><td><strong>${totalEm.toLocaleString('id-ID')}</strong></td></tr>
                </table>
            </div>

            <div class="narrative-section">
                <h4>3. Analisis Finansial (Green Investment)</h4>
                <p>Berdasarkan simulasi proyek investasi hijau yang diusulkan:</p>
                <ul>
                    <li><strong>Payback Period:</strong> ${payback}</li>
                    <li><strong>ROI (5 Tahun):</strong> ${roi}</li>
                    <li><strong>Biaya Abatement:</strong> ${abatement}</li>
                </ul>
            </div>

            <div class="narrative-section">
                <h4>4. Rekomendasi Strategis</h4>
                <ul>
                    <li><strong>Efisiensi Energi:</strong> Fokus pada pengurangan Scope 1 & 2 yang menjadi kontributor utama.</li>
                    <li><strong>Manajemen Limbah:</strong> Tingkatkan rasio daur ulang untuk mengurangi emisi metana TPA.</li>
                    <li><strong>K3 (Safety):</strong> Pastikan LTIFR tetap di bawah 1.0 melalui audit rutin.</li>
                </ul>
            </div>
            
            <p style="font-size:10px; color:#64748b; margin-top:20px;">*Laporan ini dihasilkan secara otomatis oleh Sustainability Framework Tool.</p>
        `;
        
        const outputBox = document.getElementById('narrative-output');
        const contentDiv = document.getElementById('narrative-content');
        
        contentDiv.innerHTML = reportHTML;
        outputBox.style.display = 'block';
        
        // Smooth scroll block: 'nearest' or 'center' to prevent jumping to top
        outputBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // ... (Rest of the JS remains the same: updatePerformanceMeter, updateSimulation, renderScorecard, updateBadge, calculateScore, updateScoreChart, updateEmissionChart, updateRecycleChart, toggleLanguage, checkThreshold, calculateCard, Init listeners) ...
    
    // --- Update Performance Meter & Simulation ---
    function updatePerformanceMeter() {
        const target = parseFloat(document.getElementById('target-emission').value) || 0;
        // Apply simulation factor
        const simFactor = parseFloat(document.getElementById('simulation-slider').value) / 100;
        
        let total = globalScope1 + globalScope2 + globalScope3 + globalWasteEmission; 
        // Adjusted total after simulation reduction
        total = total * (1 - simFactor);

        const bar = document.getElementById('perf-progress');
        const text = document.getElementById('perf-status-text');
        
        if (target <= 0) {
            bar.style.width = "0%";
            text.textContent = "Status: Target belum diset";
            return;
        }

        const percent = (total / target) * 100;
        const displayPercent = Math.min(percent, 100); // Cap visual at 100%
        
        bar.style.width = displayPercent + "%";
        bar.textContent = Math.round(percent) + "%";

        if (percent <= 80) {
            bar.style.backgroundColor = "var(--secondary)"; // Green
            text.innerHTML = `Status: <span style="color:var(--secondary)">On Track (Aman)</span>`;
        } else if (percent <= 100) {
            bar.style.backgroundColor = "var(--warning)"; // Yellow
            text.innerHTML = `Status: <span style="color:var(--warning)">Warning (Mendekati Batas)</span>`;
        } else {
            bar.style.backgroundColor = "var(--danger)"; // Red
            text.innerHTML = `Status: <span style="color:var(--danger)">Critical (Melampaui Target)</span>`;
        }
    }

    function updateSimulation(val) {
        document.getElementById('sim-val').textContent = val;
        updatePerformanceMeter(); // Re-calc meter based on new simulation
    }

    function renderScorecard() {
        const tbody = document.getElementById("scorecard-table").querySelector("tbody");
        const t = translations[currentLang];
        let html = "";
        const savedScores = JSON.parse(localStorage.getItem('scorecardValues')) || {};

        scorecardData.forEach((row, index) => {
            const topic = currentLang === 'id' ? row.topic : row.topicEn;
            const element = currentLang === 'id' ? row.element : row.elementEn;
            const savedVal = savedScores[index] || "0";
            
            html += `<tr>`;
            if (topic) {
                let rowspan = 1;
                if (index === 0 || index === 2) rowspan = 2; 
                html += `<td rowspan="${rowspan}">${topic}</td>`;
            }
            html += `<td>${element}</td>`;
            html += `<td>
                <select class="score-select" data-index="${index}" data-group="${row.group}" onchange="calculateScore()">
                    <option value="0" ${savedVal === "0" ? "selected" : ""}>0</option>
                    <option value="1" ${savedVal === "1" ? "selected" : ""}>1</option>
                    <option value="2" ${savedVal === "2" ? "selected" : ""}>2</option>
                </select>
            </td>`;
            html += `</tr>`;
        });
        tbody.innerHTML = html;
        calculateScore(false); 
    }

    function updateBadge(level) {
        const badge = document.getElementById('rating-badge');
        const text = document.getElementById('rating-text');
        
        badge.className = 'rating-badge-container'; // reset classes
        
        if (level === translations[currentLang].scoreLevels[0]) { // Early
            badge.classList.add('rating-bronze');
            text.textContent = "🥉 " + level;
        } else if (level === translations[currentLang].scoreLevels[1]) { // Developing
            badge.classList.add('rating-silver');
            text.textContent = "🥈 " + level;
        } else if (level === translations[currentLang].scoreLevels[2]) { // Advanced
            badge.classList.add('rating-gold');
            text.textContent = "🥇 " + level;
        } else {
            text.textContent = "Pending";
        }
    }

    function calculateScore(save = true) {
        let total = 0;
        const selects = document.querySelectorAll(".score-select");
        const scores = {}; 
        const maxScores = { energy: 4, water: 4, safety: 2, gov: 2 };
        
        Object.keys(maxScores).forEach(k => scores[k] = 0);
        const valuesToSave = {};

        selects.forEach(sel => {
            const val = parseInt(sel.value);
            const group = sel.getAttribute('data-group');
            const idx = sel.getAttribute('data-index');
            
            total += val;
            scores[group] += val;
            valuesToSave[idx] = val;
        });
        
        if (save) {
            localStorage.setItem('scorecardValues', JSON.stringify(valuesToSave));
        }

        const maxTotal = selects.length * 2;
        const resultDiv = document.getElementById("score-result");
        const t = translations[currentLang];
        
        let level = "";
        if (total <= 4) level = t.scoreLevels[0];
        else if (total <= 8) level = t.scoreLevels[1];
        else level = t.scoreLevels[2];

        resultDiv.innerHTML = `
            <div>${t.scoreTotal}: ${total} / ${maxTotal}</div>
            <span>${t.scoreLevel}: ${level}</span>
        `;

        updateBadge(level); // Update Header Badge
        updateScoreChart(scores, maxScores);
    }

    function updateScoreChart(scores, maxScores) {
        const ctx = document.getElementById('scoreChart');
        if (!ctx) return;

        const dataPoints = [
            (scores.energy / maxScores.energy) * 100,
            (scores.water / maxScores.water) * 100,
            (scores.safety / maxScores.safety) * 100,
            (scores.gov / maxScores.gov) * 100
        ];

        const labels = currentLang === 'id' 
            ? ['Energi & Emisi', 'Air & Limbah', 'K3 (Safety)', 'Tata Kelola']
            : ['Energy & Emissions', 'Water & Waste', 'Safety (OHS)', 'Governance'];

        if (scoreChart) {
            scoreChart.data.datasets[0].data = dataPoints;
            scoreChart.data.labels = labels;
            scoreChart.data.datasets[0].label = currentLang === 'id' ? 'Kinerja (%)' : 'Performance (%)';
            scoreChart.update();
        } else {
            scoreChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: currentLang === 'id' ? 'Kinerja (%)' : 'Performance (%)',
                        data: dataPoints,
                        fill: true,
                        backgroundColor: 'rgba(56, 189, 248, 0.2)',
                        borderColor: 'rgba(56, 189, 248, 1)',
                        pointBackgroundColor: 'rgba(56, 189, 248, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(56, 189, 248, 1)'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    elements: { line: { borderWidth: 2 } },
                    scales: {
                        r: {
                            angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                            grid: { color: 'rgba(255, 255, 255, 0.1)' },
                            pointLabels: { color: '#94a3b8', font: { size: 11 } },
                            ticks: { display: false, max: 100, min: 0 }
                        }
                    },
                    plugins: { legend: { display: false } }
                }
            });
        }
    }

    function updateEmissionChart(actual) {
        const ctx = document.getElementById('chart-emission');
        if (!ctx) return;
        const limit = THRESHOLDS['emission'].limit; 
        const t = translations[currentLang];

        if (emissionChart) {
            emissionChart.data.datasets[0].data = [actual, limit];
            emissionChart.data.labels = [t.chart_actual, t.chart_limit];
            emissionChart.data.datasets[0].backgroundColor = [
                actual > limit ? 'rgba(239, 68, 68, 0.7)' : 'rgba(74, 222, 128, 0.7)',
                'rgba(148, 163, 184, 0.5)'
            ];
            emissionChart.update();
        } else {
            emissionChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [t.chart_actual, t.chart_limit],
                    datasets: [{
                        label: 'tCO₂e',
                        data: [actual, limit],
                        backgroundColor: [
                            actual > limit ? 'rgba(239, 68, 68, 0.7)' : 'rgba(74, 222, 128, 0.7)',
                            'rgba(148, 163, 184, 0.5)'
                        ],
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',
                    scales: {
                        x: { grid: { display:false }, ticks: { display: false } },
                        y: { grid: { display: false }, ticks: { color: '#e2e8f0', font: { size: 10 } } }
                    },
                    plugins: { legend: { display: false }, tooltip: { enabled: false } }
                }
            });
        }
    }

    function updateRecycleChart(percent) {
        const ctx = document.getElementById('chart-recycle');
        if (!ctx) return;
        
        const remaining = 100 - percent;
        
        if (recycleChart) {
            recycleChart.data.datasets[0].data = [percent, remaining];
            recycleChart.update();
        } else {
            recycleChart = new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Recycled', 'Remaining'],
                    datasets: [{
                        data: [percent, remaining],
                        backgroundColor: ['rgba(74, 222, 128, 0.8)', 'rgba(15, 23, 42, 0.5)'],
                        borderWidth: 0,
                        hoverOffset: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                    cutout: '70%'
                }
            });
        }
    }

    function toggleLanguage() {
        currentLang = currentLang === 'id' ? 'en' : 'id';
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.innerHTML = translations[currentLang][key];
            }
        });

        if(emissionChart) { emissionChart.destroy(); emissionChart = null; }
        if(recycleChart) { recycleChart.destroy(); recycleChart = null; }
        if(totalPieChart) { totalPieChart.destroy(); totalPieChart = null; }

        renderCalculators();
        renderScorecard();
        
        setTimeout(() => {
            document.querySelectorAll(".calc-card").forEach(card => calculateCard(card, false));
        }, 100);
    }

    // --- Calculator Logic ---
    const calcRoot = document.getElementById("calc-root");
    
    const THRESHOLDS = {
        emission: { limit: 14, type: 'max', unit: 'tCO₂e', citation: "[1]", refId: "ref-ghg" },
        scope2: { limit: 10, type: 'max', unit: 'tCO₂e', citation: "[1]", refId: "ref-ghg" }, 
        scope3: { limit: 5, type: 'max', unit: 'tCO₂e', citation: "[1]", refId: "ref-ghg" }, 
        intensity: { limit: 0.03, type: 'max', unit: 'tCO₂e/ton', citation: "[2]", refId: "ref-iogp" },
        ltifr: { limit: 1.0, type: 'max', unit: '', citation: "[3]", refId: "ref-osha" },
        recycle: { limit: 50, type: 'min', unit: '%', citation: "[4]", refId: "ref-lhk" }
    };

    const SOLUTIONS = {
        emission: {
            id: "⚠️ Solusi: Lakukan efisiensi boiler, pertimbangkan *fuel switching* ke gas, atau pasang teknologi penangkap karbon.",
            en: "⚠️ Solution: Perform boiler efficiency measures, consider fuel switching to gas, or install carbon capture technology."
        },
        scope2: {
            id: "⚠️ Solusi: Ganti lampu LED, optimalkan AC/Chiller, atau pasang PLTS Atap (Solar Panel) untuk mengurangi pembelian listrik grid.",
            en: "⚠️ Solution: Switch to LED lights, optimize AC/Chillers, or install Rooftop Solar PV to reduce grid electricity purchase."
        },
        scope3: {
            id: "⚠️ Solusi: Kurangi perjalanan dinas dengan rapat online/virtual, atau pilih maskapai dengan program offset karbon.",
            en: "⚠️ Solution: Reduce business travel with virtual meetings, or choose airlines with carbon offset programs."
        },
        intensity: {
            id: "⚠️ Solusi: Optimalkan throughput kilang, kurangi flaring, dan lakukan peremajaan alat yang boros energi.",
            en: "⚠️ Solution: Optimize refinery throughput, reduce flaring, and revitalize energy-intensive equipment."
        },
        ltifr: {
            id: "⚠️ Solusi: Investigasi akar masalah insiden, perketat *Safety Talk*, MCU rutin, dan audit kepatuhan APD.",
            en: "⚠️ Solution: Investigate incident root causes, tighten Safety Talks, routine MCUs, and PPE compliance audits."
        },
        recycle: {
            id: "⚠️ Solusi: Cari vendor pengolah limbah B3 berizin (3rd party) tambahan atau perbaiki sistem pemilahan sampah di sumber.",
            en: "⚠️ Solution: Find additional licensed hazardous waste 3rd party processors or improve source waste segregation."
        },
        tax: {
            id: "💡 Info: Estimasi pajak ini berdasarkan asumsi tarif regulasi. Pertimbangkan kredit karbon untuk mengurangi beban.",
            en: "💡 Info: This tax estimate is based on regulatory rate assumptions. Consider carbon credits to offset the burden."
        }
    };
    
    // Store global totals for summary
    let globalScope1 = 0;
    let globalScope2 = 0;
    let globalScope3 = 0;
    let globalWasteEmission = 0;

    function updateTotalSummary() {
        const total = globalScope1 + globalScope2 + globalScope3 + globalWasteEmission;
        const el = document.getElementById('total-emission-display');
        if(el) el.textContent = total.toLocaleString('id-ID', { maximumFractionDigits: 3 });

        // Update tax card if it exists via calculation trigger
        const taxCard = document.querySelector('.calc-card[data-calc="tax"]');
        if(taxCard) calculateCard(taxCard, false);

        // Update Pie Chart
        const ctx = document.getElementById('chart-total-pie');
        if(!ctx) return;

        if (totalPieChart) {
            totalPieChart.data.datasets[0].data = [globalScope1, globalScope2, globalScope3, globalWasteEmission];
            totalPieChart.update();
        } else {
            totalPieChart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Scope 1', 'Scope 2', 'Scope 3 (Travel)', 'Scope 3 (Waste)'],
                    datasets: [{
                        data: [globalScope1, globalScope2, globalScope3, globalWasteEmission],
                        backgroundColor: [
                            'rgba(56, 189, 248, 0.8)', // Scope 1 (Blue)
                            'rgba(251, 146, 60, 0.8)', // Scope 2 (Orange)
                            'rgba(167, 139, 250, 0.8)', // Scope 3 (Purple)
                            'rgba(74, 222, 128, 0.8)' // Waste (Green)
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { 
                        legend: { position: 'right', labels: { color: '#cbd5e1', font: { size: 10 } } },
                        tooltip: { enabled: true } 
                    }
                }
            });
        }

        // Trigger Performance Meter Update
        updatePerformanceMeter();
    }

    const renderCalculators = () => {
        if (calcRoot) {
            const t = translations[currentLang];
            const savedValues = JSON.parse(localStorage.getItem('calculatorValues')) || {};

            calcRoot.innerHTML = `
                <div class="calc-card" data-calc="emission">
                    <h5>${t.cl_emission}</h5>
                    <div class="calc-label">${t.cl_act}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="activity" />
                    <div class="calc-label">${t.cl_fact}</div>
                    <input type="number" class="calc-input" placeholder="e.g. 0.00268" step="0.00001" data-field="factor" />
                    <div class="calc-output">
                        <span>${t.cl_res}</span>
                        <span data-field="result" style="color:var(--secondary)">0 tCO₂e</span>
                    </div>
                    <div class="mini-chart-wrapper">
                        <canvas id="chart-emission"></canvas>
                        <button class="chart-download-btn" onclick="downloadChart('chart-emission')">📷</button>
                    </div>
                    <div class="status-box" data-field="status"></div>
                </div>

                <div class="calc-card" data-calc="scope2">
                    <h5>${t.cl_emission2}</h5>
                    <div class="calc-label">${t.cl_act2}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="activity" />
                    <div class="calc-label">${t.cl_fact2}</div>
                    <input type="number" class="calc-input" placeholder="e.g. 0.87 (Jawa-Bali Grid)" step="0.01" data-field="factor" />
                    <div class="calc-output">
                        <span>${t.cl_res}</span>
                        <span data-field="result" style="color:var(--secondary)">0 tCO₂e</span>
                    </div>
                    <div class="status-box" data-field="status"></div>
                </div>

                <div class="calc-card" data-calc="scope3">
                    <h5>${t.cl_emission3}</h5>
                    <div class="calc-label">${t.cl_act3}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="activity" />
                    <div class="calc-label">${t.cl_fact3}</div>
                    <input type="number" class="calc-input" placeholder="e.g. 0.15 (Avg per Flight)" step="0.01" data-field="factor" />
                    <div class="calc-output">
                        <span>${t.cl_res}</span>
                        <span data-field="result" style="color:var(--secondary)">0 tCO₂e</span>
                    </div>
                    <div class="status-box" data-field="status"></div>
                </div>

                <div class="calc-card" data-calc="intensity">
                    <h5>${t.cl_intensity}</h5>
                    <div class="calc-label">${t.cl_tot_em}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="emission" />
                    <div class="calc-label">${t.cl_out}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="output" />
                    <div class="calc-output">
                        <span>${t.cl_res}</span>
                        <span data-field="result" style="color:var(--secondary)">0 tCO₂e/ton</span>
                    </div>
                    <div class="status-box" data-field="status"></div>
                </div>

                <div class="calc-card" data-calc="ltifr">
                    <h5>${t.cl_ltifr}</h5>
                    <div class="calc-label">${t.cl_cases}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="cases" />
                    <div class="calc-label">${t.cl_hours}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="hours" />
                    <div class="calc-output">
                        <span>${t.cl_res}</span>
                        <span data-field="result" style="color:var(--secondary)">0 / 1jt jam</span>
                    </div>
                    <div class="status-box" data-field="status"></div>
                </div>

                <div class="calc-card" data-calc="recycle">
                    <h5>${t.cl_recycle}</h5>
                    <div class="calc-label">${t.cl_rec_ton}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="recycle" />
                    <div class="calc-label">${t.cl_tot_waste}</div>
                    <input type="number" class="calc-input" placeholder="0" data-field="total" />
                    <div class="calc-output">
                        <span>${t.cl_rate}</span>
                        <span data-field="result" style="color:var(--secondary)">0 %</span>
                    </div>
                    <div class="mini-chart-wrapper">
                        <canvas id="chart-recycle"></canvas>
                        <button class="chart-download-btn" onclick="downloadChart('chart-recycle')">📷</button>
                        <div style="position:absolute; top:50%; left:50%; transform:translate(-50%, -40%); font-size:12px; font-weight:bold; color:white;" id="recycle-center-text">0%</div>
                    </div>
                    <div class="status-box" data-field="status"></div>
                </div>

                <div class="calc-card" data-calc="tax">
                    <h5>${t.cl_tax}</h5>
                    <div class="calc-label">${t.summaryTotal}</div>
                    <div style="margin-bottom:10px; font-weight:bold; color:var(--secondary);" id="tax-base-emission">0 tCO₂e</div>
                    <div class="calc-label">${t.cl_tax_rate}</div>
                    <input type="number" class="calc-input" placeholder="30000 (IDR)" value="30000" data-field="rate" />
                    <div class="calc-output">
                        <span>${t.cl_res}</span>
                        <span data-field="result" style="color:var(--accent)">Rp 0</span>
                    </div>
                    <div class="status-box" data-field="status" style="display:block; background:rgba(251,146,60,0.15); border-color:rgba(251,146,60,0.4); color:#fdba74;">
                        ${t.id === translations.id.id ? SOLUTIONS.tax.id : SOLUTIONS.tax.en}
                    </div>
                </div>
            `;

            // Restore values - Correct variable name here!
            calcRoot.querySelectorAll('input').forEach(input => {
                const key = input.getAttribute('data-field') + '_' + input.closest('.calc-card').getAttribute('data-calc');
                if (savedValues[key]) input.value = savedValues[key];
            });

            attachListeners();
        }
    };

    const attachListeners = () => {
        calcRoot.querySelectorAll(".calc-card").forEach(card => {
            card.addEventListener("input", () => calculateCard(card));
        });
    };

    const checkThreshold = (type, val) => {
        const cfg = THRESHOLDS[type];
        const t = translations[currentLang];
        if (!cfg) return null;

        let passed = false;
        if (cfg.type === 'max') passed = val <= cfg.limit;
        if (cfg.type === 'min') passed = val >= cfg.limit;

        return {
            passed: passed,
            limit: cfg.limit,
            unit: cfg.unit,
            msg: passed ? t.msg_pass : t.msg_fail,
            detail: passed 
                ? `${t.detail_pass} (${cfg.type === 'max' ? '≤' : '≥'} ${cfg.limit} ${cfg.unit})` 
                : `${t.detail_fail} (${cfg.type === 'max' ? '>' : '<'} ${cfg.limit} ${cfg.unit})`,
            citation: cfg.citation,
            refId: cfg.refId
        };
    };

    const calculateCard = (card, save = true) => {
        const type = card.dataset.calc;
        // Safety check: if no type is defined (like the results container), exit
        if (!type) return; 
        
        const get = (name) => {
            const el = card.querySelector(`[data-field="${name}"]`);
            return el && el.value !== "" ? parseFloat(el.value) : 0;
        };

        if (save) {
            const savedValues = JSON.parse(localStorage.getItem('calculatorValues')) || {};
            card.querySelectorAll('input').forEach(input => {
                const key = input.getAttribute('data-field') + '_' + type;
                savedValues[key] = input.value;
            });
            localStorage.setItem('calculatorValues', JSON.stringify(savedValues));
        }

        let val = 0;
        if (type === "emission") {
            val = get("activity") * get("factor");
            globalScope1 = val;
            updateEmissionChart(val); 
            updateTotalSummary();
        } else if (type === "scope2") {
            const rawFactor = get("factor");
            const kWh = get("activity");
            val = (kWh * rawFactor) / 1000; 
            globalScope2 = val;
            updateTotalSummary();
        } else if (type === "scope3") {
            val = get("activity") * get("factor");
            globalScope3 = val;
            updateTotalSummary();
        } else if (type === "intensity") {
            const output = get("output");
            val = output > 0 ? get("emission") / output : 0;
        } else if (type === "ltifr") {
            const hours = get("hours");
            val = hours > 0 ? (get("cases") * 1000000) / hours : 0;
        } else if (type === "recycle") {
            const total = get("total");
            const recycled = get("recycle");
            val = total > 0 ? (recycled / total) * 100 : 0;
            
            const landfilled = total - recycled;
            if (landfilled > 0) {
                globalWasteEmission = landfilled * 1.5;
            } else {
                globalWasteEmission = 0;
            }
            updateTotalSummary(); // Update Pie Chart with Waste Emission

            updateRecycleChart(val);
            const centerText = card.querySelector("#recycle-center-text");
            if(centerText) centerText.textContent = Math.round(val) + "%";
        } else if (type === "tax") {
            // Calculate Tax based on total emissions (adjusted by sim factor)
            const simFactor = parseFloat(document.getElementById('simulation-slider').value) / 100;
            const totalEmission = (globalScope1 + globalScope2 + globalScope3 + globalWasteEmission) * (1 - simFactor);
            const rate = get("rate");
            
            const baseDisplay = card.querySelector("#tax-base-emission");
            if(baseDisplay) baseDisplay.textContent = totalEmission.toLocaleString('id-ID', { maximumFractionDigits: 2 }) + " tCO₂e";

            val = totalEmission * rate;
            // Special display for tax
            const out = card.querySelector('[data-field="result"]');
            if(out) out.textContent = "Rp " + val.toLocaleString('id-ID');
            return; // Exit standard rendering
        } else if (type === "capex") {
            // Investment Calculator Logic
            const cost = get("cost");
            const saving = get("saving");
            const reduction = get("reduction");
            
            // Payback = Cost / Saving
            const payback = saving > 0 ? cost / saving : 0;
            // ROI (5 year) = ((Saving * 5) - Cost) / Cost * 100
            const roi = cost > 0 ? (((saving * 5) - cost) / cost) * 100 : 0;
            // Abatement = Cost / (Reduction * Lifetime e.g. 10 years) - Simplified: Cost/Year Reduction
            const abatement = reduction > 0 ? cost / reduction : 0;

            // Update UI
            const outPayback = card.querySelector('[data-field="payback"]');
            const outRoi = card.querySelector('[data-field="roi"]');
            const outAbatement = card.querySelector('[data-field="abatement"]');
            const statusBox = card.querySelector('[data-field="invStatus"]');

            if(outPayback) outPayback.textContent = payback > 0 ? payback.toFixed(1) + " Tahun" : "-";
            if(outRoi) outRoi.textContent = roi.toFixed(1) + " %";
            if(outAbatement) outAbatement.textContent = abatement > 0 ? "Rp " + abatement.toLocaleString('id-ID') : "-";

            if(statusBox) {
                statusBox.style.display = 'block';
                if (payback > 0 && payback < 5) {
                    statusBox.className = "status-box status-success";
                    statusBox.innerHTML = "✅ <strong>Layak (Feasible)</strong>: Pengembalian modal < 5 tahun.";
                } else if (payback >= 5) {
                    statusBox.className = "status-box status-fail";
                    statusBox.innerHTML = "⚠️ <strong>Perlu Evaluasi</strong>: Pengembalian modal > 5 tahun.";
                } else {
                    statusBox.style.display = 'none';
                }
            }
            return;
        }

        const out = card.querySelector('[data-field="result"]');
        const statusBox = card.querySelector('[data-field="status"]');
        
        let displayVal = "-";
        if (isFinite(val)) {
            displayVal = val.toLocaleString(currentLang === 'id' ? 'id-ID' : 'en-US', { maximumFractionDigits: 5 });
            if (type === 'recycle') displayVal += " %";
            else if (type === 'intensity') displayVal += " tCO₂e/ton";
            else if (type === 'emission' || type === 'scope2' || type === 'scope3') displayVal += " tCO₂e";
            else displayVal += (currentLang === 'id' ? " / 1jt jam" : " / 1M hours");
        }
        
        if (out) out.textContent = displayVal;

        if (isFinite(val) && val > 0) {
            const check = checkThreshold(type, val);
            if (check) {
                if (statusBox) {
                    statusBox.style.display = "block";
                    statusBox.className = "status-box " + (check.passed ? "status-success" : "status-fail");
                    
                    let html = `
                        <div class="status-header">${check.msg}</div>
                        <div>${check.detail}</div>
                        <div class="status-citation">
                            <span>Ref: ${check.citation}</span>
                        </div>
                    `;
                    
                    if (!check.passed) {
                        html += `<div class="solution-box">${SOLUTIONS[type][currentLang]}</div>`;
                    }
                    
                    statusBox.innerHTML = html;
                }
                
                card.style.borderColor = check.passed ? "var(--secondary)" : "var(--danger)";
                if (out) out.style.color = check.passed ? "var(--secondary)" : "var(--danger)";
            }
        } else {
            if(statusBox) statusBox.style.display = "none";
            card.style.borderColor = "rgba(148, 163, 184, 0.3)";
            if (out) out.style.color = "var(--secondary)";
        }
    };

    renderCalculators();
    renderScorecard();
    
    setTimeout(() => {
        document.querySelectorAll(".calc-card").forEach(card => calculateCard(card, false));
    }, 500); 

    const btnLoadPertamina = document.getElementById("btn-load-pertamina");
    const explanationDiv = document.getElementById("pertamina-explanation");

    if (btnLoadPertamina) {
        btnLoadPertamina.addEventListener("click", () => {
            explanationDiv.style.display = "block";
            fillInput("emission", "activity", 5000);
            fillInput("emission", "factor", 0.00268);
            
            fillInput("scope2", "activity", 2000);
            fillInput("scope2", "factor", 0.87); 

            fillInput("scope3", "activity", 10); // 10 Flights
            fillInput("scope3", "factor", 0.15); // tCO2 per flight
            
            fillInput("intensity", "emission", 16.64); // Adjusted for Scope 3
            fillInput("intensity", "output", 500);
            fillInput("ltifr", "cases", 1);
            fillInput("ltifr", "hours", 1000000);
            fillInput("recycle", "recycle", 6);
            fillInput("recycle", "total", 10);
            fillInput("tax", "rate", 30000); 
            
            // Example Project
            fillInput("capex", "cost", 500000000);
            fillInput("capex", "saving", 150000000);
            fillInput("capex", "reduction", 50);

            document.querySelectorAll(".calc-card").forEach(card => calculateCard(card));
            explanationDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
    }

    function fillInput(cardType, fieldName, value) {
        const card = document.querySelector(`.calc-card[data-calc="${cardType}"]`);
        if (card) {
            const input = card.querySelector(`[data-field="${fieldName}"]`);
            if (input) input.value = value;
        }
    }
