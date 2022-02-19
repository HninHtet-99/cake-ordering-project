let screenHeight = $(window).height();
$(window).scroll(function(){
    let currentLocation = $(this).scrollTop();
    
    if(currentLocation > screenHeight-100){
        $('.side-nav').addClass("nav-scroll");
    }else{
        $('.side-nav').removeClass("nav-scroll");
        setActive('home');
    }
})
$('.navbar-toggler').click(function(){
    let result = $('.navbar-collapse').hasClass('show');
    // console.log(result);
    if(result){
        // $('.navbar-toggler').html(`<i class="fa-solid fa-burger text-secondary menu-icon"></i>`)
        $('.menu-icon').removeClass("fa-xmark").addClass("fa-burger");

    }else{
        $('.menu-icon').removeClass("fa-burger").addClass("fa-xmark");
        // $('.navbar-toggler').html(`<i class="fa-solid fa-xmark text-secondary menu-icon"></i>`)
    }
});

function setActive(current){
    $('.nav-link').removeClass('current-section');
    $(`.nav-link[href = "#${current}"]`).addClass('current-section');
}

function navScroll(){
    let currentSection = $('section[id]');
    

    currentSection.waypoint(function(direction){
        if(direction == 'down'){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId)
        }
    },{
        offset: '100px'
    });
    currentSection.waypoint(function(direction){
        if(direction == 'up'){
            let currentSectionId = $(this.element).attr('id');
            setActive(currentSectionId)
        }
    },{
        offset: '100px'
    });
};
navScroll();
$('.my-slick').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    responsive: [
    {
    breakpoint: 1024,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    dots: true
    }
    },
    
    {
    breakpoint: 667,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    });

wow = new WOW(
        {
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
    }
    )
    wow.init();

 $('.my-counter').counterUp({
        delay: 10,
        time: 1000
    });