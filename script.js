let num2 = 0;
let total = 0;
let operator = "";

function add(num1, num2) {
  total = num1 + num2;
  display(total);
  return total;
}

function subtract(num1, num2) {
  total = num1 - num2;
  display(total);
  return total;
}

function multiply(num1, num2) {
  total = num1 * num2;
  display(total);
  return total;
}

function divide(num1, num2) {
  total = num1 / num2;
  display(total);
  return total;
}

function operate(num1, num2, callback) {
  return callback(num1, num2);
}

function equal() {
  num2 = calculate();
  console.log(operate(num, num2, operator));
  return display();
}

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", equal);

// console.log(operate(3, 3, divide));

const container = document.querySelector("#container");
const ac = document.querySelector(".ac");

const number = document.createElement("p");

// +-*/ button
const plus = document.querySelector(".add");
let addFunction = plus.addEventListener("click", sum);

const minus = document.querySelector(".subtract");
let subtractFunction = minus.addEventListener(
  "click",
  () => (operator = subtract)
);

const multi = document.querySelector(".multiply");
let muliplyFunction = multi.addEventListener(
  "click",
  () => (operator = multiply)
);

const divi = document.querySelector(".divide");
let divideFunction = divi.addEventListener("click", () => (operator = divide));

let num = 0;

function sum() {
  operator = add;
  num = calculate();
  numArray = [];
}

let numArray = [];

function calculate() {
  let n = "";
  for (let i = 0; i < numArray.length; i++) {
    n += numArray[i];
  }
  if (n == "") {
    return 0;
  }
  return parseInt(n);
}

function display() {
  number.textContent = calculate();
  number.classList.add("display");
  container.prepend(number);
}
display();

// Button for one to nine and reset

function zero() {
  numArray.push("0");
  display();
}
function one() {
  numArray.push("1");
  display();
}

function two() {
  if (num == 0) {
    num = 2;
    return display(num);
  } else {
    num2 = 2;
    return display(num2);
  }
}

function three() {
  num = 3;
  return display();
}
function four() {
  num = 4;
  return display();
}
function five() {
  num = 5;
  return display();
}
function six() {
  num = 6;
  return display();
}
function seven() {
  num = 7;
  return display();
}
function eight() {
  num = 8;
  return display();
}
function nine() {
  num = 9;
  return display();
}

function clear() {
  num = 0;
  num2 = 0;
  return display();
}

const zeroButton = document.querySelector(".zero");
zeroButton.addEventListener("click", zero);

const oneButton = document.querySelector(".one");
oneButton.addEventListener("click", one);

const twoButton = document.querySelector(".two");
twoButton.addEventListener("click", two);

const threeButton = document.querySelector(".three");
threeButton.addEventListener("click", three);

const fourButton = document.querySelector(".four");
fourButton.addEventListener("click", four);

const fiveButton = document.querySelector(".five");
fiveButton.addEventListener("click", five);

const sixButton = document.querySelector(".six");
sixButton.addEventListener("click", six);

const sevenButton = document.querySelector(".seven");
sevenButton.addEventListener("click", seven);

const eightButton = document.querySelector(".eight");
eightButton.addEventListener("click", eight);

const nineButton = document.querySelector(".nine");
nineButton.addEventListener("click", nine);

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", clear);
