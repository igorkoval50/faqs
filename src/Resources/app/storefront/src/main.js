$( document ).ready(function() {
    function accrodionLink() {
        let width = $( window ).width();
        if (width > 576) {
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
        }
        else {
            $(".c108-faq-section-box a").click(function (e) {
                e.preventDefault();
            });
        }
    }
    accrodionLink();
    $( window ).resize();
    $( window ).resize(function(){
        accrodionLink();
    });
});
