document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".gallery .project");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        const filter = button.getAttribute("data-filter");
  
        projects.forEach(project => {
          if (filter === "all" || project.getAttribute("data-category") === filter) {
            project.style.display = "flex";  // folosește flex pentru păstrarea layoutului
            project.style.opacity = "1";
            project.style.transform = "scale(1)";
            project.style.pointerEvents = "auto"; // să permită interacțiunea
          } else {
            project.style.opacity = "0";
            project.style.transform = "scale(0.95)";
            project.style.pointerEvents = "none"; // să nu interacționeze
            setTimeout(() => {
              project.style.display = "none";
            }, 300); // așteaptă animația CSS să se termine
          }
        });
      });
    });
  });

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');
  
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  });
  
  