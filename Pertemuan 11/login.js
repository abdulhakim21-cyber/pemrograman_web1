function validateForm() {
    let isValid = true;

    // Reset previous errors
    document.querySelectorAll('.error').forEach(span => span.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    // Validate Nama Pelanggan (max 30 characters)
    const name = document.getElementById('name').value;
    if (!name || name.length > 30) {
        isValid = false;
        document.getElementById('nameError').textContent = 'Nama pelanggan harus diisi dan maksimal 30 karakter.';
        document.getElementById('name').classList.add('error');
    }

    // Validate Email (correct email format)
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Email tidak valid.';
        document.getElementById('email').classList.add('error');
    }

    // Validate Jam Keberangkatan (format hh:mm)
    const departureTime = document.getElementById('departureTime').value;
    const timePattern = /^([01][0-9]|2[0-3]):([0-5][0-9])$/;
    if (!departureTime || !timePattern.test(departureTime)) {
        isValid = false;
        document.getElementById('timeError').textContent = 'Jam harus dalam format hh:mm antara 00:00 hingga 23:59.';
        document.getElementById('departureTime').classList.add('error');
    }

    // Validate Tujuan Keberangkatan
    const destination = document.getElementById('destination').value;
    if (!destination) {
        isValid = false;
        document.getElementById('destinationError').textContent = 'Tujuan keberangkatan harus diisi.';
        document.getElementById('destination').classList.add('error');
    }

    // Validate Jumlah Tiket (between 1 and 10)
    const ticketCount = document.getElementById('ticketCount').value;
    if (!ticketCount || ticketCount < 1 || ticketCount > 10) {
        isValid = false;
        document.getElementById('ticketCountError').textContent = 'Jumlah tiket harus antara 1 dan 10.';
        document.getElementById('ticketCount').classList.add('error');
    }

    if (isValid) {
        displayResult();
    }

    return isValid;
}

function displayResult() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const departureTime = document.getElementById('departureTime').value;
    const destination = document.getElementById('destination').value;
    const ticketCount = document.getElementById('ticketCount').value;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Data Pemesanan:</h3>
        <p><strong>Nama Pelanggan:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Jam Keberangkatan:</strong> ${departureTime}</p>
        <p><strong>Tujuan Keberangkatan:</strong> ${destination}</p>
        <p><strong>Jumlah Tiket:</strong> ${ticketCount}</p>
    `;
}
