$(window).scroll(function(){
    if ( $(this).scrollTop() > 200) {
        $('.header').addClass('fixed');
    } else {
        $('.header').removeClass('fixed');
    }
});
$(".btn-soc .open").click(function() {
    $(".btn-soc").toggleClass("active");
});
$(".soc__title .close").click(function() {
    $(".btn-soc").removeClass("active");
});

const upButton = document.querySelector('.up');

upButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const $btnSoc = $('.btn-soc');

if ($btnSoc.length) {
    $(window).on('scroll', function () {
        $btnSoc.toggleClass('scroll', $(this).scrollTop() >= $(this).height());
    });
}