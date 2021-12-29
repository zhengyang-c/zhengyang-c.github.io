/*!
* Start Bootstrap - Full Width Pics v5.0.4 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.addEventListener("DOMContentLoaded",function(){
  console.log("Hello!")
  var a = document.querySelector('.blur-image');
  if (!a){
	  console.log("failed");
  }

  a.style.backgroundImage = "url(assets/splash.jpg)";

})