/*MIT License

Copyright (c) 2016 Muhammad Muzzammil (http://98.hol.es/)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/
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