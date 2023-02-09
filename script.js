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
sr.reveal('.conteudo-principal', {duration : 2000, origin: 'right'})
sr.reveal('.conteudo-secundario-paragrafo', {duration : 2000, origin: 'left'})
sr.reveal('.projetos-itens', {duration : 2000, origin:'left'})
sr.reveal('.projeto-descricao', {duration : 2000, origin:'right'})
sr.reveal('.skills', {duration : 2000, origin:'left'})
sr.reveal('.button', {duration : 2000, origin: 'left'})

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
