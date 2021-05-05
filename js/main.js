$(function(){
    $('#menuicon').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $('#menu').toggleClass('show');
        $('body').toggleClass('active')
    });

    $("#gallery-link").click(function() {
        $('html, body').animate({
            scrollTop: $(".gallery").offset().top
        }, 2000);
        $('#menuicon').removeClass('active');
        $('#menu').removeClass('show');
        $('body').removeClass('active')
    });

    $("#contact-link").click(function() {
        $('html, body').animate({
            scrollTop: $("footer").offset().top
        }, 2000);
        $('#menuicon').removeClass('active');
        $('#menu').removeClass('show');
        $('body').removeClass('active')
    });
})
