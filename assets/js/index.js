/*=============== PROJECT SWIPER ===============*/
const swiperProject = new Swiper('.project__swiper', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,

  
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
    },
  });