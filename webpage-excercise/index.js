const myFunction = () => {
  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

function mobileMenu() {
  var icon = document.querySelector(".icon");
  icon.classList.toggle("active");
}
