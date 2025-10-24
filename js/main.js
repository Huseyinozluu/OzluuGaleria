// 🌙 Karanlık Tema
const toggle = document.getElementById("dark-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("fa-moon");
    toggle.classList.toggle("fa-sun");
});

// 📱 Mobil Menü
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("aktif");
});

const buyButtons = document.querySelectorAll(".arac-kart button");
const popup = document.getElementById("form-popup");
const closePopup = document.getElementById("close-popup");
const form = document.getElementById("buy-form");

buyButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});

// Gönder butonu - formu simüle et
form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Form başarıyla gönderildi! Ekibimiz en kısa sürede sizinle iletişime geçecektir.");
    popup.style.display = "none";
    form.reset();
});