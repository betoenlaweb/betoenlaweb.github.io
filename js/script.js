/////////// WINDONW LOAD //////
window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}

window.addEventListener('load', () => {
    
    const loadPage = document.querySelector(".load");

        setTimeout(() => {
        loadPage.classList.remove('active');

    }, 600) 

    for(let i = 0; i < menuItem.length; i++) {
        const items = menuItem[i];
        
        items.addEventListener('click', (e) => {
            
            e.preventDefault();
            let target = e.currentTarget.href;

            menuIconActive();

          setTimeout( () => {
            window.location.href = target;
          }, 900);
          
        }, );
      }
})

// MENU /////////

//  MENU -- OPEN ///////

const menuIcon = document.querySelector('#menu-icon');
const menuIconUp = document.querySelector('#menu-icon-up');
const menuIconDown = document.querySelector('#menu-icon-down');

const iconTl = gsap.timeline(
                            {paused: true, 
                            reversed: true,  
                            defaults: {duration: .5, ease: "back.out(1,9)", 
                            transformOrigin: "50% 50%"}, });

iconTl 
        .to(menuIconUp, {y: 3}, 0)
        .to(menuIconUp, {rotate: "45deg"}, .3)
        .to(menuIconDown, {y: -3}, 0)
        .to(menuIconDown, {rotate: "-45deg"}, .3);

//  MENU -- CLOSE  ///////

const menuClose = document.querySelector('#menu-close');
const menuCloseUp = document.querySelector('#menu-close-up');
const menuCloseDown = document.querySelector('#menu-close-down');

const iconTlClose = gsap.timeline(
                                {paused: true, 
                                reversed: true,  
                                defaults: {duration: .5, ease: "back.out(1,9)", 
                                transformOrigin: "50% 50%"}, });

iconTlClose 
            .to(menuCloseUp, {y: 3}, 0)
            .to(menuCloseUp, {rotate: "45deg"}, .3)
            .to(menuCloseDown, {y: -3}, 0)
            .to(menuCloseDown, {rotate: "-45deg"}, .3);


// MENU -- MENU ANIMATION //////////

const menu = document.querySelector('#menu');
const menuItem = document.querySelectorAll('#menu-item');
const smItem = document.querySelectorAll('#sm-item');


const menuTl = gsap.timeline(
                                {paused: true, 
                                reversed: true,  
                                defaults: {duration: .5, ease: "back.out(1)"}, });

menuTl  
        .to(menu, {display: "flex", opacity: 1}, 0)
        .to(menuItem, {x: 0, ease: "back.out(1)", opacity: 1, stagger: .1}, .3)
        .to(menuClose, {opacity: 1}, .1)
        .to(smItem, {y: -20, ease: "back.out(1)", opacity: 1, stagger: .1}, .6);




// MENU  -- FUNCTION  ////////

const menuIconActive = function() {

    if(iconTl.reversed() && iconTlClose.reversed() && menuTl.reversed()) {
        iconTl.play();
        iconTlClose.play();
        menuTl.play();
    } else {
        iconTl.reverse();
        menuTl.reverse()
        iconTlClose.reverse();
        
    }
};

menuIcon.addEventListener('click', menuIconActive);
menuClose.addEventListener('click', menuIconActive);







// / SCROLL ANIMATION  NAV - BAR ///////////

const logo = document.querySelector('#logo');



const scrollNav = gsap.timeline(
                            {paused: true,
                            defaults: {duration: .5,
                            ease: "power3.inOut"},
                            transformOrigin:  "50% 50%", });

scrollNav  
            .to(logo, {y: -10, transform: "scale(0.7)"}, 0)
            .to(menuIcon, {y: -10, transform: "scale(0.9)"}, 0)
            .to(menuClose, {y: -10, transform: "scale(0.9)"}, 0) 


ScrollTrigger.create({
            start: "top -100",
            end: 250,
            onUpdate: (self) => {
                if(self.direction === 1) {
                    scrollNav.play();
                } else {
                    scrollNav.reverse();
                }
            }
})

// / SCROLL ANIMATION FOOTER ///////////

const footer = document.querySelector('#footer');
const mail = document.querySelector('#mail');
const footerIcons = document.querySelectorAll('#footer-icons');
const toggleBtn = document.querySelector("#theme-toggle");

const scrollFooter = gsap.timeline(
                            {paused: true,

                            defaults: {duration: .5,
                            ease: "power3.inOut"},
                            transformOrigin:  "50% 50%",
                            delay: .3});

scrollFooter  
        .to(mail, {y: -10, opacity: 1}, 0)
        .to(footerIcons, {y: -5, opacity: 1, stagger: .1}, .2)
        .to(toggleBtn, {y: -10, opacity: 1}, .4)

     window.addEventListener("scroll", () => {
        let y = window.pageYOffset;
        let windowHeight = window.innerHeight;
        let bodyHeight = document.body.offsetHeight;

        if (y + windowHeight >= bodyHeight) {
            scrollFooter.play();
          } else {
            scrollFooter.reverse();
          }
          
      });


// MODAL ///////////

const container = document.querySelector('#container');
const modalBg = document.querySelectorAll('#modal-bg');
const modal = document.querySelectorAll('#modal');
const xModal = document.querySelectorAll('#close-modal');
const video = document.querySelectorAll('#video');
const tittle = document.querySelectorAll('#tittle');
const description = document.querySelectorAll('#description');


for(let i = 0; i < box.length; i++) {

    const timeLine = gsap.timeline({paused: true, reversed: true});
    const modalContent = [video[i], tittle[i], description[i]];

timeLine
        .to(modalBg[i], {duration: .5, display: "flex", opacity: 1, ease: "power3.inOut"})
        .to(modal[i], {duration: .5, y: -60, opacity: 1, ease: "back.out(1,7)"})
        .to(modalContent, {duration: .7, opacity: 1, ease: "power3.Out", stagger: 0.1})
       
    const openModal = function() {
            if(timeLine.reversed()) {
                timeLine.timeScale(1).play();
        }
}
    const closeModal = function() {
            if(timeLine.play()) {
                timeLine.timeScale(2).reverse();
        }
    }
    
    box[i].addEventListener('click', openModal);
    xModal[i].addEventListener('click', closeModal);
}

// /////// DARK MODE BUTTON ///////

const body = document.querySelector("body");
const divider = document.querySelector(".fa-circle")
const mailButton = document.querySelector("#mail-button")


const button = gsap.timeline(
                            {paused: true, 
                            defaults: {duration: 0.5, 
                            ease: "backOut(1.3)", }, });

button
    .to(divider, {x:32, color: "#f2f2f2f2"}, 0)
    .to(toggleBtn, {borderColor: "#f2f2f2f2"}, 0)
    .to(menuIcon, {fill: "#f2f2f2f2"}, 0)
    .to(mailButton, {borderColor: "#f2f2f2f2", color: "#f2f2f2f2", backgroundColor: "transparent"}, 0)
    .to(footerIcons, {fill: "#f2f2f2f2"}, 0)
    .to(modalBg, {backgroundColor: "rgba(242, 242, 242, .8)" }, 0)
    .to(modal, {backgroundColor: "#333" }, 0);
    
    


toggleBtn.addEventListener("click", function() {

  if (body.classList.contains("dark-theme")) {
        button.reverse();
        body.classList.remove("dark-theme");
        
  } else {
    button.play()
    body.classList.add("dark-theme");
    
  }
});






