//PARALLEX SCROLL
var ypos,fullScrnImg;
function parallex () {
    ypos = window.pageYOffset;
    fullScrnImg = document.getElementById('fullScrnImg');
    fullScrnImg.style.top = ypos * .8 +'px';
}
window.addEventListener('scroll',parallex);






