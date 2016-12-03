$(document).ready(function(e) {
    hide(".title", 2);
    if(window.pageYOffset>0){
         $("html, body").animate({ scrollTop: 0 }, 1000);
    }
    hide("#spacer0", 1);
    show(".title", 2);
    var about = false, cont = false, project = false;
    $(document).scroll(function(){
        if(window.pageYOffset>(getOffsetY(".about")/2) && !about){
            hide("#spacer1", 1);
            hide(".about", 2);
            show(".about", 2);
            about = true;
        }
        if(window.pageYOffset>(getOffsetY(".contact")/2) && !cont){
            hide("#spacer2", 1);
            hide(".contact", 2);
            show(".contact", 2);
            cont = true;
        }
        if(window.pageYOffset>(getOffsetY(".project")/2) && !project){
            hide("#spacer3", 1);
            hide(".project", 2);
            show(".project", 2);
            project = true;
        }
    });
    $("#about").click(function(){
        $("html, body").animate({ scrollTop: getOffsetY(".about") }, 1000);
    })
    $("#cont").click(function(){
        $("html, body").animate({ scrollTop: getOffsetY(".contact") }, 1000);
    })
    $("#project").click(function(){
        $("html, body").animate({ scrollTop: getOffsetY(".project") }, 1000);
    })
    $("#home").click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
    })
});