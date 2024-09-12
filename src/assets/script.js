/* Toggle between showing and hiding the nav links when the user clicks on the hamburger menu */

function navToggle() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  }