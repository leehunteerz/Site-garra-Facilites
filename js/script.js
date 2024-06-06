document.addEventListener("DOMContentLoaded", function () {
  initTabNav();
  initAccordion();
  initScrollSuave();
  initAnimacaoScroll();
  initHamburguerMenu();
  initHomeButton();
  initModalButtons();
  initContactForm();
  initCloseModal();
  initScrollSpy();  // Adicionando a função para ativar o menu ao scroll
});

function initScrollSpy() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar a");

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7 // 60% da seção deve estar visível 
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
}

document.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;
  let links = document.querySelectorAll('.navbar a');
  
  links.forEach((link) => {
      let section = document.querySelector(link.hash);
      // Verifica se a seção existe no documento
      if(section) {
          let sectionTop = section.offsetTop;

          // Verifica se a seção está na viewport
          if(sectionTop - 50 <= scrollPosition && sectionTop + section.offsetHeight > scrollPosition ) {
              links.forEach((link) => link.classList.remove('active'));
              link.classList.add('active');
          } else {
              link.classList.remove('active');
          }
      }
  });
});


function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    activeTab(0);

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

function initHamburguerMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a');

  menuToggle.addEventListener('click', (event) => {
    event.stopPropagation();
    navbar.classList.toggle('show');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
      if (window.innerWidth <= 768) {
        navbar.classList.remove('show');
      }
    });
  });

  document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
      navbar.classList.remove('show');
    }
  });
}

function initHomeButton() {
  document.querySelector(".menu li:first-child a").classList.add("active");
}

function initModalButtons() {
  const openModalButtons = document.querySelectorAll("[id^=openModalBtn]");
  const closeButtons = document.querySelectorAll(".close");

  openModalButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("id").replace("openModalBtn", "myModal");
      document.getElementById(modalId).style.display = "block";
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = this.getAttribute("data-modal-id");
      document.getElementById(modalId).style.display = "none";
    });
  });
}

function initContactForm() {
  const contactForms = document.querySelectorAll("[id^=contactForm]");

  contactForms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const message = this.querySelector("[id^=message]").value;
      console.log("Mensagem enviada:", message);
      document.getElementById("myModal").style.display = "none";
    });
  });
}

function initCloseModal() {
  window.addEventListener("click", function (event) {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
}

$(document).ready(function(){
  $(".sobre-lista dt").click(function(){
    $(".sobre-lista dt").not(this).removeClass("ativo");
    $(".sobre-lista dt").not(this).next("dd").slideUp();
    
    $(this).toggleClass("ativo");
    $(this).next("dd").slideToggle();
  });
});







