// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require_tree .
$(document).ready(function() { 
$('img') .delay (750) .fadeIn(1000);
$("h1") .delay (750) .fadeIn(1000);
$("h2") .slideDown(1000);
$('h3') .delay(750) .fadeIn(1000);
$('h4') .delay(750) .fadeIn(1000);
$('footer') .delay(750) .fadeIn(1000);
//$('.container-fluid') .delay (750) .fadeIn(1000);
//$('div.container-fluid') .delay (750) .fadeIn(1000);
});