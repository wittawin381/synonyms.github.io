$(document).ready(main)
function main(){
    $('.panel').hide();
    $('.showBut').hover(function(){
        $('.panel').stop(true, true).slideDown(400);
    });
    $('.page').hover(function(){
        $('.panel').slideUp(400);
    })
    
    $('.menu2').hide();
    $('.toggle-nav').on('click',function(){
        $('.menu2').slideToggle();
    })
    $('.showBut2').on('click',function(){
        $('.panel').stop(true,false, true).slideDown(400);
        $('.menu2').slideUp();
        $('.wordindex').on('click',function(){
            $('.panel').slideUp();
        })
    })
    
    $('a.toggle-nav').click(function(e){
        e.preventDefault();
    })
}



