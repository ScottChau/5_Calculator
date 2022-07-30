let num1 = 0;
let num2 = 0;
let total = "";
let operator = null;
let numArray = [];
previousScreen = document.querySelector(".previous");
nowScreen = document.querySelector(".now");

function add(num1, num2) {
  total = num1 + num2;
  return total;
}

function subtract(num1, num2) {
  total = num1 - num2;
  return total;
}

function multiply(num1, num2) {
  total = num1 * num2;
  return total;
}

function divide(num1, num2) {
  total = num1 / num2;
  return total;
}

function operate(num1, num2, callback) {
  return callback(num1, num2);
}

function previousDisplay(num) {
  previousScreen.textContent = num;
}

function nowDisplay(num) {
  nowScreen.textContent = num;
}

nowDisplay(0);

function add_() {
  // checking if there is any previous operator
  if (
    (operator === subtract && total === "") ||
    (operator === divide && total === "") ||
    (operator === multiply && total === "")
  ) {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
    previousDisplay(`${total} + `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = add;
    return total;
  } else if (
    operator === subtract ||
    operator === divide ||
    operator === multiply
  ) {
    num2 = arrToNum();
    console.log(total);
    total = operate(total, num2, operator);
    previousDisplay(`${total} + `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = add;
    return total;
  }
  //
  operator = add;
  if (num1 === 0) {
    num1 = arrToNum();
    console.log(num1);
  } else if (total === "") {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
    console.log(total);
  } else {
    num2 = arrToNum();
    total = operate(total, num2, operator);
  }
  if (typeof total === "number") {
    previousDisplay(`${total} +`);
    nowDisplay(`${total}`);
  } else {
    previousDisplay(`${arrToNum()} + `);
    nowDisplay(`${total}`);
  }
  console.log(num1);
  console.log(total);
  console.log(num2);
  num2 = 0;
  numArray = [];
  console.log(numArray);
}
const addButton = document.querySelector(".add");
addButton.addEventListener("click", add_);

function subtract_() {
  // checking if there is any previous operator
  if (
    (operator == add && total === "") ||
    (operator == divide && total === "") ||
    (operator == multiply && total === "")
  ) {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
    previousDisplay(`${total} - `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = subtract;
    return total;
  } else if (operator === add || operator === divide || operator === multiply) {
    num2 = arrToNum();
    console.log(total);
    total = operate(total, num2, operator);
    previousDisplay(`${total} - `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = subtract;
    return total;
  }
  //
  operator = subtract;
  if (num1 === 0) {
    num1 = arrToNum();
    console.log(num1);
  } else if (total === "") {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
    console.log(total);
  } else {
    num2 = arrToNum();
    total = operate(total, num2, operator);
  }
  if (typeof total === "number") {
    nowDisplay(`${total}`);
    previousDisplay(`${total} -`);
  } else {
    nowDisplay(`${total}`);
    previousDisplay(`${arrToNum()} - `);
  }
  num2 = 0;
  numArray = [];
}

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", subtract_);

function multiply_() {
  // check if there is any previous operator
  if (
    (operator == add && total != 0) ||
    (operator == divide && total != 0) ||
    (operator == subtract && total != 0)
  ) {
    num2 = arrToNum();
    total = operate(total, num2, operator);
    previousDisplay(`${total} x `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = multiply;
    return total;
  } else if (
    (operator == add && total == 0) ||
    (operator == divide && total == 0) ||
    (operator == subtract && total == 0)
  ) {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
    previousDisplay(`${total} x `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = multiply;
    return total;
  }
  //
  operator = multiply;

  if (num1 == 0) {
    num1 = arrToNum();
  } else if (total != 0) {
    num2 = arrToNum();
    total = operate(total, num2, multiply);
    console.log(total);
  } else {
    num2 = arrToNum();
    total = operate(num1, num2, multiply);
    console.log(total);
  }
  if (total > 0) {
    previousDisplay(`${total} x`);
    nowDisplay(`${total}`);
  } else if (total < 0) {
    previousDisplay(`${total}`);
    nowDisplay(`${total}`);
  } else {
    previousDisplay(`${arrToNum()} x `);
  }
  numArray = [];
}

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", multiply_);

function divide_() {
  // checking if there is any previous operator
  if (
    (operator == add && total != 0) ||
    (operator == multiply && total != 0) ||
    (operator == subtract && total != 0)
  ) {
    num2 = arrToNum();
    total = operate(total, num2, operator);
    previousDisplay(`${total} ÷ `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = divide;
    return total;
  } else if (
    (operator == add && total == 0) ||
    (operator == multiply && total == 0) ||
    (operator == subtract && total == 0)
  ) {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
    previousDisplay(`${total} ÷ `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = divide;
    return total;
  }
  //
  operator = divide;

  if (num1 == 0) {
    num1 = arrToNum();
  } else if (total != 0) {
    num2 = arrToNum();
    total = operate(total, num2, divide);
    console.log(total);
    num2 = 0;
  } else {
    num2 = arrToNum();
    total = operate(num1, num2, divide);
    console.log(total);
  }
  if (total > 0) {
    previousDisplay(`${total} ÷`);
    nowDisplay(`${total}`);
  } else if (total < 0) {
    previousDisplay(`${total}`);
    nowDisplay(`${total}`);
  } else {
    previousDisplay(`${arrToNum()} ÷ `);
  }
  numArray = [];
}

const divideButton = document.querySelector(".divide");
divideButton.addEventListener("click", divide_);

function arrToNum() {
  let n = 0;

  console.log(numArray);
  for (let i = 0; i < numArray.length; i++) {
    n += numArray[i];
  }

  return parseFloat(n);
}

function zero() {
  numArray.push("0");
  nowDisplay(arrToNum());
}
function one() {
  numArray.push("1");
  nowDisplay(arrToNum());
}

function two() {
  numArray.push("2");
  nowDisplay(arrToNum());
}

function three() {
  numArray.push("3");
  nowDisplay(arrToNum());
}
function four() {
  numArray.push("4");
  nowDisplay(arrToNum());
}
function five() {
  numArray.push("5");
  nowDisplay(arrToNum());
}
function six() {
  numArray.push("6");
  nowDisplay(arrToNum());
}
function seven() {
  numArray.push("7");
  nowDisplay(arrToNum());
}
function eight() {
  numArray.push("8");
  nowDisplay(arrToNum());
}
function nine() {
  numArray.push("9");
  nowDisplay(arrToNum());
}
function dot() {
  numArray.push(".");
  nowDisplay(arrToNum());
}

function clear() {
  num1 = 0;
  num2 = 0;
  total = "";
  numArray = [];
  operator = null;
  previousScreen.textContent = "";
  nowScreen.textContent = 0;
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

const equalButton = document.querySelector(".equal");
equalButton.addEventListener("click", equal);

function equal() {
  if (total == 0) {
    num2 = arrToNum();
    total = operate(num1, num2, operator);
  } else {
    num2 = arrToNum();
    total = operate(total, num2, operator);
  }
  numArray = [];
  console.log(total);
  previousDisplay(`${total}`);
  nowDisplay(`${total}`);
}
