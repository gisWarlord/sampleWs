function returnFullYear() {
  var d = new Date();
  var n = d.getFullYear();
  document.write(n);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;            // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function sendFunction() {
  $("#frmMessage").fadeIn();
  $("#frmMessage").html("Under Construction");
  $("#frmMessage").delay(3000).fadeOut();
}