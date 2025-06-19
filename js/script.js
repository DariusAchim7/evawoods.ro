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
  
    // Formular de contact cu validare
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            let valid = true;
  
            // Curățare mesaje de eroare anterioare
            document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const message = document.getElementById("message");
  
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
  
            if (!name.value.trim()) {
                document.getElementById("error-name").textContent = "Introdu numele.";
                valid = false;
            }
  
            if (!email.value.trim()) {
                document.getElementById("error-email").textContent = "Introdu emailul.";
                valid = false;
            } else if (!emailPattern.test(email.value)) {
                document.getElementById("error-email").textContent = "Email invalid.";
                valid = false;
            }
  
            if (!phone.value.trim()) {
                document.getElementById("error-phone").textContent = "Introdu numărul de telefon.";
                valid = false;
            }
  
            if (!message.value.trim()) {
                document.getElementById("error-message").textContent = "Scrie un mesaj.";
                valid = false;
            }
  
            if (!valid) {
                e.preventDefault();
                return;
            }
  
            // Dacă totul e valid, formularul va fi trimis normal către Web3Forms
        });
    }
  
    // Navigație activă și închiderea meniului pe mobil
    const navLinks = document.querySelectorAll('.nav li a');
    const header = document.querySelector(".main-nav");
    const menuTrigger = document.querySelector(".menu-trigger");
  
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            const currentActive = document.querySelector('.nav li a.active');
            if (currentActive) {
                currentActive.classList.remove('active');
            }
            this.classList.add('active');
  
            if (header.classList.contains("active")) {
                header.classList.remove("active");
            }
        });
    });
  
    if (menuTrigger && header) {
        menuTrigger.addEventListener("click", function () {
            header.classList.toggle("active");
        });
    }
  
    // Owl Carousel pentru portofoliu
    if (typeof jQuery !== 'undefined' && $(".owl-menu-item").length) {
        var owl = $(".owl-menu-item").owlCarousel({
            loop: true,
            margin: 30,
            nav: false,
            dots: false,
            responsive: {
                0: { items: 1 },
                768: { items: 2 },
                1024: { items: 3 }
            }
        });
  
        $(".owl-prev-custom").click(function() {
            owl.trigger("prev.owl.carousel");
        });
  
        $(".owl-next-custom").click(function() {
            owl.trigger("next.owl.carousel");
        });
    }
  });
  