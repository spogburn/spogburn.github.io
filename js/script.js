'use strict';

console.log('hello')

// menu animation

var menuIcon = document.getElementById("menu-icon");
var menuClose = document.querySelector('.menu-close');


menuIcon.addEventListener('click', function(){
  console.log(name);
  var navMenu = document.getElementById("nav-menu")
  navMenu.classList.toggle('menu-open');
  document.body.className += ' darken';
  menuIcon.style.display = (menuIcon.style.display != 'none' ? 'none' : '' );
})

menuClose.addEventListener('click', function(e){
  var navMenu = document.getElementById("nav-menu")
  navMenu.classList.toggle('menu-open')
  document.body.className = 'container';
  menuIcon.style.display = (menuIcon.style.display != 'none' ? 'none' : '' );
})

// var down = document.getElementById("portfolio");
// var description = document.querySelector("#description");
//
// down.addEventListener('click', function(e){
//   console.log('clicked');
//   Velocity(description, "scroll", {duration: 1000})
// })

// jquery typing function

$(document).ready(function(){
       $("#name").typed({
           strings: ["<h1 id='first-name' class='name'>Stephanie </h1><h1 id='last-name' class='name'>Ogburn</h1><h4 id='description'>Web developer</h4>"],
           typeSpeed: 30
       });
   });

// jquery animation for anchor tags

$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

  $(".name-logo").delay(300).animate({"opacity": "1"}, 1800);

  $("hr").delay(3000).animate({"opacity": "1"}, 1800)

  $("p.about-text").delay(3000).animate({"opacity": "1"}, 1800)

  $("#portfolio").delay(3000).animate({"opacity": "1"}, 1800)

  $("#about").delay(5000).animate({"opacity": "1"}, 1800)
});
