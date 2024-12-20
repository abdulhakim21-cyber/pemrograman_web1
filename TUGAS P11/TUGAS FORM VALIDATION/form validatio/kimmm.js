function validateForm() {
    let isValid = true;

    document.querySelectorAll('.error').forEach(error => error.textContent = '');

    const name = document.getElementById('name').value;
    if (!name) {
        document.getElementById('nameError').textContent = 'Nama pelanggan wajib diisi.';
        isValid = false;
    } else if (name.length > 30) {
        document.getElementById('nameError').textContent = 'Nama maksimal 30 karakter.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        document.getElementById('emailError').textContent = 'Email wajib diisi.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Format email tidak valid.';
        isValid = false;
    }

    const time = document.getElementById('time').value;
    const timeRegex = /^([01]?[0-9]|2[0-3])\.[0-5][0-9]$/;
    if (!time) {
        document.getElementById('timeError').textContent = 'Jam keberangkatan wajib diisi.';
        isValid = false;
    } else if (!timeRegex.test(time)) {
        document.getElementById('timeError').textContent = 'Format jam tidak valid.';
        isValid = false;
    }

    const destination = document.getElementById('destination').value;
    if (!destination) {
        document.getElementById('destinationError').textContent = 'Tujuan keberangkatan wajib diisi.';
        isValid = false;
    }

    const ticket = document.getElementById('ticket').value;
    if (!ticket) {
        document.getElementById('ticketError').textContent = 'Jumlah tiket wajib diisi.';
        isValid = false;
    } else if (ticket < 1 || ticket > 10) {
        document.getElementById('ticketError').textContent = 'Jumlah tiket harus antara 1-10.';
        isValid = false;
    }

    if (isValid) {
        const output = `
            <p><strong>Data Pemesanan:</strong></p>
            <p>Nama Pelanggan: ${name}</p>
            <p>Email: ${email}</p>
            <p>Jam Keberangkatan: ${time}</p>
            <p>Tujuan Keberangkatan: ${destination}</p>
            <p>Jumlah Tiket: ${ticket}</p>
        `;
        document.getElementById('output').innerHTML = output;
    }

    return isValid;
}
