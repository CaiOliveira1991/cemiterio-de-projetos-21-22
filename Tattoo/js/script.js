const btnMenu = document.getElementById('btn_menu');

function toggleMenu(){
    const nav = document.getElementById('Menu');
    const navs = document.getElementById('btn_menu');
    nav.classList.toggle('active');
    navs.classList.toggle('active');
}

btnMenu.addEventListener('click', toggleMenu);

//scroll header

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 500){
            $("#header").css({"opacity" : "0.5"})
        }
        else{
            $("#header").css({"opacity" : "1"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200){
            $(".about1").css({"opacity" : "1"})
        }
        else{
            $(".about1").css({"opacity" : "0"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 250){
            $(".About2").css({"opacity" : "1"})
        }
        else{
            $(".About2").css({"opacity" : "0"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300){
            $(".Ass").css({"opacity" : "1"})
        }
        else{
            $(".Ass").css({"opacity" : "0"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 850){
            $(".service_about").css({"opacity" : "1"})
        }
        else{
            $(".service_about").css({"opacity" : "0"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1700){
            $(".card").css({"opacity" : "1"})
        }
        else{
            $(".card").css({"opacity" : "0"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 2400){
            $("#Testemunhas h3").css({"opacity" : "1"})
        }
        else{
            $("#Testemunhas h3").css({"opacity" : "0"})
        }
    })
})

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 2700){
            $(".card_testemunhos").css({"opacity" : "1"})
        }
        else{
            $(".card_testemunhos").css({"opacity" : "0"})
        }
    })
})

