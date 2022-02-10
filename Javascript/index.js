var navButton= getElementsByClass("navlit")
var navDiv= getElementById("nav")

window.onscroll= function() {myFunction()};

var nav= document.getElementById("nav")

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }

}

window.onscroll= function() {myFunction()};

var name= document.getElementById("rm_design")

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else{
        logo.classList.remove("sticky");
    }

}


var btnContainer = document.getElementById("nav");
var btns = btnContainer.getElementsByClassName("btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }



  












// home = orange
// all others = black

// curOrange = home


/*
if click.Home
    if (curOrange = home){
        do nothing
    } else {   // you know home isn't orange
        // check which is curOrange
        // swap colors between home and about, for example
        // update curOrange to home
    }
if click_Work
    asdf
if click_Contact
    asdf
if click_About
    asdf

*/