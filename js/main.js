/* Author:

*/
$(function(){
  $('h1').fitText(4, {minFontSize:32, maxFontSize:64});
  $('p') .fitText(5, {minFontSize:16, maxFontSize:32});
});

//Plug-in usage
jQuery(function($){
    $("#about").backgroundScale({
        imageSelector: "#aboutBg",
        centerAlign: true,
        containerPadding: 100
    });
});