document.addEventListener('DOMContentLoaded',()=>{

    const Header = document.querySelector('header');
    let Scroll_Initial = window.scrollY;

    window.addEventListener('scroll',()=>{
        let current_Scroll = window.scrollY;

    if(current_Scroll > Scroll_Initial){
        Header.classList.add('invisible');
        Drop_Down_Menu.classList.remove('droped');
        HeaderLines.forEach(line =>{
            line.classList.remove('cross');
        })
    }
    else if(current_Scroll < Scroll_Initial){
        Header.classList.remove('invisible');
    }
    else{
        Header.classList.add('invisible');
    }
     Scroll_Initial = current_Scroll;
    });

    const Drop_Menu = document.querySelector('.box');
    const Drop_Down_Menu = document.querySelector('.dropdown-nav');
    const HeaderLines = document.querySelectorAll('.line');

    Drop_Menu.addEventListener('click',()=>{
        Drop_Down_Menu.classList.toggle('droped');

        if(Header.classList.contains('radiusNone')){
            setTimeout(()=>{
                Header.classList.toggle('radiusNone')
            },450);
        }
        else{
            Header.classList.toggle('radiusNone')
        }
       
        HeaderLines.forEach(line =>{
            line.classList.toggle('cross');
        })
    });

    const CardPret = document.querySelectorAll('.cardPret');
    CardPret.forEach(card =>{
        const orar = card.querySelector('.orar');
        const pret = card.querySelector('.pret');

        let orar_widht = orar.clientWidth;
        let pret_widht = pret.clientWidth;
        let card_width = card.clientWidth;

        let Puncte_width = card_width - (orar_widht + pret_widht);
        
    })

})
