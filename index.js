document.addEventListener('DOMContentLoaded',()=>{

    const Header = document.querySelector('header');
    let Scroll_Initial = window.scrollY;

    const ContainerHow = document.querySelector('.containerHow');
    const progresLineHow = document.querySelector('.HowItWorksBody .containerHow .progresLineHow_Container .progresLineHow');
    const ProgresCircles = document.querySelectorAll('.HowItWorksBody .containerHow .stepHow .circle');
    const Steps_How = document.querySelectorAll('.stepHow');
    const Steps_Titles = document.querySelectorAll('.HowItWorksBody .containerHow .stepHow h6');

    const Coordonate_Steps =[];
    Steps_How.forEach(step =>{
        let Pozitie_X_Step = step.getBoundingClientRect().top;
        Coordonate_Steps.push(Pozitie_X_Step);
    })
    let Pozitie_X_ConatinerHow = ContainerHow.getBoundingClientRect().top + window.scrollY;
    const ProgresLine_maxHeight = ContainerHow.clientHeight;
    


    let increment_scroll = 0;
    let increment_scroll_initial = 0;
    window.addEventListener('scroll',()=>{

        //Scroll pentru seciunea de pasi
        let current_Scroll_How = window.scrollY + 125 + increment_scroll_initial;
       
        const scrollInContainerHow = current_Scroll_How - Pozitie_X_ConatinerHow;

        if(current_Scroll_How >= Pozitie_X_ConatinerHow){

            let rect = progresLineHow.getBoundingClientRect();
            let Scroll_Distance = rect.bottom + window.scrollY + increment_scroll;

            const Procent = (scrollInContainerHow / ProgresLine_maxHeight) * 100;
            
            progresLineHow.style.height = `${Math.min(Procent, 100)}%`;


            ProgresCircles.forEach((circle, index) => {
                if (Scroll_Distance >= Coordonate_Steps[index]) {
                    circle.classList.add('filled-circle');
                    Steps_Titles[index].classList.add('active-title');

                } else {
                    circle.classList.remove('filled-circle');
                    Steps_Titles[index].classList.remove('active-title');
                }
            });

            if (Scroll_Distance >= Coordonate_Steps[ProgresCircles.length - 2]) {
                increment_scroll = 20;
                increment_scroll_initial = 20;
            }
            
            if (Scroll_Distance >= Coordonate_Steps[ProgresCircles.length - 1]) {
                progresLineHow.style.height = '100%';
                progresLineHow.style.transition = 'all 1000ms ease-in-out';
            } else {
                progresLineHow.style.transition = 'none';
            }
        }
        
        //Scroll pentru gestionarea headerului
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
    })
    

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
    })

    const SLider_Left = document.querySelector('.container-slide');
    SLider_Left.scrollLeft = SLider_Left.scrollWidth - SLider_Left.clientWidth;

   
});