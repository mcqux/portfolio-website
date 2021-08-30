/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.button',{delay: 200}); 
sr.reveal('.button__cv',{delay: 300}); 
sr.reveal('.home__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__subtitle',{delay: 400}); 
sr.reveal('.about__text',{delay: 400}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__text',{}); 
sr.reveal('.skills__data',{interval: 200}); 
sr.reveal('.skills__img',{delay: 600});

/*SCROLL WORK*/
sr.reveal('.work__img',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

/*SCROLL CONTACT*/
sr.reveal('.qualification',{interval: 200}); 
/*==================== QUALIFICATION TABS ====================*/
const tabs= document.querySelectorAll('[data-target]'),
      tabsContents = document.querySelectorAll('[data-content]'),
      borderE = document.querySelector('.under_lineE'),
      borderW = document.querySelector('.under_lineW'),
      work = document.querySelector('.work'),
      education = document.querySelector('.education')

tabs.forEach(tab =>{
  tab.addEventListener('click', ()=>{
    const target = document.querySelector(tab.dataset.target)
    tabsContents.forEach(tabContent =>{
      tabContent.classList.remove('qualification__active')
    })
    target.classList.add('qualification__active')
    
    tabs.forEach(tab =>{
         tab.classList.remove('qualification__active')
     })
    tab.classList.add('qualification__active')
  
  })
})

education.addEventListener('click',()=>{
    borderE.classList.add('activo');
    if(borderW.classList.contains('activo')){
        borderW.classList.remove('activo')
    }
})
work.addEventListener('click',()=>{
    borderW.classList.add('activo');
    if(borderE.classList.contains('activo')){
        borderE.classList.remove('activo')
    }
})