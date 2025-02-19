// Ambil elemen button dan output
const button = document.getElementById("clickMe");
const output = document.getElementById("output");

// Fungsi untuk scroll ke bagian tertentu
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Fungsi untuk membuka link
function openLink(url) {
    window.open(url, '_blank');
}

// Tambahkan event listener ke button
document.getElementById("email").addEventListener("click", function() {
    window.location.href = "https://mail.google.com/mail/?view=cm&fs=1&to=ethaliadewi6@gmail.com"; // Ganti dengan alamat email yang diinginkan
});
document.getElementById("phone").addEventListener("click", function() {
    window.location.href = "https://github.com/ethaliadewi6"; // Ganti "username" dengan nama pengguna GitHub Anda
});

document.getElementById("linkedin").addEventListener("click", function() {
    window.location.href = "https://www.linkedin.com/in/ethalia-dewi-utari/"; // Ganti dengan URL LinkedIn Anda
});


