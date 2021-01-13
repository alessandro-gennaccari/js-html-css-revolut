$(document).ready(function(){

    $('li.relative').hover(function(){
        $(this).children('.dropdown').toggleClass('active');
    });
    
    $('li.language').hover(function(){
        $('div.language-dropdown').toggleClass('active');
        $('i.fa-chevron-down').toggleClass('active');
        $('i.fa-chevron-up').toggleClass('active');
    });
});