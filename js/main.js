$(document).ready(function () {
    $(".loading i").fadeOut(500, function () {
        $(".loading i").parent().slideUp(500);
        $("body").css({ overflow: "auto" });
    });
    $(".detail-cont p:first").css("display","block");

});

// slide menu
let wid = -1
$(".fa-cog").click(function () {

    if (wid < 0) {
        wid = 1;
        $(".cont-menu").animate({ left: "0px" }, 1000);
    }
    else {
        wid = -1;
        $(".cont-menu").animate({ left: '-20%' }, 1000);

    }

})

// close menu by times icone
$("#tim-icon").click(function () {
    wid = -1;
    $(".cont-menu").animate({ left: '-20%' }, 1000);
})
$(".nav-link a").click(function () {
    let ahref = $(this).attr("href");
    let secOffset = $(ahref).offset().top;
    $('html , body ').animate({ scrollTop: secOffset }, 1000);

})
$(".detail-cont h3").click(function () {
    $(this).next("p").fadeToggle(1000);
    $(this).next().siblings("p").hide();
})

$("#txtar").keyup(function () { 
    let valtxtarea = $(this).val();
    let lenoftxtarea = valtxtarea.length; 
    
    if(lenoftxtarea > 100){
        $(".remchar").text(0);
        $("#sendbtn").prop("disabled","disabled");
    }
    else{
        $(".remchar").text(100 - lenoftxtarea);
        $("#sendbtn").prop("disabled",false);
    }
});

function countdown(){
    var now = new Date();
    var eventDate = new Date(2021, 12, 17);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";
    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";

    document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

    setTimeout(countdown, 1000);
}

countdown();
