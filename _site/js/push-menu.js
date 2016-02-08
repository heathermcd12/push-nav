$(function(){
    $('body').removeClass('noscript');
    
    $('.menu-btn, .close-btn').click(function(){
        toggleNav();
    });    
});

function toggleNav(){ //creating a function - will not show anything yet. havent targeted yet
    if($('.site-wrapper').attr('data-state') == 'slide-closed'){
        //Show Nav when Closed - on that wrapper, select this attribute and close it
        $('.site-wrapper').attr('data-state','slide-open');
    }else{
        //Show Nav when opened
        $('.site-wrapper').attr('data-state','slide-closed');
    }
}