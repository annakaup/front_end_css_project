$('.owl-carousel').owlCarousel({
    // loop:true,
    rewind:true,
    margin:20,
    nav: true,
    dots: false,
    smartSpeed:250,
    // autoplay: true,
    navText: [
        '<i class="fas fa-arrow-left"></i>',
        '<i class="fas fa-arrow-right"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
})