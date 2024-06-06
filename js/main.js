// Obtem o botão de abrir modal
var openModalBtn = document.getElementById('openModalBtn');

// Obtem o modal
var modal = document.getElementById('myModal');

// Obtem o elemento de fechar do modal
var closeModalBtn = document.getElementById('closeModalBtn');

// Abre o modal ao clicar no botão
openModalBtn.onclick = function () {
    modal.style.display = "block";
}

// Fecha o modal ao clicar no botão de fechar (x)
closeModalBtn.onclick = function () {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora dele
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



document.addEventListener("DOMContentLoaded", (event) => {
    // Desativa o menu de contexto (botão direito do mouse) apenas nas imagens
    document.querySelectorAll("img").forEach((img) => {
        img.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });

        // Desativa a ação de arrastar imagens
        img.addEventListener("dragstart", (e) => {
            e.preventDefault();
        });
    });

    // Desativa Ctrl+S e Ctrl+Shift+I (opcional)
    document.addEventListener("keydown", (e) => {
        if (e.ctrlKey && (e.key === "s" || e.key === "S" || (e.shiftKey && (e.key === "I" || e.key === "i")))) {
            e.preventDefault();
        }
    });
});

// Mostrar ou ocultar o botão dependendo da rolagem da página
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