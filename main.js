async function fetchPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const photos = await response.json();
    return photos;
}

async function displayPhotos() {
    const photos = await fetchPhotos();
    const gallery = document.querySelector('#gallery');
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        gallery.appendChild(img);
    });
}
displayPhotos();
