const galleryImages = document.querySelectorAll('.image-gallery img');

const galleryDivs = document.querySelectorAll('.image-gallery div');


galleryImages.forEach(function (image) {

    image.addEventListener('mouseover', function (event) {

        if (event.target.tagName === 'IMG') {
            this.style.scale = '1.2';
            this.style.transition = 'all 0.5s ease-in-out';
        }
    });

    image.addEventListener('mouseout', function (event) {

        if (event.target.tagName === 'IMG') {
            this.style.scale = '1';
        }
    });
});