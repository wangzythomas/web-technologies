// function locateAt(x) {
//     x = document.getElementById(e);
//     var y = x.offsetTop;
//     while (x=x.offsetParent) {
//         y += x.offsetTop;
//     }
//     y -= 70;
//     window.scrollTo(0,y);
// }

var $root = $('html, body');

$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);

    return false;
});