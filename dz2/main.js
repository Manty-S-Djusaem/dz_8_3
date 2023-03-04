const url = 'https://jsonplaceholder.typicode.com/photos';
let photos = [];
let currentPhotoIndex = 0;

async function fetchPhotos() {
    const response = await fetch(url);
    const data = await response.json();
    photos = data.slice(0, 200);
}

function displayCurrentPhoto() {
    const currentPhoto = document.querySelector('.current-photo');
    currentPhoto.src = photos[currentPhotoIndex].url;
}

function handleNext() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }
    displayCurrentPhoto();
}

function handlePrev() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    }
    displayCurrentPhoto();
}

async function init() {
    await fetchPhotos();
    displayCurrentPhoto();

    const prevButton = document.querySelector('.prev-button');
    prevButton.addEventListener('click', handlePrev);

    const nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', handleNext);
}

init();