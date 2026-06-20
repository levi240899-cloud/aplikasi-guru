<!DOCTYPE html>
<html>
<head>
  <base target="_top">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Aplikasi Guru - Futuristik Maroon</title>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <style>
    body { font-family: 'Plus Jakarta Sans', sans-serif; background-color: #0f0204; color: #f3f4f6; }
    .bg-maroon-dark { background-color: #2b060a; }
    .bg-maroon-glow { background-color: #4a0d14; box-shadow: 0 0 15px rgba(128, 0, 32, 0.4); }
    .text-maroon-neon { color: #ff4d6d; text-shadow: 0 0 8px rgba(255, 77, 109, 0.5); }
    .border-maroon { border-color: #5c0f18; }
    .glass-card { background: rgba(43, 6, 10, 0.6); backdrop-filter: blur(12px); border: 1px solid rgba(255, 77, 109, 0.15); }
    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(1);
      cursor: pointer;
    }
  </style>
</head>
<body class="h-screen overflow-hidden flex flex-col">

  <div id="screen-login" class="flex flex-1 items-center justify-center p-6 overflow-y-auto">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl w-full items-center">
      
      <div class="lg:col-span-6 space-y-4">
        <div class="glass-card p-6 rounded-2xl shadow-2xl">
          <div class="mb-4">
            <span class="text-xs font-bold uppercase tracking-widest text-maroon-neon">Portal Pendidik</span>
            <h2 class="text-xl font-bold text-white">Log In Aplikasi</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label class="block text-[11px] font-semibold text-gray-400 uppercase mb-1">Username</label>
              <input type="text" id="login-username" value="andriyan" class="w-full bg-black/40 border border-maroon rounded-xl p-2.5 text-xs text-white focus:outline-none font-mono">
            </div>
            <div>
              <label class="block text-[11px] font-semibold text-gray-400 uppercase mb-1">Password</label>
              <input type="password" id="login-password" value="12345" class="w-full bg-black/40 border border-maroon rounded-xl p-2.5 text-xs text-white focus:outline-none font-mono">
            </div>
          </div>
          <button onclick="prosesLogin()" class="w-full bg-gradient-to-r from-red-800 to-amber-700 text-white font-bold py-2.5 px-4 rounded-xl shadow-lg hover:brightness-125 transition cursor-pointer mt-4 text-xs">
            MASUK APLIKASI →
          </button>
        </div>

        <div class="glass-card p-6 rounded-2xl shadow-2xl border-dashed border-red-500/30">
          <div class="mb-3">
            <h3 class="text-sm font-bold text-white flex items-center gap-1.5">➕ Daftarkan Mapel & Rombel Siswa</h3>
            <p class="text-[11px] text-gray-400">Gunakan tombol Enter untuk memasukkan banyak siswa sekaligus.</p>
          </div>
          <div class="space-y-3 text-xs">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div>
                <label class="block text-gray-400 mb-1">Nama Mata Pelajaran</label>
                <input type="text" id="reg-mapel" class="w-full bg-black/40 border border-maroon rounded-lg p-2 text-white focus:outline-none" placeholder="Contoh: Fisika, Kimia">
              </div>
              <div>
                <label class="block text-gray-400 mb-1">Kelas</label>
                <select id="reg-kelas" class="w-full bg-black/40 border border-maroon rounded-lg p-2 text-white focus:outline-none">
                  <option value="1">1</option><option value="2">2</option><option value="3">3</option>
                  <option value="4">4</option><option value="5">5</option><option value="6">6</option>
                  <option value="7">7</option><option value="8">8</option><option value="9">9</option>
                </select>
              </div>
              <div>
                <label class="block text-gray-400 mb-1">Jam Pelajaran</label>
                <select id="reg-jam" class="w-full bg-black/40 border border-maroon rounded-lg p-2 text-white focus:outline-none font-mono">
                  <option value="07.30 - 08.10">Jam 1 (07.30-08.10)</option>
                  <option value="08.10 - 08.45">Jam 2 (08.10-08.45)</option>
                  <option value="08.45 - 09.20">Jam 3 (08.45-09.20)</option>
                  <option value="09.20 - 09.55">Jam 4 (09.20-09.55)</option>
                  <option value="09.55 - 10.15">Istirahat 1 (09.55-10.15)</option>
                  <option value="10.15 - 10.50">Jam 5 (10.15-10.50)</option>
                  <option value="10.50 - 11.25">Jam 6 (10.50-11.25)</option>
                  <option value="11.25 - 12.15">Istirahat 2 (11.25-12.15)</option>
                  <option value="12.15 - 12.50">Jam 7 (12.15-12.50)</option>
                  <option value="12.50 - 13.30">Jam 8 (12.50-13.30)</option>
                </select>
              </div>
            </div>
            <div>
              <label class="block text-gray-400 mb-1">Daftar Nama Siswa (Satu nama per baris)</label>
              <textarea id="reg-siswa" rows="4" class="w-full bg-black/40 border border-maroon rounded-lg p-2 text-white focus:outline-none font-sans resize-none" placeholder="Zubair&#10;Maulana Umar&#10;Ahmad Rian"></textarea>
            </div>
            <button onclick="prosesTambahMapelBaru()" class="w-full bg-maroon-dark hover:bg-maroon-glow border border-maroon text-maroon-neon py-2 rounded-lg font-bold transition text-xs cursor-pointer">
              ⚡ SINKRONISASIKAN MASSAL DATA BARU
            </button>
          </div>
        </div>
      </div> <div class="lg:col-span-6 space-y-4 text-center lg:text-left">
        <h1 class="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Halo <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Andriyan</span>,
        </h1>
        <p class="text-sm md:text-base text-gray-300 font-light max-w-xl">
          Silahkan gunakan panel di samping untuk melakukan pengelolaan mapel adaptif atau langsung masuk menggunakan kredensial Anda.
        </p>
        <div class="pt-2 flex flex-wrap gap-2 justify-center lg:justify-start text-[10px] font-mono text-gray-400">
          <span class="px-3 py-1.5 rounded-full bg-maroon-dark border border-maroon">✦ Realtime Schedule</span>
          <span class="px-3 py-1.5 rounded-full bg-maroon-dark border border-maroon">✦ Dynamic Row Scaling</span>
        </div>
      </div>

    </div>
  </div>

  <div id="screen-dashboard" class="hidden flex flex-col flex-1 overflow-hidden">
    
    <header class="bg-maroon-dark border-b border-maroon px-6 py-4 flex justify-between items-center shrink-0">
      <div class="flex items-center space-x-6">
        <h1 class="text-lg font-bold tracking-wide text-white flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span> Selamat datang di aplikasi guru
        </h1>
        <div id="digital-clock" class="text-xs bg-black/40 border border-maroon px-4 py-1.5 rounded-xl font-mono text-gray-300">
          Memuat sistem waktu...
        </div>
      </div>
      <button onclick="prosesLogout()" class="bg-red-950/60 border border-red-700/50 text-red-400 hover:bg-red-900 hover:text-white px-4 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer">
        LOGOUT
      </button>
    </header>

    <div class="flex flex-1 overflow-hidden">
      
      <aside class="w-64 bg-black/40 border-r border-maroon flex flex-col overflow-y-auto shrink-0">
        <div class="p-4 space-y-6">
          <button onclick="bukaHalaman('beranda')" class="w-full text-left px-4 py-3 rounded-xl bg-maroon-glow text-white font-semibold flex items-center gap-3 transition cursor-pointer border border-red-500/20">
            📊 Beranda
          </button>
          
          <div>
            <div class="px-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Mata Pelajaran (10 Kelas)</div>
            <div id="sidebar-mapel-list" class="space-y-1"></div>
          </div>
        </div>
      </aside>

      <main class="flex-1 p-6 overflow-y-auto bg-gradient-to-b from-[#140305] to-[#0a0102]">
        
        <div id="page-beranda" class="space-y-6">
          
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div class="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div>
                <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">📝 Input Nilai Ujian Harian</h3>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Mata Pelajaran</label>
                    <select id="input-mapel" onchange="updateDropdownSiswa()" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500"></select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Nama Siswa</label>
                    <select id="input-siswa" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500"></select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Ujian Harian (UH)</label>
                    <select id="input-uh" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500">
                      <option value="UH 1">UH 1</option><option value="UH 2">UH 2</option>
                      <option value="UH 3">UH 3</option><option value="UH 4">UH 4</option>
                      <option value="UH 5">UH 5</option><option value="UH 6">UH 6</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Periode</label>
                    <select id="input-periode" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500">
                      <option value="Hari 1 - STS 1">Hari 1 - STS 1</option>
                      <option value="STS 1 - SAS 1">STS 1 - SAS 1</option>
                      <option value="SAS 1 - STS 2">SAS 1 - STS 2</option>
                      <option value="STS 2 - SAS 2">STS 2 - SAS 2</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Nilai</label>
                    <input type="number" id="input-nilai" min="0" max="100" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500 font-mono" placeholder="0 - 100">
                  </div>
                </div>
              </div>
              <button onclick="prosesSimpanNilai()" class="w-full bg-maroon-glow hover:brightness-125 text-white py-2.5 rounded-xl font-bold text-sm border border-red-500/30 transition cursor-pointer">Simpan Nilai</button>
            </div>

            <div class="glass-card p-6 rounded-2xl flex flex-col justify-between space-y-4">
              <div>
                <h3 class="text-base font-bold text-white mb-3 flex items-center gap-2">🔗 Input Link Ujian</h3>
                <div class="space-y-3">
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Mata Pelajaran</label>
                    <select id="input-link-mapel" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500"></select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Ujian Harian (UH)</label>
                    <select id="input-link-uh" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500">
                      <option value="UH 1">UH 1</option><option value="UH 2">UH 2</option>
                      <option value="UH 3">UH 3</option><option value="UH 4">UH 4</option>
                      <option value="UH 5">UH 5</option><option value="UH 6">UH 6</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Periode</label>
                    <select id="input-link-periode" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500">
                      <option value="Hari 1 - STS 1">Hari 1 - STS 1</option>
                      <option value="STS 1 - SAS 1">STS 1 - SAS 1</option>
                      <option value="SAS 1 - STS 2">SAS 1 - STS 2</option>
                      <option value="STS 2 - SAS 2">STS 2 - SAS 2</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">Tanggal Ujian</label>
                    <input type="date" id="input-link-tanggal" onclick="this.showPicker()" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500 font-mono">
                  </div>
                  <div>
                    <label class="block text-xs font-medium text-gray-400 mb-1">URL / Link Ujian</label>
                    <input type="url" id="input-link-url" class="w-full bg-black/50 border border-maroon rounded-xl p-2.5 text-sm text-white focus:outline-none focus:border-red-500 font-mono" placeholder="https://forms.gle/...">
                  </div>
                </div>
              </div>
              <button onclick="prosesSimpanLinkUjian()" class="w-full bg-gradient-to-r from-red-900 to-maroon hover:brightness-125 text-white py-2.5 rounded-xl font-bold text-sm border border-red-500/30 transition cursor-pointer">Simpan Link</button>
            </div>

            <div class="glass-card p-5 rounded-2xl flex flex-col justify-between border-t-4 border-t-red-600 space-y-4">
              <div>
                <div class="flex justify-between items-center mb-2">
                  <h3 class="text-sm font-bold text-white flex items-center gap-1.5">📅 <span id="cal-month-title">Bulan</span></h3>
                  <span class="text-[9px] font-mono text-maroon-neon bg-red-950/50 px-2 py-0.5 rounded border border-red-900/30">Live Calendar</span>
                </div>
                <div class="w-full text-center">
                  <div class="grid grid-cols-7 text-[10px] font-bold text-gray-400 pb-1.5 border-b border-maroon/30">
                    <div>Min</div><div>Sen</div><div>Sel</div><div>Rab</div><div>Kam</div><div>Jum</div><div>Sab</div>
                  </div>
                  <div id="calendar-cells" class="grid grid-cols-7 gap-y-1 text-[11px] mt-1 font-mono"></div>
                </div>
              </div>

              <div class="border-t border-maroon/40 pt-3">
                <h4 class="text-xs font-bold text-maroon-neon mb-2 flex items-center gap-1">⚡ Jadwal Ujian Pekan Ini:</h4>
                <div id="list-ujian-pekan-ini" class="space-y-1 max-h-24 overflow-y-auto text-[11px]"></div>
              </div>
            </div>

          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="glass-card p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white flex items-center gap-2">📖 Jadwal Pelajaran Hari Ini</h3>
              <div id="list-jadwal-hari-ini" class="space-y-2 max-h-60 overflow-y-auto"></div>
            </div>

            <div class="glass-card p-6 rounded-2xl space-y-3">
              <h3 class="text-base font-bold text-white flex items-center gap-2">🎯 Jadwal Ujian Harian (Sebulan)</h3>
              <div id="list-ujian-sebulan" class="space-y-2 max-h-60 overflow-y-auto"></div>
            </div>
          </div>
        </div>

        <div id="page-mapel" class="hidden space-y-6">
          <div class="flex justify-between items-center border-b border-maroon pb-3">
            <h2 id="title-mapel" class="text-xl font-bold text-white">Nama Mata Pelajaran</h2>
            <span class="text-xs font-mono bg-maroon-dark border border-maroon px-3 py-1 rounded-full text-gray-300">Rincian Akademik</span>
          </div>
          
          <div class="grid grid-cols-1 xl:grid-cols-4 gap-6">
            <div class="xl:col-span-3 glass-card p-6 rounded-2xl overflow-hidden flex flex-col">
              <h3 class="text-sm font-bold text-gray-300 mb-4 flex items-center gap-2">📊 Rekap Nilai Ujian Siswa</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs min-w-[700px]">
                  <thead>
                    <tr class="border-b border-maroon text-gray-400 text-[11px] uppercase font-mono">
                      <th class="pb-3 font-semibold min-w-[140px]">Nama Siswa</th>
                      <th class="pb-3 font-semibold">UH 1</th>
                      <th class="pb-3 font-semibold">UH 2</th>
                      <th class="pb-3 font-semibold">UH 3</th>
                      <th class="pb-3 font-semibold">UH 4</th>
                      <th class="pb-3 font-semibold">UH 5</th>
                      <th class="pb-3 font-semibold">UH 6</th>
                      <th class="pb-3 font-semibold text-maroon-neon">Rata-Rata</th>
                      <th class="pb-3 font-semibold text-amber-400 min-w-[110px]">Periode</th>
                    </tr>
                  </thead>
                  <tbody id="table-body-nilai" class="divide-y divide-maroon/30 text-gray-300"></tbody>
                </table>
              </div>
            </div>

            <div class="glass-card p-6 rounded-2xl space-y-4 xl:col-span-1">
              <h3 class="text-sm font-bold text-gray-300 flex items-center gap-2">📅 Jadwal Ujian Khusus</h3>
              <div id="list-ujian-mapel" class="space-y-2"></div>
            </div>
          </div>
        </div>

      </main>
    </div>
  </div>

  <script>
    let masterData = {};

    function prosesLogin() {
      const user = document.getElementById('login-username').value.trim();
      if(user.toLowerCase() === 'andriyan') {
        document.getElementById('screen-login').classList.add('hidden');
        document.getElementById('screen-dashboard').classList.remove('hidden');
        loadDataAplikasi();
      } else {
        alert('Username salah! Gunakan username "andriyan"');
      }
    }

    function prosesTambahMapelBaru() {
      const namaMapel = document.getElementById('reg-mapel').value.trim();
      const kelas = document.getElementById('reg-kelas').value;
      const jamPelajaran = document.getElementById('reg-jam').value; // Ambil nilai jam
      const namaSiswa = document.getElementById('reg-siswa').value.trim();

      if (!namaMapel || !namaSiswa) {
        return alert("Mohon ketik Nama Mapel dan Nama Siswa!");
      }

      google.script.run.withSuccessHandler(function(res) {
        alert(res.message);
        masterData = res.data;
        
        document.getElementById('reg-mapel').value = '';
        document.getElementById('reg-siswa').value = '';
        
        renderSidebar();
        renderBeranda();
        updateDropdownSiswa();
      }).tambahMapelDanSiswa(namaMapel, kelas, jamPelajaran, namaSiswa); // Kirim parameter jam ke backend
    }

    function prosesLogout() {
      document.getElementById('screen-dashboard').classList.add('hidden');
      document.getElementById('screen-login').classList.remove('hidden');
    }

    function startClock() {
      generateFullCalendar();
      setInterval(() => {
        const opsi = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const d = new Date();
        document.getElementById('digital-clock').innerText = `${d.toLocaleDateString('id-ID', opsi)} | ${d.toLocaleTimeString('id-ID')}`;
      }, 1000);
    }

    function generateFullCalendar() {
      const d = new Date();
      const tahun = d.getFullYear();
      const bulan = d.getMonth();
      const tglHariIni = d.getDate();

      document.getElementById('cal-month-title').innerText = d.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' });

      const hariPertama = new Date(tahun, bulan, 1).getDay();
      const jumlahHari = new Date(tahun, bulan + 1, 0).getDate();

      const cellsContainer = document.getElementById('calendar-cells');
      cellsContainer.innerHTML = '';

      for (let i = 0; i < hariPertama; i++) {
        cellsContainer.innerHTML += `<div class="py-1 text-transparent">.</div>`;
      }

      for (let tgl = 1; tgl <= jumlahHari; tgl++) {
        if (tgl === tglHariIni) {
          cellsContainer.innerHTML += `
            <div class="flex items-center justify-center py-0.5">
              <span class="w-5 h-5 flex items-center justify-center bg-gradient-to-br from-red-600 to-maroon text-white font-bold rounded-full shadow-[0_0_8px_rgba(255,77,109,0.7)] border border-red-400 text-[10px]">
                ${tgl}
              </span>
            </div>`;
        } else {
          cellsContainer.innerHTML += `
            <div class="flex items-center justify-center py-0.5 text-gray-400 hover:text-white rounded transition">
              ${tgl}
            </div>`;
        }
      }
    }

    function loadDataAplikasi() {
      startClock();
      if (!masterData.mapelList) {
        google.script.run.withSuccessHandler(function(data) {
          masterData = data;
          renderSidebar();
          renderBeranda();
          updateDropdownSiswa();
        }).getDataAplikasi();
      } else {
        renderSidebar();
        renderBeranda();
        updateDropdownSiswa();
      }
    }

    function renderSidebar() {
      const container = document.getElementById('sidebar-mapel-list');
      container.innerHTML = '';
      masterData.mapelList.forEach(mapel => {
        const btn = document.createElement('button');
        btn.className = "w-full text-left px-4 py-2 text-xs rounded-xl hover:bg-maroon-dark border border-transparent hover:border-maroon transition text-gray-400 hover:text-white truncate block cursor-pointer";
        btn.innerText = `✏️ ${mapel}`;
        btn.onclick = () => bukaHalamanMapel(mapel);
        container.appendChild(btn);
      });

      document.getElementById('input-mapel').innerHTML = masterData.mapelList.map(m => `<option value="${m}">${m}</option>`).join('');
      document.getElementById('input-link-mapel').innerHTML = masterData.mapelList.map(m => `<option value="${m}">${m}</option>`).join('');
    }

    function updateDropdownSiswa() {
      const mapel = document.getElementById('input-mapel').value;
      const daftarSiswa = masterData.siswa[mapel] || [];
      document.getElementById('input-siswa').innerHTML = daftarSiswa.length 
        ? daftarSiswa.map(s => `<option value="${s.nama}">${s.nama}</option>`).join('')
        : '<option value="">-- Tidak ada siswa --</option>';
    }

    function renderBeranda() {
      document.getElementById('list-jadwal-hari-ini').innerHTML = masterData.jadwalHariIni.map(j => `
        <div class="flex justify-between items-center p-3 rounded-xl bg-black/30 border border-maroon text-xs">
          <span class="font-medium text-white">${j.mapel}</span>
          <span class="font-mono text-maroon-neon bg-red-950/50 px-2 py-0.5 rounded border border-red-900/30">${j.jam}</span>
        </div>
      `).join('');

      document.getElementById('list-ujian-sebulan').innerHTML = masterData.ujianSebulan.map(u => {
        const infoUjian = u.uhKe && u.periode ? `<span class="text-[10px] text-gray-400 block font-mono font-light">${u.uhKe} • ${u.periode}</span>` : '';
        return `
          <div class="flex items-center justify-between p-3 rounded-xl bg-black/30 border border-maroon text-xs">
            <div class="flex items-center space-x-3">
              <input type="checkbox" class="w-4 h-4 rounded accent-red-700 bg-black/50 border-maroon" ${u.done ? 'checked' : ''}>
              <div>
                <span class="${u.done ? 'line-through text-gray-500' : 'text-gray-200 font-medium'}">${u.mapel}</span>
                ${infoUjian}
              </div>
            </div>
            <span class="text-[10px] font-mono text-gray-400 bg-maroon-dark px-2 py-0.5 rounded">${u.tgl}</span>
          </div>
        `;
      }).join('');

      const ujianPekanIni = masterData.ujianSebulan.filter(u => !u.done).slice(0, 2);
      const containerPekan = document.getElementById('list-ujian-pekan-ini');
      if(ujianPekanIni.length === 0) {
        containerPekan.innerHTML = `<p class="text-gray-500 italic text-[10px]">Tidak ada ujian penting pekan ini.</p>`;
      } else {
        containerPekan.innerHTML = ujianPekanIni.map(u => {
          const urlLink = u.linkUrl ? u.linkUrl.trim() : '#';
          const infoUH = u.uhKe ? `(${u.uhKe})` : '';

          if (urlLink !== '#') {
            return `
              <div class="flex flex-col gap-1 bg-red-950/30 border border-maroon/40 p-2 rounded-lg text-[10px]">
                <div class="flex justify-between items-center w-full">
                  <span class="text-gray-300 truncate max-w-[120px] font-medium">📖 ${u.mapel} ${infoUH}</span>
                  <span class="text-amber-400 font-mono font-bold">${u.tgl}</span>
                </div>
                <button onclick="event.stopPropagation(); window.open('${urlLink}', '_blank')" class="text-blue-400 hover:underline font-mono text-right mt-0.5 text-[9px] cursor-pointer bg-transparent border-none p-0 self-end">
                  🔗 Buka Ujian ↗
                </button>
              </div>
            `;
          } else {
            return `
              <div class="flex flex-col gap-1 bg-black/20 border border-maroon/20 p-2 rounded-lg text-[10px] opacity-60">
                <div class="flex justify-between items-center w-full">
                  <span class="text-gray-400 truncate max-w-[120px]">📖 ${u.mapel} ${infoUH}</span>
                  <span class="text-gray-500 font-mono">${u.tgl}</span>
                </div>
                <span class="text-gray-500 font-mono text-right text-[9px]">❌ Tautan Kosong</span>
              </div>
            `;
          }
        }).join('');
      }
    }

    function bukaHalaman(page) {
      if(page === 'beranda') {
        document.getElementById('page-beranda').classList.remove('hidden');
        document.getElementById('page-mapel').classList.add('hidden');
      }
    }

    function bukaHalamanMapel(namaMapel) {
      document.getElementById('page-beranda').classList.add('hidden');
      document.getElementById('page-mapel').classList.remove('hidden');
      document.getElementById('title-mapel').innerText = namaMapel;

      const daftarSiswa = masterData.siswa[namaMapel] || [];
      const tbody = document.getElementById('table-body-nilai');
      if(!daftarSiswa.length) {
        tbody.innerHTML = `<tr><td colspan="9" class="py-4 text-center text-xs text-gray-500">Data siswa kosong.</td></tr>`;
      } else {
        tbody.innerHTML = daftarSiswa.map(s => {
          const validNilai = s.nilai && s.nilai.length ? s.nilai : [0,0,0,0,0,0];
          const total = validNilai.reduce((a,b)=>a+(b||0), 0);
          const rata = (total / 6).toFixed(1);
          const periodeSiswa = s.periode || '-';

          return `
            <tr class="hover:bg-maroon-dark/20 transition text-xs font-mono">
              <td class="py-3 font-medium text-white text-left font-sans">${s.nama}</td>
              <td class="py-3">${validNilai[0]!==undefined?validNilai[0]:'-'}</td>
              <td class="py-3">${validNilai[1]!==undefined?validNilai[1]:'-'}</td>
              <td class="py-3">${validNilai[2]!==undefined?validNilai[2]:'-'}</td>
              <td class="py-3">${validNilai[3]!==undefined?validNilai[3]:'-'}</td>
              <td class="py-3">${validNilai[4]!==undefined?validNilai[4]:'-'}</td>
              <td class="py-3">${validNilai[5]!==undefined?validNilai[5]:'-'}</td>
              <td class="py-3 font-bold text-maroon-neon">${rata}</td>
              <td class="py-3 text-amber-400 font-sans">${periodeSiswa}</td>
            </tr>
          `;
        }).join('');
      }

      const ujianTerkait = masterData.ujianSebulan.filter(u => u.mapel === namaMapel);
      document.getElementById('list-ujian-mapel').innerHTML = ujianTerkait.length
        ? ujianTerkait.map(u => {
            const urlLink = u.linkUrl ? u.linkUrl.trim() : '#';
            const detailLabel = u.uhKe && u.periode ? `${u.uhKe} (${u.periode})` : 'Ujian Harian Utama / Susulan';
            
            if (urlLink !== '#') {
              return `
                <div class="p-3 rounded-xl bg-red-950/20 border border-maroon flex flex-col gap-2 text-xs">
                  <div class="flex flex-col">
                    <span class="text-gray-300 font-medium truncate">${detailLabel}</span>
                    <span class="text-maroon-neon font-mono font-bold text-[10px] mt-0.5">📅 ${u.tgl}</span>
                  </div>
                  <div class="flex justify-end">
                    <button onclick="event.stopPropagation(); window.open('${urlLink}', '_blank')" class="px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1 transition bg-red-900/60 hover:bg-red-800 text-white cursor-pointer">
                      🔗 Tautan Google Form ↗
                    </button>
                  </div>
                </div>
              `;
            } else {
              return `
                <div class="p-3 rounded-xl bg-red-950/20 border border-maroon flex flex-col gap-2 text-xs opacity-60">
                  <div class="flex flex-col">
                    <span class="text-gray-400 font-medium truncate">${detailLabel}</span>
                    <span class="text-gray-500 font-mono text-[10px] mt-0.5">📅 ${u.tgl}</span>
                  </div>
                  <div class="flex justify-end">
                    <button disabled class="px-2 py-1 rounded text-[10px] font-mono flex items-center gap-1 bg-gray-800 text-gray-500 cursor-not-allowed">
                      ❌ Tautan Kosong
                    </button>
                  </div>
                </div>
              `;
            }
          }).join('')
        : `<p class="text-xs text-gray-500 italic">Belum ada agenda ujian.</p>`;
    }

    function prosesSimpanNilai() {
      const mapel = document.getElementById('input-mapel').value;
      const nama = document.getElementById('input-siswa').value;
      const uhKe = document.getElementById('input-uh').value;
      const periode = document.getElementById('input-periode').value;
      const nilai = document.getElementById('input-nilai').value;

      if(!nama || !nilai) return alert("Lengkapi input nilai!");

      if(masterData.siswa[mapel]){
        let siswaObj = masterData.siswa[mapel].find(s => s.nama === nama);
        if(siswaObj){
          let idx = parseInt(uhKe.replace("UH ", "")) - 1;
          siswaObj.nilai[idx] = parseInt(nilai);
          siswaObj.periode = periode;
        }
      }

      google.script.run.withSuccessHandler(function(res) {
        alert(res.message);
        document.getElementById('input-nilai').value = '';
        if(document.getElementById('title-mapel').innerText === mapel) {
          bukaHalamanMapel(mapel);
        }
      }).simpanNilaiUjian(mapel, nama, nilai, uhKe, periode);
    }

    function prosesSimpanLinkUjian() {
      const mapel = document.getElementById('input-link-mapel').value;
      const uhKe = document.getElementById('input-link-uh').value;
      const periode = document.getElementById('input-link-periode').value;
      const tanggal = document.getElementById('input-link-tanggal').value;
      const linkUrl = document.getElementById('input-link-url').value;

      if (!tanggal || !linkUrl) {
        return alert("Mohon lengkapi tanggal dan link ujian!");
      }

      const opsiTgl = { day: 'numeric', month: 'long' };
      const tglDiformat = new Date(tanggal).toLocaleDateString('id-ID', opsiTgl);

      if (!masterData.ujianSebulan) {
        masterData.ujianSebulan = [];
      }
      
      masterData.ujianSebulan.push({
        id: Date.now(),
        tgl: tglDiformat,
        mapel: mapel,
        uhKe: uhKe,
        periode: periode,
        linkUrl: linkUrl,
        done: false
      });

      renderBeranda();
      
      google.script.run.withSuccessHandler(function(res) {
        alert(`Link ujian ${mapel} (${uhKe}) berhasil disimpan!`);
      }).simpanLinkUjian(mapel, tanggal, linkUrl, uhKe, periode);

      document.getElementById('input-link-tanggal').value = '';
      document.getElementById('input-link-url').value = '';

      bukaHalamanMapel(mapel);
    }
  </script>
</body>
</html>
