var boton = document.getElementById('boton');
var nav = document.getElementById('main-nav');
var video1 = document.getElementById('video1');
var videos2 = document.getElementById('video2');
var videos3 = document.getElementById('video3');
var videos4 = document.getElementById('video4');
var videos5 = document.getElementById('video5');


nav.addEventListener('click', function() {
    nav.classList.toggle('mostrar'); 
})

video2.addEventListener("click", () => {
    video1.src = "video.mp4"
    video2.src = "love.jpg";
    video2.classList.add('borde');
    video3.classList.remove('borde');
    video4.classList.remove('borde');
    video5.classList.remove('borde');
})

video3.addEventListener("click", () => {
    video1.src = "arcade.mp4";
    video3.src = "arcade.jpeg";
    video2.classList.remove('borde');
    video3.classList.add('borde');
    video4.classList.remove('borde');
    video5.classList.remove('borde');
})

video4.addEventListener("click", () => {
    video1.src = "ashes-remain-on-my-own-lyrics.mp4"
    video4.src = "onmyyown.jpg"
    video2.classList.remove('borde');
    video3.classList.remove('borde');
    video4.classList.add('borde');
    video5.classList.remove('borde');
})

video5.addEventListener("click", () => {
    video1.src = "besomebody.mp4";
    video5.src = "besomebody.jpeg";
    video2.classList.remove('borde');
    video3.classList.remove('borde');
    video4.classList.remove('borde');
    video5.classList.add('borde');
})