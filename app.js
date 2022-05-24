const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransition(){
    for(let i=0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click',function(){
            let currentBtn = document.querySelectorAll('.active-btn');
           console.log("A" +currentBtn[0].className);
           console.log("B" +this.className);
            currentBtn[0].className = currentBtn[0].className.replace('active-btn' , '');
            this.className += ' active-btn';
            
        })
    }
    
    allSections.addEventListener('click', (e)=>
    {
        const id = e.target.dataset.id;
        if(id){
            console.log(id);
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.remove('active')

            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
    
}

PageTransition();

particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });