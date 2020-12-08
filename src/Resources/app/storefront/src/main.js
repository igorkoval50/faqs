$( document ).ready(function() {
    //smooth scrolling to the link
    $(".c108-faq-section-box a").click(function (e) {
        e.preventDefault();
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top - 80;
        // window.scrollTo(0, destination);
        scroll({
            top: destination,
            behavior: "smooth"
        });
    });
    
    $('.c108-faq-suchfeld').on('input', function (e) {
        if(e.target.value !== "") {
            $('.c108-faq-section-box').hide();
            $('.cms-element-faq-boxes').addClass('less-margin');
            $('.c108-faq-section-outer').addClass('remove-margin');
            $('.wrapper-cms').addClass('add-margin');
            if ($(window).width() <= 575) {
                $('.c108-faq-question-section').addClass('show');
                $('.c108-faq-question-section').addClass('remove-margin');
                $('.c108-faq-question-wrapper').removeClass('remove-margin');
                $('.c108-faq-question-wrapper').addClass('add-margin');
            }
        } else {
            $('.c108-faq-section-box').show();
            $('.cms-element-faq-boxes').removeClass('less-margin');
            $('.c108-faq-section-outer').removeClass('remove-margin');
            $('.wrapper-cms').removeClass('add-margin');
            if ($(window).width() <= 575) {
                $('.c108-faq-question-section').removeClass('show');
                $('.c108-faq-question-section').removeClass('remove-margin');
                $('.c108-faq-question-wrapper').removeClass('add-margin');
            }
        }
    })
});
