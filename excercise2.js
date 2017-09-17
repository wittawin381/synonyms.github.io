$(document).ready(main);

function main(){
    $('.ansPicBox').hide();
    $('.ansBut').on('click',function(){
        $('.ansPicBox').slideToggle(400);
        $('html, body').animate({scrollTop:$(document).height()}, 'slow');
        return false;
    })
}