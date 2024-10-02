// =============== navber section start=======================
let hemderger = document.getElementById('hemderger');
let navmanu = document.getElementById('nav-manu');
let closemanu = document.getElementById('close');
let navlink = document.querySelectorAll('.navlink');
navlink.forEach(element => {
    element.addEventListener('click',()=>{
        navmanu.classList.add('hidden')
    })
});

hemderger.addEventListener('click',()=>{
    navmanu.classList.remove('hidden');
});
closemanu.addEventListener('click',()=>{
    navmanu.classList.add('hidden');
})
// =============== navber section end=======================

// ++++++++++++++++menu section+++++++++++++++++++
const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll(".item_wrap")
const foods = document.querySelectorAll(".food")
const snacks = document.querySelectorAll(".snack")
const beverages = document.querySelectorAll(".beverage")

tabs.forEach(tap =>{
    tap.addEventListener("click",() =>{
        tabs.forEach(tap =>{
            tap.classList.remove("active")
        })
        tap.classList.add("active");

        const tabval = tap.getAttribute('data-tabs');
        
        all.forEach(item =>{
            item.style.display ='none'
         });

        if(tabval == 'food'){
            foods.forEach(item =>{
                item.style.display = 'block'
             })
        }else if(tabval == 'snack'){
            snacks.forEach(item =>{
                item.style.display = 'block'
             });
        }else if(tabval == 'beverage'){
            beverages.forEach(item =>{
                item.style.display = 'block'
             });
        }
        else{
            all.forEach(item =>{
                item.style.display = 'block'
             });
        }

    })
})
// ++++++++++++++++menu section end+++++++++++++++++++
// swiper js
const swiper = new Swiper('.swiper', {
    speed: 400,
  spaceBetween: 100,
  autoplay: {
    delay: 3000,
    disableOnInteraction:false
  },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
    grabCursor:true,
     // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    }
  } 
  });