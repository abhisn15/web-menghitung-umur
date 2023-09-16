// function saatDiEnter(event) {
//     if (event.key === 'Enter') {
//         validasiForm(); // Jalankan fungsi validasi
//     }
// }
// function validsiForm() {
//     const inputUltah = document.getElementById('inputUltah');
//     const inputUltahValue = inputUltah.value;

//     const sekarang = new Date().getFullYear()
//     const hasil = sekarang - inputUltahValue;

//     const hasilView = document.getElementById('hasil')
//     hasilView.innerHTML = "Umur anda sekarang adalah: " + hasil + " Tahun";

//     const peringatanView = document.getElementById("peringatan")
//     peringatanView.style = 'color: red;'

//     if (result <= 3 && result >= 1) {
//         resultView.innerHTML += " dan golongan manusia (balita)";
//     } else if (result <= 10 && result >= 3) {
//         resultView.innerHTML += " dan golongan manusia (anak-anak)"
//     } else if (result <= 18 && result >= 10) {
//         resultView.innerHTML += " dan golongan manusia (remaja)"
//     } else if (result <= 30 && result >= 18) {
//         resultView.innerHTML += " dan golongan manusia (dewasa)"
//     } else if (result <= 60 && result >= 30) {
//         resultView.innerHTML += " dan golongan manusia (orang tua)"
//     } else if (result <= 100 && result >= 60) {
//         resultView.innerHTML += " dan golongan manusia (kakek/nenek)"
//     } else if (result <= 9999 && result >= 100) {
//         resultView.innerHTML += " dan golongan manusia (tertua didunia)"
//     }

//     if (inputUltahValue === '') {
//         resultView.style = 'display: none;';
//         peringatanView.innerHTML = 'Mohon isi tahun kelahiran anda'
//     } else {
//         resultView.style = 'display: block;'
//         peringatanView.style = 'display: none'
//     }

//     if (inputUltahValue <= 9999 && inputUltahValue >= 2024) {
//         resultView.style.cssText = 'display: none;';
//         peringatanView.innerHTML = 'Tahun kelahiran tidak boleh lebih dari tahun saat ini (2023)'
//         window.location.reload();
//     }
// }

// function maximumInput() {
//     const inputUltah = document.getElementById('inputUltah');
//     const inputUltahValue = inputUltah.value;

//     inputUltah.value = inputUltahValue.slice(0, 4); // Hanya ambil 4 karakter pertama
// }

function validasiForm() {
    // INI ADALAH UNTUK MEMANGGIL ID inputUltah DI JAVASCRIPT DARI HTML
    const inputUltah = document.getElementById('inputUltah');
    const inputUltahValue = inputUltah.value;

    // INI PERHITUNGAN UNTUK TAHUN SEKARANG SECARA REALTIME
    const tahunSekarang = new Date().getFullYear();

    // INI ADALAH PERHITUNGAN TAHUN SEKARANG DIKURANGI ULANG TAHUN YANG DI INPUT OLEH USER
    const hasil = tahunSekarang - inputUltahValue;

    // INI UNTUK MEMEMANGGIL ID HASIL DI DALAM TAG <p> LALU MENAMBAHKAN VALUE DARI TAG <p> MENGGUNAKAN inner.HTML = 'value untuk tag <p>' + hasil dari pengurangan di atas
    const hasilView = document.getElementById('hasil')
    hasilView.innerHTML = 'Umur anda sekarang adalah: ' + hasil + ' Tahun';

    const peringatanView = document.getElementById('peringatan')
    peringatanView.innerHTML = 'Mohon isi tahun kelahiran anda'

    // INI ADALAH PENGGUNAAN CSS DI DALAM JAVASCRIPT

    // INI ADALAH LOGIC KETIKA USER MENGINPUT DENGAN NILAI YANG KOSONG

    if (inputUltahValue === '') {
        hasilView.style = 'display: none;'
        peringatanView.style = 'display: block; color: red;'
    } else {
        hasilView.style = 'display: block;'
        peringatanView.style = 'display: none;'
    }

    if (inputUltahValue <= 9999 && inputUltahValue >= 2024) {
        hasilView.style = 'display: none;';
        peringatanView.innerHTML = 'Tahun kelahiran tidak boleh lebih dari tahun saat ini (2023)'
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