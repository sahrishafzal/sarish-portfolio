// for dark and light mode
function switchGray() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "black";
}

function switchWhite() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}
const grayButton = document.querySelector("#grayButton");
const whiteButton = document.querySelector("#whiteButton");

grayButton.addEventListener("click", switchGray);
whiteButton.addEventListener("click", switchWhite);
// side-manue
// hamburger click fucntion and operations
document.getElementById("menu-trigger").addEventListener("click", function () {
  document.getElementById("side-menu").classList.add("show-menu");
});

// side-manue
// hamburger click fucntion and operations
document.getElementById("menu-trigger").addEventListener("click", function () {
  document.getElementById("side-menu").classList.add("show-menu");
});

/* Close Hamburger Menu (Mobile) */
document.getElementById("menu-close").addEventListener("click", function () {
  document.getElementById("side-menu").classList.remove("show-menu");
});
// drop down manue for the about link
document.getElementById("about").addEventListener("mouseover", function () {
  document.getElementById("drop-down-manu").classList.add("show");
});
document
  .getElementById("drop-down-manu")
  .addEventListener("mouseleave", function () {
    document.getElementById("drop-down-manu").classList.remove("show");
  });
// event handler for the scroll operation

//************need help to fix it */

// let last_known_scroll_position = 0;

// window.addEventListener("scroll", function (event) {
//   if (last_known_scroll_position === window.scrollY) {
//     document.getElementById("nav-left").classList.add("nav-bar-position");
//   } else {
//     document.getElementById("nav-left").classList.remove("nav-bar-position");
//   }
// });

// form validation;

//selecting errors from the form and give it a value
const errorsList = document.querySelector("#errors");

// add error function, takes in error parameter, defines error as list item
function addError(error) {
  let li = document.createElement("li");
  li.innerText = error;
  errorsList.appendChild(li);
}

// validate form function event
// defines all errors, invokes addError function as needed
// appends errors to errorList as needed

// event listener for submit form, calls validate form function
document
  .querySelector("#form-to-contact")
  .addEventListener("submit", function (event) {
    // keep browser from refreshing
    event.preventDefault();

    // clear out any previous errors
    errorsList.innerHTML = "";

    // grabs #first-name input value from line 10
    let firstName = document.querySelector("#f-name").value;

    // adding 'li' element to 'errors' ul
    if (firstName.length < 2) {
      addError("First name must be more than 2 characters!!!");
    }

    let lastName = document.querySelector("#l-name").value;

    if (lastName.length < 2) {
      addError("Last name must be more than 2 characters!!!");
    }

    let phoneNumberValid = document.querySelector("#phone").value.length === 10;

    if (!phoneNumberValid) {
      addError("Please provide a valid 10 digit phone number!!!");
    }

    let questionDesc = document.querySelector("#pdescription").value;
    if (questionDesc.length < 10) {
      addError("Past experience must be at least 0 characters");
    }
  });
