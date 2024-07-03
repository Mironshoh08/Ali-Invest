/* let scrollSection = document.querySelector(".scroll");
// console.log(scrollSection.offsetTop - scrollSection.offsetHeight * 1.5);

window.addEventListener("scroll", () => {
  fadeRightAnim(scrollSection, 1.5);
});

function fadeRightAnim(section, coordinate) {
  let fadeRight = section.querySelectorAll(".fade-right");
  fadeRight.forEach((fadeRights) => {
    const speed = fadeRights.getAttribute("data-speed");
    fadeRights.style.transition = speed + "ms ease-in-out";
    if (this.scrollY >= section.offsetTop - section.offsetHeight * coordinate) {
      fadeRights.classList.add("active");
    } else {
      fadeRights.classList.remove("active");
    }
  });
}
 */

let timerNum = document.querySelectorAll(".section3_num");
let timer = document.querySelector(".timer");

// console.log(timer.getBoundingClientRect().top);
// console.log(timer.offsetTop);

// let y = +timerNum[0].dataset.num

function run() {
  for (let i = 0; i < timerNum.length; i++) {
    let count = +timerNum[i].getAttribute("data-num"); /* 123 */
    timerNum[i].innerHTML = 0;

    function time(k = 0) {
      timerNum[i].innerHTML = k;
      k++;

      if (k <= count) {
        setTimeout(() => {
          time(k);
        }, 20);
      }
    }
    time();
  }
}

window.addEventListener("scroll", function timerWait() {
  // console.log(this.scrollY); 1318
  // console.log(timer.offsetTop); 1938
  // console.log(timer.offsetHeight); 350
  if (this.scrollY >= timer.offsetTop - timer.offsetHeight * 2.5) {
    // timer.style.background = 'red'
    run();
    this.removeEventListener("scroll", timerWait);
  }
  // fadeRightAnim(timer, 3)
});
/* animation step by step start */
/* var vm = {
  name: ko.observable(""),
  email: ko.observable(""),
  phone: ko.observable(""),
  subject: ko.observable(""),
  step: ko.observable(1),
  prev: function () {
    var step = vm.step() - 1;
    if (step >= 1) {
      vm.step(step);
      $(".progress-bar").animate({
        width: step * 20 + "%",
      });
    }
  },
  next: function () {
    var step = vm.step() + 1;
    if (step <= 5) {
      vm.step(step);
      $(".progress-bar").animate({
        width: step * 20 + "%",
      });
    }
  },
};

ko.bindingHandlers.fadeVisible = {
  init: function (element, valueAccessor) {
    // Initially set the element to be instantly visible/hidden depending on the value
    var value = valueAccessor();
    $(element).toggle(ko.unwrap(value)); // Use "unwrapObservable" so we can handle values that may or may not be observable
  },
  update: function (element, valueAccessor) {
    // Whenever the value subsequently changes, slowly fade the element in or out
    var value = valueAccessor();
    ko.unwrap(value) ? $(element).fadeIn() : $(element).hide();
  },
};

ko.applyBindings(vm);
 */
/* animation step by step end */
/* navbar start */
function function3() {
  var elem3 = (document.getElementById("li_display").innerHTML = "Russian");
}
function function4() {
  var elem3 = (document.getElementById("li_display").innerHTML = "English");
}
/* navbar end */
