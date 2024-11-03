function toggleMenu() {
    const navbarLinks = document.querySelector('.navbar-links');
    const toggleButton = document.querySelector('.toggle-button');
    navbarLinks.classList.toggle('active');
    toggleButton.classList.toggle('active');
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Ganti slide setiap 3 detik
}

