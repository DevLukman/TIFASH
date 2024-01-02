
const swiper = new Swiper('.swiper', {
    slidesPerView:2.1,
    spaceBetween:10,
    centeredSlides:true,
    freemode:true,
    loop:true,
    autoplay:{
        delay:4000,
    },
    pagination:{
        el: 'pagination',
        clickable: true
    }
});
