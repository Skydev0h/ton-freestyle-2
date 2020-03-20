$(function() {
    $('a').smoothScroll();
    var image = document.getElementsByClassName('parallax-window');
    // noinspection JSUnresolvedFunction
    new simpleParallax(image);
});