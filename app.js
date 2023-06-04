const portTime = document.querySelector(".port_time");
const portDate = document.querySelector(".port_date");

// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 50) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};

const showPmAm = true;
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Show time & date
function showTime() {
  let date = new Date(),
    hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds(),
    year = date.getFullYear(),
    day = date.getDate();

  const pmAm = hour > 12 ? "PM" : "AM";

  hour = hour % 12 || 12;

  portTime.innerHTML = `${hour}<span>:</span>${addZero(
    min
  )}<span>:</span>${addZero(sec)}<span id="pmAm">${
    showPmAm ? pmAm : ""
  }</span>`;

  portDate.innerHTML = `${weekday[date.getDay()]}, ${
    month[date.getMonth()]
  } ${day}, ${year}`;

  setTimeout(showTime, 1000);
}

function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

showTime();
