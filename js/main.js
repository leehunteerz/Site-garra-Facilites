var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("openModalBtn1");
var span1 = document.getElementById("closeModalBtn1");
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("openModalBtn2");
var span2 = document.getElementById("closeModalBtn2");


document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        img.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });
    });

    document.addEventListener("keydown", (e) => {
        if (
            e.ctrlKey &&
            (e.key === "s" ||
                e.key === "S" ||
                (e.shiftKey && (e.key === "I" || e.key === "i")))
        ) {
            e.preventDefault();
        }
    });
});

window.onscroll = function () {
    var button = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

// Função para rolar a página para o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// botão dark e light
document.getElementById("theme-toggle").addEventListener("click", function () {
    var lightIcon = document.querySelector(".light-icon");
    var darkIcon = document.querySelector(".dark-icon");

    this.classList.toggle("dark-mode");
    document.body.classList.toggle("dark-mode");

    if (this.classList.contains("dark-mode")) {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    } else {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    }
});
