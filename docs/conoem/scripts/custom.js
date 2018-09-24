// $(function () {
//     $('[data-toggle="popover"]').popover()
// });
// Fluid layout doesn't seem to support 100% height; manually set it
/* $(window).resize(function () {
    $('#map').height($(window).height() - $(".navbar").height()
        - parseInt($(".navbar").css("margin-bottom"))
        - parseInt($(".navbar").css("margin-top"))
        - parseInt($('#map').css("margin-bottom"))
    );
}) */
$(window).resize();
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    $("#navbarSupportedContent a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

});

var selector = '.nav li';

$(selector).on('click', function () {
    $(selector).removeClass('active');
    $(this).addClass('active');
});

function ResponsiveCode() {
    var bodyWidth = document.body.clientWidth;
    var bodyHeight = $(window).height();
    if (bodyWidth) {
        //responsive code start
        $(".carousel").each(function () {
            $(this).find(".carousel-item").css({ 'width': bodyWidth, 'height': bodyHeight });
        });
        //responsive code end
    } else {
        window.setTimeout(ResponsiveCode, 30);
    }
}
//first launch
ResponsiveCode();
$(window).bind("load", ResponsiveCode);
$(window).bind("resize", ResponsiveCode);
$(window).bind("orientationchange", ResponsiveCode);