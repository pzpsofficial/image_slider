const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let obrazek = document.querySelector('#obrazek');

const photos = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
];

let index = 0;

function previous() {
    index -= 1;
    if (index < 0) {
        index = photos.length - 1;
    }
    console.log(index);
    obrazek.src = `/image_slider/img/${photos[index]}`;
};

function nexte() {
    index += 1;
    if (index > photos.length - 1) {
        index = 0;
    }
    console.log(index);
    obrazek.src = `/image_slider/img/${photos[index]}`;
};

prev.addEventListener('click', previous);
next.addEventListener('click', nexte);
