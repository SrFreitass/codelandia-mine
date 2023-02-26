const botaoMenu = document.querySelector('.menu-mobile');
const listaMenu = document.querySelector('#header');

function activeAccordion() {
    listaMenu.classList.toggle('active');
}

botaoMenu.addEventListener('click', activeAccordion);
