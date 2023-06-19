///***MOBILE-BTN***///

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
         event.currentTarget.setAttribute('arialabel', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('arialabel', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

///***SCROLL-REVEAL***///

window.sr = ScrollReveal({ reset:true});
ScrollReveal({ distance: '15px' });
sr.reveal('.conteudo-principal', {duration : 1000, origin: 'left'})
sr.reveal('.conteudo-secundario-paragrafo', {duration : 1000, origin: 'left'})
sr.reveal('.abouth-me', {duration : 1000, origin: 'left'})
sr.reveal('.projetos__lista', {duration : 500, origin:'right'})
sr.reveal('.projetos__tela', {duration : 1000, origin:'left'})
sr.reveal('.skills-conteudo', {duration : 1000, origin:'left'})
sr.reveal('.left-login', {duration : 1000, origin: 'left'})
sr.reveal('.card-login', {duration : 1000, origin: 'right'})


///***SCROLL-UP***///

$(document).ready(function(){
    $(window).scroll(function(){    
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
     $('.scroll-up-btn').click(function(){
         $('html').animate({scrollTop: 0});
     });
});
