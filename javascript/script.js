/* var elem1 = document.getElementsByClassName("nav-wrapper1");
function function2() {
  document.getElementsByClassName("lang_li")[0].classList.add("active1");
}
function function3() {
  document.getElementsByClassName("lang_li")[0].classList.remove("active1");
}
 */

function function1() {
  const section8_col1 = document.querySelectorAll(".section8_col1");
  const section8_col12 = document.querySelectorAll(".section8_col12");
  const section8_col13 = document.querySelectorAll(".section8_col13");
  const section8_col14 = document.querySelectorAll(".section8_col14");
  const btn2 = document.querySelector(".btn2");
  const btn1 = document.querySelector(".btn1");
  section8_col1.forEach((section) => {
    section.classList.add("active12");
  });
  section8_col12.forEach((section) => {
    section.classList.add("active12");
  });
  section8_col13.forEach((section) => {
    section.classList.add("active12");
  });
  section8_col14.forEach((section) => {
    section.classList.add("active12");
  });
  if (btn2) {
    btn2.classList.add("active12");
  }

  if (btn1) {
    btn1.classList.add("active123");
  }
}

function function2() {
  const section8_col1 = document.querySelectorAll(".section8_col1");
  const section8_col12 = document.querySelectorAll(".section8_col12");
  const section8_col13 = document.querySelectorAll(".section8_col13");
  const section8_col14 = document.querySelectorAll(".section8_col14");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");

  section8_col1.forEach((section) => {
    section.classList.remove("active12");
  });
  section8_col12.forEach((section) => {
    section.classList.remove("active12");
  });
  section8_col13.forEach((section) => {
    section.classList.remove("active12");
  });
  section8_col14.forEach((section) => {
    section.classList.remove("active12");
  });

  if (btn1) {
    btn1.classList.remove("active123");
  }

  if (btn2) {
    btn2.classList.remove("active12");
  }
}
// function myFunction(x) {
//   var elements = document.getElementsByClassName("swiper_slides");
//   if (x.matches) {
//     for (var i = 0; i < elements.length; i++) {
//       elements[i].style.width = "300px";
//     }
//   }
// }

// // Create a MediaQueryList object
// var x = window.matchMedia("(max-width: 1600px)");

// // Call listener function at run time
// myFunction(x);

// Attach listener function on state changes
/* x.addEventListener("change", function () {
  myFunction(x);
}); */
/* 
function myFunction1(x) {
  var elements = document.getElementsByClassName("swiper_slides");
  var elements1 = document.getElementsByClassName("swiper-wrapper");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.width = "260px";
    if (elements1[i]) {
      elements1[i].style.maxWidth = "995px";
    }
  }
}
 */
/* // Create a MediaQueryList object
var x = window.matchMedia("(max-width: 1400px)");

// Call listener function at run time
myFunction1(x);

// Attach listener function on state changes
x.addEventListener("change", function () {
  myFunction1(x);
});
 */

/* change content start */
/* document.addEventListener("DOMContentLoaded", (event) => {
  const link = document.getElementById("navbar__link1");
  const link1 = document.getElementById("navbar__link2");
  const targetElement = document.getElementById("nextslide");
  const targetElement1 = document.getElementById("prevslide");

  link.addEventListener("click", (e) => {
    e.preventDefault();
    targetElement.classList.remove("active13");
    targetElement1.classList.remove("active13");
    targetElement.classList.add("active13");
    targetElement1.classList.add("active13");
  });

  link1.addEventListener("click", (e) => {
    e.preventDefault();
    targetElement.classList.remove("active14");
    targetElement1.classList.remove("active13");
    targetElement.classList.add("active14");
    targetElement1.classList.add("active13");
  });
}); */
/* change content end */
