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
  if (total == 0) {
    num2 = calculate();
    total = operate(num, num2, operator);
  } else {
    num2 = calculate();
    return console.log(operate(total, num2, operator));
  }
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
let subtractFunction = minus.addEventListener("click", subtract_);

const multi = document.querySelector(".multiply");
let muliplyFunction = multi.addEventListener("click", multiply_);

const divi = document.querySelector(".divide");
let divideFunction = divi.addEventListener("click", divide_);

let num = 0;

function sum() {
  operator = add;
  num = calculate();
  numArray = [];
}
function subtract_() {
  operator = subtract;
  num = calculate();
  numArray = [];
}
function multiply_() {
  operator = multiply;
  num = calculate();
  numArray = [];
}
function divide_() {
  operator = divide;
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
  return parseFloat(n);
}

function display() {
  if (total > 0 || total < 0) {
    number.textContent = total;
  } else {
    number.textContent = calculate();
  }
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
  numArray.push("2");
  display();
}

function three() {
  numArray.push("3");
  display();
}
function four() {
  numArray.push("4");
  display();
}
function five() {
  numArray.push("5");
  display();
}
function six() {
  numArray.push("6");
  display();
}
function seven() {
  numArray.push("7");
  display();
}
function eight() {
  numArray.push("8");
  display();
}
function nine() {
  numArray.push("9");
  display();
}

function dot() {
  numArray.push(".");
  display();
}

function clear() {
  total = 0;
  num = 0;
  num2 = 0;
  numArray = [];
  display();
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

const dotButton = document.querySelector(".dot");
dotButton.addEventListener("click", dot);
