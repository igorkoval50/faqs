// Import all necessary Storefront plugins and scss files
import ExamplePlugin from './example.plugin.js';

// Register them via the existing PluginManager
const PluginManager = window.PluginManager;
PluginManager.register('ExamplePlugin', ExamplePlugin);

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

    //logic for search
    $('.c108-faq-suchfeld').on('input', function (e) {
        if(e.target.value !== "") {
            $('.c108-faq-section-box').hide();
            $('.cms-element-faq-boxes').addClass('less-margin');
            $('.c108-faq-section-outer').addClass('remove-margin');
            $('.wrapper-cms').addClass('add-margin');
            $('.questiontab').addClass('add-padding');
            $('.questiontab').addClass('collapsed');
            $('.collapse-item').removeClass('show');

            //new search logic
            let value = $(this).val().toLowerCase();
            $(".collapse-item").filter(function() {
                if($(this).text().toLowerCase().indexOf(value) > -1) {
                    $(this).addClass('show');
                    $(this).siblings().children().show().addClass('minus-val');
                    $(this).siblings().children().css('backgroundColor', $("#val-color").text());
                    $('.questiontab').addClass('minus-val');


                } else {
                    $('.c108-faq-no-results').show();
                }
            });
            //the end search logic

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
            $('.questiontab').removeClass('add-padding');
            $('.questiontab').removeClass('minus-val');
            $('.collapse-item').removeClass('show');
            if ($(window).width() <= 575) {
                $('.c108-faq-question-section').removeClass('show');
                $('.c108-faq-question-section').removeClass('remove-margin');
                $('.c108-faq-question-wrapper').removeClass('add-margin');
            }
        }
    });

    // var mark = function() {
    //
    //     // Read the keyword
    //     var keyword = $("input[name='keyword']").val();
    //
    //     // Determine selected options
    //     var options = {};
    //     $("input[name='opt[]']").each(function() {
    //         options[$(this).val()] = $(this).is(":checked");
    //     });
    //
    //     // Remove previous marked elements and mark
    //     // the new keyword inside the context
    //     $(".context").unmark({
    //         done: function() {
    //             $(".context").mark(keyword, options);
    //         }
    //     });
    // };
});
