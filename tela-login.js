const backgroundImages = [
    'imagens/pet-image.jpg',
    'imagens/pet-image2.png',
    'imagens/pet-image3.jpg',
];

let currentIndex = 0;
const container = document.querySelector('#imagem-principal');

function changeBackground() {

    currentIndex = (currentIndex + 1) % backgroundImages.length;
    

    container.style.backgroundImage = `url(${backgroundImages[currentIndex]})`;
}

setInterval(changeBackground, 3000); 
