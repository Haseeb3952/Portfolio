// Tool Tip

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

var textElem = document.getElementById("text");
var textArray = [
  "I'm Abdul Haseeb.",
  "I'm Web Developer.",
  "I'm a Freelancer.",
];
var currentText = 0;

function changeText() {
  textElem.innerHTML = textArray[currentText];
  currentText = (currentText + 1) % textArray.length;
}

changeText();
setInterval(changeText, 1000);

// When the user clicks on the button, scroll to the top of the document
btnTop.addEventListener("click", function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

// Go to Top Button Hide on Top of the Page

const goTopBtn = document.getElementById("go-top-btn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
});

goTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Number Container

function generateNumbers(start, end) {
  var container = document.getElementById("number-container");

  for (var i = start; i <= end; i++) {
    var numberElement = document.createElement("div");
    numberElement.textContent = i;
    container.appendChild(numberElement);
  }
}
