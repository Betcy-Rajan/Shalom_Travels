const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    spaceBetween: 0,
    effect: 'slide',
    speed: 2000,
    loop:true,
    // autoplay: {
    //     delay: 3000,
    // },
  });
  
  //Mobile Menu
  const mobilemenubtn= document.querySelector('header .fa-bars');
  const menuBtn  = document.querySelector('header .menu');
  
  mobilemenubtn.addEventListener('click',()=>{
    menuBtn.classList.toggle("open");
  })
