document.addEventListener('DOMContentLoaded', function () {
  // Inițializare LightGallery pentru fiecare galerie
  const galerii = document.querySelectorAll('.galerie');
  galerii.forEach((galerie) => {
    lightGallery(galerie, {
      selector: 'a',
      plugins: [lgZoom, lgThumbnail],
      speed: 500
    });
  });

  // Inițializare Swiper
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });

  // Formular de contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Mesajul a fost trimis. Mulțumim!');
      contactForm.reset();
    });
  }

  // Navigație activă
  document.querySelectorAll('.nav li a').forEach(link => {
    link.addEventListener('click', function () {
      const currentActive = document.querySelector('.nav li a.active');
      if (currentActive) currentActive.classList.remove('active');
      this.classList.add('active');
    });
  });

  // Owl Carousel pentru meniu
  $(".owl-menu-item").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 3 }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuTrigger = document.querySelector(".menu-trigger");
  const header = document.querySelector(".main-nav");

  menuTrigger.addEventListener("click", function () {
    header.classList.toggle("active");
  });

  // Opțional: închide meniul când dai click pe un link din meniu (pe mobil)
  const navLinks = document.querySelectorAll(".main-nav .nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      if (header.classList.contains("active")) {
        header.classList.remove("active");
      }
    });
  });
});