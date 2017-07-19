/* Navigation Bar function */

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* End Navigation Bar function */

 $(document).ready(function(){
        $( "#menus").tabs({ collapsible: true, event:"click", disabled: false, heightStyle:"100%"}); 
    }); 

/* Menu Tabs Toggle function */


/* End Menu Tabs Toggle function*/

/* Scroll to top function */

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; //
    document.documentElement.scrollTop = 0; //
}

/* End Scroll to top function */
