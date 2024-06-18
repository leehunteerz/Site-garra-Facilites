window.onload = function () {
  // start buttom de select
  let filterItem = document.querySelector('.items-links');
  let filterImages = document.querySelectorAll('.project-img');

  filterItem.addEventListener('click', (selectedItem) => {
    if (selectedItem.target.classList.contains('item-link')) {
      let activeMenu = document.querySelector('.menu-active');
      if (activeMenu) {
        activeMenu.classList.remove('menu-active');
      }

      selectedItem.target.classList.add('menu-active');
      let filterName = selectedItem.target.getAttribute('data-name');
      filterImages.forEach((image) => {
        let filterImageNames = image.getAttribute('data-name');
        if ((filterImageNames == filterName) || filterName == 'all') {
          image.style.display = 'block';
        } else {
          image.style.display = 'none';
        }
      });
    }
  });

  //  start modal view img
  var modal = document.getElementById("myModal");

  // Declaração única da variável modalImg
  var modalImg = document.getElementById("img01");

  // Declaração única da variável modalVideo
  var modalVideo = document.getElementById("myVideo");

  var captionText = document.getElementById("caption");
  var close = document.getElementsByClassName("close")[0];

  document.querySelectorAll('.btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var contentId = this.getAttribute('data-img');
      var content = document.getElementById(contentId);

      if (content) {
        modal.style.display = "block";

        if (content.tagName === 'IMG') {
          modalImg.src = content.src;
          modalImg.alt = content.alt;
          modalImg.style.display = "block";
          modalVideo.style.display = "none";
        } else if (content.tagName === 'VIDEO') {
          modalVideo.src = content.querySelector('source').src;
          modalVideo.style.display = "block";
          modalImg.style.display = "none";

          // Inicializa o Plyr após o modal ter sido exibido, 
          // mas apenas se ainda não tiver sido inicializado
          $('#myModal').on('shown.bs.modal', function(e) {
            if (!modalVideo.plyr) {
              modalVideo.plyr = new Plyr('#myVideo');
            }
          }); 
        }

        captionText.innerHTML = content.parentElement.querySelector('h4').textContent;
      }
    });
  });

  // Removemos a inicialização duplicada do Plyr aqui

  close.addEventListener('click', function () {
    modal.style.display = "none";

    // Destruir a instância do Plyr ao fechar o modal, se existir
    if (modalVideo.plyr) {
      modalVideo.plyr.destroy();
      modalVideo.plyr = null; // Limpa a referência para permitir nova inicialização
    }
  });

  window.addEventListener('click', function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
}



// document.querySelectorAll('.vodeo-container video').forEach(vid =>{
//   vid.onclick = () => {
//       document.querySelector('.popup-video').style.display = 'block';
//       document.querySelector('.popup-video video').src = vid.getAttribute('src');
//   }
// })

// document.querySelector('.popup-video span').onclick = () =>{
//   document.querySelector('.popup-video').style.display = 'none';

// }



function abrirModal(imgId) {
  // Encontra a imagem clicada
  var img = document.getElementById(imgId);
  // Encontra o modal e a imagem dentro dele
  var modal = document.getElementById("myModal");
  var modalImg = document.getElementById("imgModal");
  // Define a source da imagem do modal para a source da imagem clicada
  modalImg.src = img.src;
  // Mostra o modal
  modal.style.display = "block";
}

function fecharModal() {
  // Encontra o modal e o esconde
  document.getElementById("myModal").style.display = "none";
}




function abrirModalVideo(videoId) {
  // Encontra o vídeo que foi clicado
  var video = document.getElementById(videoId);
  // Encontra o modal e o vídeo dentro do modal
  var modal = document.getElementById("myModal");
  var modalVideo = document.getElementById("modalVideo");
  
  // Define a source do vídeo do modal para a source do vídeo clicado
  modalVideo.src = video.querySelector('source').src; 
  // Carrega o vídeo do modal para que ele seja exibido corretamente
  modalVideo.load();
  // Exibe o modal
  modal.style.display = "block";
}

function fecharModal() {
  // Encontra o modal e o fecha
  document.getElementById("myModal").style.display = "none";
}
const projectImgs = document.querySelectorAll('.project-img');

projectImgs.forEach(projectImg => {
  const dataName = projectImg.dataset.name;
  const img = projectImg.querySelector('img');

  // if (imageMap[dataName]) {
  //   img.src = imageMap[dataName];
  // }
});

const imageMap = {
  'estrutural': '/img/img/transporte especial.jpg',
  'serralheria': '/img/img/transporte especial.jpg',
};