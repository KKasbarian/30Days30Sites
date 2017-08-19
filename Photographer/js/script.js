/* Scroll to Top Function */

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

/* End Scroll to Top Function */

/* Navigation Popup Function */

function myFunction() {
    var x = document.getElementById("navOpen");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else { 
        x.className = x.className.replace(" w3-show", "");
    }
}

/* End Navigation Popup Function */

/* Navigation Dropdown Function */

function openNav() {
    document.getElementById("myNav").style.height = "100vh";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

/* End Navigation Dropdown Function */

/* Google Maps Function */

function myMap()
{
  myCenter=new google.maps.LatLng(40.6496532, -74.1950911);
  var mapOptions= {
    center:myCenter,
    zoom:6, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  marker.setMap(map);
}
/* End Google Maps Function */