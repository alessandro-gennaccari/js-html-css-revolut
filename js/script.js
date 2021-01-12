$(document).ready(function(){

    $('li.accounts').hover(function(){
        $('div.accounts-dropdown').toggleClass('active');
    });

    $('li.products').hover(function(){
        $('div.products-dropdown').toggleClass('active');
    });

    $('li.company').hover(function(){
        $('div.company-dropdown').toggleClass('active');
    });

    $('li.help').hover(function(){
        $('div.help-dropdown').toggleClass('active');
    });

    $('li.language').hover(function(){
        $('div.language-dropdown').toggleClass('active');
        $('i.fa-chevron-down').toggleClass('active');
        $('i.fa-chevron-up').toggleClass('active');
    });

});