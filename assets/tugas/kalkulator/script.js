// Ambil elemen tampilan kalkulator
let display = document.getElementById('display');

// Fungsi untuk menambahkan angka atau operator ke tampilan
function appendToDisplay(value) {
    // Jika tampilan menunjukkan "0", ganti dengan nilai baru
    if (display.innerText === "0") {
        display.innerText = value;
    } else {
        display.innerText += value; // Tambahkan nilai baru ke akhir tampilan
    }
}

// Fungsi untuk menghapus semua isi tampilan
function clearDisplay() {
    display.innerText = "0"; // Reset tampilan ke "0"
}

// Fungsi untuk menghapus digit terakhir
function deleteDigit() {
    // Jika panjang teks lebih dari 1, hapus karakter terakhir
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        // Jika hanya ada satu karakter, reset tampilan ke "0"
        display.innerText = "0";
    }
}

// Fungsi untuk menghitung ekspresi matematika
function calculate() {
    try {
        // Gunakan eval untuk menghitung ekspresi
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "Error"; // Tampilkan "Error" jika ada kesalahan
    }
}
