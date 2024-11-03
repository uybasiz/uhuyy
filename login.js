function kirimData() {
    var nama = document.getElementById('nama').value;
    var password = document.getElementById('password').value;

    // Simpan nama dan password ke localStorage
    localStorage.setItem('nama', nama);
    localStorage.setItem('password', password);

    // Tampilkan notifikasi setelah data tersimpan
    alert('Data telah tersimpan');

    // Simpan data ke URL untuk di-redirect
    var params = new URLSearchParams();
    params.append('nama', nama);
    params.append('password', password);

    // Redirect ke halaman hasil dengan query string
    window.location.href = 'home.html?' + params.toString();
    return false; // Mencegah submit form standar
}

function hideseek() {
    var password = document.getElementById("password");
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
}