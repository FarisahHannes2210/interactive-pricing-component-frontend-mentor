var range = document.getElementById("range");
console.log(range);
var toggle = document.getElementById("toggle");

range.addEventListener("input", main);
toggle.addEventListener("change", main);

// document.styleSheets[0].insertRule(
//     `#range::-webkit-slider-runnable-track {
//   outline: 1px solid red;
//     }`, 0
// );

var value = ((this.value - this.min) / (this.max - this.min)) * 100;
var leftover = 100 - value;

//change slider colour
document.styleSheets[0].insertRule(
  `#range::-webkit-slider-runnable-track {
    background: linear-gradient(to right, var(--SoftCyan) 100%,  var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%, var(--LightGrayishBlue) 100%);
  }`,
  0
);

// var value = (this.value-this.min)/ (this.max-this.min) * 100;
// range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${value}%)`;

console.log(document.styleSheets[0]);

function main() {
  // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${100 - value}%)`;

  // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${value}%)`;

  var pageview = document.getElementById("pageview");
  var price = document.getElementById("price");
  const val = range.value;

  var values = [8.0, 12.0, 16.0, 24.0, 36.0];
  var valuepage = ["10K", "50K", "100K", "500K", "1M"];

  price.textContent = `${values[val].toFixed(2)}`;
  pageview.textContent = `${valuepage[val]} PAGEVIEW`;
  // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${(val / values.length)}, var(--LightGrayishBlue) ${ ((values.length - val)/ values.length)})`;

  // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%)`;

  range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%)`;

  // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${value}%)`;

  if (toggle.checked == true) {
    // yearly

    // var value = (this.value-this.min)/ (this.max-this.min) * 100;
    // var leftover = 100 - value;

    let newValue;
    newValue = values[val] - values[val] * 0.25;
    price.textContent = `$${newValue.toFixed(2)}`;
    pageview.textContent = `${valuepage[val]} PAGEVIEW `;
    // range.style.background = 'var(--SoftCyan)';

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%)`;

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${value}%)`;

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${(val / values.length) * 100}%, var(--LightGrayishBlue) ${ ((values.length - val)/ values.length) * 100}%)`;
  } else if (toggle.checked == false) {
    // monthly

    price.textContent = `$${values[val].toFixed(2)}`;
    pageview.textContent = `${valuepage[val]} PAGEVIEW`;

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${(val / values.length) * 100}%, var(--LightGrayishBlue) ${ ((values.length - val)/ values.length) * 100}%)`;

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${value}%)`;

    // range.style.background = `linear-gradient(to right, var(--SoftCyan) ${value}%, var(--LightGrayishBlue) ${leftover}%)`;
  }
}
