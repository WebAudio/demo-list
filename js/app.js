// hide navbar automatically 
window.addEventListener("load", function(event){
    var pP={"x":0, "y":0, "yp":0};
    try {
        window.addEventListener('scroll', scrollEvent, false);
    } catch (e) {
        window.attachEvent('onscroll',scrollEvent);
    }
    function scrollEvent(event){
        var x = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft,
        y = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
        var dy=y-pP.y;
        var el=document.getElementById("g-navi");
        var bm=document.getElementById("bottom-menu");
        if(dy<=0 || y<=30) {
            el.style.setProperty("top", "0px");
            bm.style.setProperty("opacity", "0");
            bm.style.setProperty("height", "0px");
            setTimeout(function(){bm.style.setProperty("display", "none");}, 150);
        } else {
            el.style.setProperty("top", "-50px");
            bm.style.setProperty("opacity", "1.0");
            bm.style.setProperty("height", "180px");
            bm.style.removeProperty("display");
        }
        pP.x=x, pP.y=y;
    };
});
document.getElementById("midi-icon-text").addEventListener("mouseover", colorMouseOver, false);
document.getElementById("midi-icon-text").addEventListener("mouseout", colorMouseOut, false);
function colorMouseOver(event) {
    document.getElementById(event.target.id.replace("-text", "")).style.setProperty("background-position", "left bottom");
}
function colorMouseOut(event) {
    document.getElementById(event.target.id.replace("-text", "")).style.setProperty("background-position", "left top");
}
document.getElementById("midi-icon02").addEventListener("mouseover", colorMouseOver02, false);
document.getElementById("midi-icon02").addEventListener("mouseout", colorMouseOut02, false);
function colorMouseOver02(event) {
    event.target.style.setProperty("background-position", "left bottom");
}
function colorMouseOut02(event) {
    event.target.style.setProperty("background-position", "left top");
}



$(function() {
    // smooth scroll
    var navbarTop=60;
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-navbarTop
                }, 300);
                return false;
            }
        }
    });
});
