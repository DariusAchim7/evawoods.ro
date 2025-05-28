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

  // Inițializare Swiper (asigură-te că ai un element cu clasa "mySwiper" în HTML dacă vrei să-l folosești)
  // const swiper = new Swiper(".mySwiper", {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //     breakpoints: {
  //         768: { slidesPerView: 2 },
  //         1024: { slidesPerView: 3 }
  //     }
  // });

  // Formular de contact
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function (e) {
          e.preventDefault();
          alert('Mesajul a fost trimis. Mulțumim!');
          contactForm.reset();
      });
  }

  // Navigație activă și închiderea meniului pe mobil
  const navLinks = document.querySelectorAll('.nav li a');
  const header = document.querySelector(".main-nav"); // Selectează elementul care primește clasa 'active'
  const menuTrigger = document.querySelector(".menu-trigger");

  navLinks.forEach(link => {
      link.addEventListener('click', function () {
          // Actualizează clasa 'active' pentru link-urile din meniu
          const currentActive = document.querySelector('.nav li a.active');
          if (currentActive) {
              currentActive.classList.remove('active');
          }
          this.classList.add('active');

          // Închide meniul pe mobil dacă este deschis
          if (header.classList.contains("active")) {
              header.classList.remove("active");
          }
      });
  });

  // Deschide/închide meniul la click pe burger icon
  if (menuTrigger && header) { // Verifică dacă elementele există
      menuTrigger.addEventListener("click", function () {
          header.classList.toggle("active");
      });
  }

  // Owl Carousel pentru portofoliu (folosind jQuery pentru compatibilitate cu plugin-ul)
  // Verifică dacă jQuery este încărcat și dacă elementul caruselului există
  if (typeof jQuery !== 'undefined' && $(".owl-menu-item").length) {
      var owl = $(".owl-menu-item").owlCarousel({
          loop: true,
          margin: 30,
          nav: false, // Navigarea se face prin butoanele custom
          dots: false,
          responsive: {
              0: { items: 1 },
              768: { items: 2 },
              1024: { items: 3 }
          }
      });

      // Butoane custom de navigare pentru Owl Carousel
      $(".owl-prev-custom").click(function() {
          owl.trigger("prev.owl.carousel");
      });

      $(".owl-next-custom").click(function() {
          owl.trigger("next.owl.carousel");
      });
  }
});