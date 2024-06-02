document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'Nature1.jpg', description: '1st Nature Picture, green mountain range.' },
        { src: 'Nature2.jpg', description: '2nd Nature Picture, night time mountains.' },
        { src: 'Nature3.jpg', description: '3rd Nature Picture, sunset mountain range.' },
        { src: 'Nature4.jpg', description: '4th Nature Picture, sunrise mountain range.' },
        { src: 'Nature5.jpg', description: '5th Nature Picture, cloudy mountain range.' }
    ];

    const imgElement = document.getElementById('currentImage');
    const descElement = document.getElementById('imageDescription');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    let intervalId = null;

    function showImage(index) {
        imgElement.src = images[index].src;
        descElement.textContent = images[index].description;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startAutoSlide() {
        intervalId = setInterval(showNext, 3000); // Change image every 3 seconds
    }

    function resetAutoSlide() {
        if (intervalId) {
            clearInterval(intervalId);
            startAutoSlide();
        }
    }
    // Extra Credit: 
    prevBtn.addEventListener('click', () => {
        showPrev();
        resetAutoSlide(); //Reset interval on button click
    });

    nextBtn.addEventListener('click', () => {
        showNext();
        resetAutoSlide(); //Reset interval on button click
    });

    startAutoSlide();
});
