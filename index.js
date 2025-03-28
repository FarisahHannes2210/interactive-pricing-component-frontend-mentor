
var range = document.getElementById("range");
console.log(range);
var toggle = document.getElementById("toggle");

MIN = 0;
MAX = 4;

var value = ((range.value - MIN) / (MAX - MIN)) * 100;
var leftover = 100 - value;
console.log("value line13", value);

console.log(document.styleSheets);

range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%)`;

function main() {



  var pageview = document.getElementById("pageview");
  var price = document.getElementById("price");
  const val = range.value;

  console.log("val", val);

  var values = [8.0, 12.0, 16.0, 24.0, 36.0];
  var valuepage = ["10K", "50K", "100K", "500K", "1M"];

  price.textContent = `${values[val].toFixed(2)}`;
  pageview.textContent = `${valuepage[val]} PAGEVIEW`;

  var value = ((range.value - MIN) / (MAX - MIN)) * 100;
  var leftover = 100 - value;
  console.log("value line 59", value);

  console.log(`value`,value);
  console.log(`leftovrer`,leftover);


  range.style.background = `linear-gradient(to right,  var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${value}%)`;




  if (toggle.checked == true) {
    // yearly


    let newValue;
    newValue = values[val] - values[val] * 0.25;
    console.log("newvalue", newValue);
    price.textContent = `$${newValue.toFixed(2)}`;
    pageview.textContent = `${valuepage[val]} PAGEVIEW `;

    console.log("value line 74", value);

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) 100%,  var(--SoftCyan) ${value}, var(--LightGrayishBlue) ${leftover}%, var(--LightGrayishBlue) 100%)`;


  } else if (toggle.checked == false) {
    // monthly

    price.textContent = `$${values[val].toFixed(2)}`;
    pageview.textContent = `${valuepage[val]} PAGEVIEW`;

    console.log("value line 88", value);

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) 100%,  var(--SoftCyan) ${value}, var(--LightGrayishBlue) ${leftover}%, var(--LightGrayishBlue) 100%)`;

  }
}

//-----------------------------------------------------------------------------------------

// function main() {
//   var range = document.getElementById("range");
//   var toggle = document.getElementById("toggle");
//   var pageview = document.getElementById("pageview");
//   var price = document.getElementById("price");
//   const val = range.value;

//   var values = [8.0, 12.0, 16.0, 24.0, 36.0];
//   var valuepage = ["10K", "50K", "100K", "500K", "1M"];

//   // Correct calculation of slider fill percentage
//   var value = ((range.value - range.min) / (range.max - range.min)) * 100;
//   var leftover = 100 - value;

//   // Apply background color properly
//   range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%)`;

//   if (toggle.checked) {
//     let newValue = values[val] - values[val] * 0.25;
//     price.textContent = `$${newValue.toFixed(2)}`;
//   } else {
//     price.textContent = `$${values[val].toFixed(2)}`;
//   }

//   pageview.textContent = `${valuepage[val]} PAGEVIEWS`;
// }
