window.onscroll= function() {myFunction()};

var nav= document.getElementById("nav")

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else{
        navbar.classList.remove("sticky");
    }

}

function changeColor(work) {
    var defaultColor = 'black', activeColor = 'yellow',
        window = document.getElementsId('work');

    for (var i = 0; i < allWork.length; i++) {
        window[i].style.color = defaultColor;
    }

    work.style.color = activeColor;

    return false;
}




// home = orange
// all others = black

// curOrange = home

// curOrange = 1 // home
// if 2, work
// if 3

/*
if click_Home
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