var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
output1.innerHTML = slider1.value;

slider1.oninput = function () {
  output1.innerHTML = this.value;
  calculate()
}
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;

slider2.oninput = function () {
  output2.innerHTML = this.value;
  calculate()
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;

slider3.oninput = function () {
  output3.innerHTML = this.value;
  calculate()
}
let hiringPrice = document.getElementById("hiringPrice");

function calculate() {
  let s1 = parseInt(slider1.value);
  let s2 = parseInt(slider2.value);
  let s3 = parseInt(slider3.value);
  cost = 190 * (1.1 - (0.2 * (s1 - 50) / 400)) * (1.0 + (0.2 * (s2 - 1) / 2)) * (1.1 - (0.2 * (s3 - 5) / 15))

  hiringPrice.innerHTML = cost.toFixed(2);
}