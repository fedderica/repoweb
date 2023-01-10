let hideText_btn = document.getElementById('hideText_btn');

let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
 if (hideText.classList.contains('show')){
    hideText_btn.innerHTML = 'Read Less';
 }
 else { 
    hideText_btn.innerHTML = 'Read More';
 }
 }

 window.addEventListener('scroll', function () {
    let animacion = document.getElementById('animado');
    let posicionObj1 = animacion.getBoundingClientRect().top;

    console.log(posicionObj1);
   let tamañoDePantalla = window.innerHeight/3.5;
   if (posicionObj1 < tamañoDePantalla){
   animacion.style.animation = 'mover 1s ease-out'
}
 })