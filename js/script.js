// Header Part
let headerPart = document.querySelector("#header");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    headerPart.classList.add("scroll-on");
  } else {
    headerPart.classList.remove("scroll-on");
  }
};

// Counter Part
let numberCounters = document.querySelectorAll(".num");
let interval = 5000;

numberCounters.forEach((numberList) => {
  let startValue = 0;
  let endValue = parseInt(numberList.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);

  let nowStart = setInterval(function () {
    startValue += 1;
    numberList.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(nowStart);
    }
  }, duration);
});

// +++++++++++++++++++++ Navber Hide +++++++++++++++++++++
let navBer = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse.navbar-collapse");
navBer.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});
