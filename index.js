function validasiForm() {
    // INI ADALAH UNTUK MEMANGGIL ID inputUltah DI JAVASCRIPT DARI HTML
    const inputUltah = document.getElementById('inputUltah');
    const inputUltahValue = inputUltah.value;

    // INI PERHITUNGAN UNTUK TAHUN SEKARANG SECARA REALTIME
    const tahunSekarang = new Date().getFullYear()

    // INI ADALAH PERHITUNGAN TAHUN SEKARANG DIKURANGI ULANG TAHUN YANG DI INPUT OLEH USER
    const hasil = tahunSekarang - inputUltahValue

    // INI UNTUK MEMEMANGGIL ID HASIL DI DALAM TAG <p> LALU MENAMBAHKAN VALUE DARI TAG <p> MENGGUNAKAN inner.HTML = 'value untuk tag <p>' + hasil dari pengurangan di atas
    // INI ADALAH PENGGUNAAN CSS DI DALAM JAVASCRIPT
    const hasilView = document.getElementById('hasil')
    hasilView.innerHTML = 'Umur anda sekarang adalah: ' + hasil + ' Tahun'

    const peringatanView = document.getElementById('peringatan')
    peringatanView.innerHTML = 'Mohon isi tahun kelahiran anda'

    // INI ADALAH LOGIKA UNTUK USER KETIKA MENGINPUT SETIAP HASIL UMUR ANDA SEKARANG ADALAH DITAMBAH DENGAN KONTEN TEXT TAMBAHAN ( .innerHTML += ) BERUPA GOLONGAN
    if (hasil <= 3 && hasil >= 1) {
        hasilView.innerHTML += " dan golongan manusia (balita)"
    } else if (hasil <= 10 && hasil >= 3) {
        hasilView.innerHTML += " dan golongan manusia (anak-anak)"
    } else if (hasil <= 18 && hasil >= 10) {
        hasilView.innerHTML += " dan golongan manusia (remaja)"
    } else if (hasil <= 30 && hasil >= 18) {
        hasilView.innerHTML += " dan golongan manusia (dewasa)"
    } else if (hasil <= 60 && hasil >= 30) {
        hasilView.innerHTML += " dan golongan manusia (orang tua)"
    } else if (hasil <= 100 && hasil >= 60) {
        hasilView.innerHTML += " dan golongan manusia (kakek/nenek)"
    } else if (hasil <= 2024 && hasil >= 100) {
        hasilView.innerHTML += " dan golongan manusia (kakek buyut/nenek buyut)"
    } else {
        hasilView.innerHTML += " dan golongan manusia (bayi)"
    }

    // INI ADALAH LOGIC KETIKA USER MENGINPUT DENGAN NILAI YANG KOSONG
    if (inputUltahValue === '') {
        hasilView.style = 'display: none;'
        peringatanView.style = 'display: block; color: red;'
    } else {
        hasilView.style = 'display: block;'
        peringatanView.style = 'display: none;'
    }

    // ini adalah sebuah logika ketika user menginput sebuah angka dari inputUltahValue lebih dari tahun saat ini secara (REALTIME) dan mengubah konten dari peringatan view menjadi Tahun kelahiran tidak boleh lebih dari tahun saat ini
    if (inputUltahValue > tahunSekarang) {
        hasilView.style = 'display: none;';
        peringatanView.innerHTML = 'Tahun kelahiran tidak boleh lebih dari tahun saat ini'
        peringatanView.style = 'display: block; color: red; width: 240px;'
    }
}

// Validasi onkeydown didalam input ketika user mengenter lalu memanggil Logic yang ada di validasiForm() di dalam onclick tag button dengan value submit
function saatDiEnter(event) {
    if (event.key === 'Enter') {
        validasiForm();
    }
}

function maximumInput() {
    const inputUltah = document.getElementById('inputUltah');
    const inputUltahValue = inputUltah.value;

    // SYNTAKS INI mengambil nilai dari inputultah.value divalidasi menjadi user hanya memberikan value hanya 4 angka saja
    inputUltah.value = inputUltahValue.slice(0, 4);
}
