let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

showSlide(currentSlide); // แสดงสไลด์แรก

// ใช้ setInterval เพื่อเปลี่ยนรูปภาพอัตโนมัติทุก 5 วินาที (หรือตามที่คุณต้องการ)
setInterval(nextSlide, 5000);

