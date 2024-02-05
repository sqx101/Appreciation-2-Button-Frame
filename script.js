let currentImageIndex = 0;
const images = [
    { url: "https://i.postimg.cc/ry0c7285/Nouns-en-MAXPAIN.png", mintLink: "https://zora.co/collect/base:0xe20f1c5bea7eb3c4dd6fe2eeeec597d1a74c5b8b/1" },
    { url: "https://i.postimg.cc/65vSf9B1/Nouns-en-Cow.png", mintLink: "https://zora.co/collect/base:0xe20f1c5bea7eb3c4dd6fe2eeeec597d1a74c5b8b/2" },
    { url: "https://i.postimg.cc/2SdKg2bQ/Nouns-en-Pho.png", mintLink: "https://zora.co/collect/base:0xe20f1c5bea7eb3c4dd6fe2eeeec597d1a74c5b8b/3" },
    { url: "https://i.postimg.cc/dQXpC7cy/Nouns-en-Boots.png", mintLink: "https://zora.co/collect/base:0xe20f1c5bea7eb3c4dd6fe2eeeec597d1a74c5b8b/4" },
    { url: "https://i.postimg.cc/bvzBPkkK/nouns-en-BLe-U.png", mintLink: "https://zora.co/collect/base:0xe20f1c5bea7eb3c4dd6fe2eeeec597d1a74c5b8b/5" },
    { url: "https://i.postimg.cc/nhfWd6zV/Nouns-en-ROug-E.png", mintLink: "https://zora.co/collect/base:0xe20f1c5bea7eb3c4dd6fe2eeeec597d1a74c5b8b/6" },
    // Add more images and their corresponding Zora mint links
];

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('image-carousel');
    carousel.style.backgroundImage = `url(${images[currentImageIndex].url})`;
    document.getElementById('mint-button').setAttribute('href', images[currentImageIndex].mintLink);
}

document.getElementById('next-button').addEventListener('click', showNextImage);

// Initialize the carousel with the first image
updateCarousel();
