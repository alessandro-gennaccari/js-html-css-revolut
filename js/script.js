$(document).ready(function(){

    $('li.accounts > a').hover(function(){
        $('div.accounts-dropdown').toggleClass('active');
        $(this).toggleClass('black');
    });
    $('li.products > a').hover(function(){
        $('div.products-dropdown').toggleClass('active');
        $(this).toggleClass('black');
    });
    
});