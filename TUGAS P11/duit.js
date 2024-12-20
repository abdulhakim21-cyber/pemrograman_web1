function convertCurrency() {
    // Mendapatkan nilai input jumlah mata uang asing dan pilihan mata uang
    let amount = parseFloat(document.getElementById('amount').value);
    let currency = document.getElementById('currency').value;

    // Memeriksa apakah jumlah mata uang asing valid
    if (isNaN(amount) || amount <= 0) {
        alert('Masukkan jumlah yang valid.');
        return;
    }

    // Nilai tukar mata uang asing terhadap Rupiah
    let exchangeRates = {
        usd: 9915,    // 1 Dollar US = 9,915 Rupiah
        sgd: 13472,   // 1 Dollar Singapore = 13,472 Rupiah
        myr: 874,     // 1 Ringgit Malaysia = 874 Rupiah
        jpy: 120,     // 1 Yen Jepang = 120 Rupiah
        eur: 15888,   // 1 Euro = 15,888 Rupiah
        sar: 3592     // 1 Riyal Arab Saudi = 3,592 Rupiah
    };

    // Cek apakah mata uang asing yang dipilih valid
    if (!exchangeRates[currency]) {
        alert('Mata uang tidak valid.');
        return;
    }

    // Menghitung nilai rupiah
    let rupiahValue = amount * exchangeRates[currency];

    // Menampilkan nilai rupiah di input yang readonly
    document.getElementById('rupiah').value = rupiahValue.toLocaleString('id-ID');
}
