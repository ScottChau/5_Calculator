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
  num2 = arrToNum();
  if (
    (num2 === 0 && operator == divide) ||
    (num2 === 0 && operator == multiply)
  ) {
    num2 = 1;
  }
  // checking if there is any previous operator

  if (
    (operator === subtract && total === "") ||
    (operator === divide && total === "") ||
    (operator === multiply && total === "")
  ) {
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
    total = operate(num1, num2, operator);
    console.log(total);
  } else {
    total = operate(total, num2, operator);
  }
  if (typeof total === "number") {
    previousDisplay(`${total} +`);
    nowDisplay(`${total}`);
  } else {
    previousDisplay(`${arrToNum()} + `);
    nowDisplay(`${total}`);
  }

  num2 = 0;
  numArray = [];
}
const addButton = document.querySelector(".add");
addButton.addEventListener("click", add_);

function subtract_() {
  // checking if there is any previous operator
  num2 = arrToNum();
  if (
    (num2 === 0 && operator == divide) ||
    (num2 === 0 && operator == multiply)
  ) {
    num2 = 1;
  }
  if (
    (operator == add && total === "") ||
    (operator == divide && total === "") ||
    (operator == multiply && total === "")
  ) {
    total = operate(num1, num2, operator);
    previousDisplay(`${total} - `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = subtract;
    return total;
  } else if (operator === add || operator === divide || operator === multiply) {
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
    total = operate(num1, num2, operator);
    console.log(total);
  } else {
    total = operate(total, num2, operator);
  }
  if (typeof total === "number") {
    nowDisplay(`${total}`);
    previousDisplay(`${total} -`);
  } else {
    nowDisplay(`${total}`);
    previousDisplay(`${arrToNum()} - `);
  }

  numArray = [];
}

const subtractButton = document.querySelector(".subtract");
subtractButton.addEventListener("click", subtract_);

function multiply_() {
  num2 = arrToNum();
  // prevent total * 0
  if (
    (num2 == 0 && total != 0 && operator === multiply) ||
    operator === divide
  ) {
    num2 = 1;
  }
  // checking if there is any previous operator
  if (
    (operator === subtract && total === "") ||
    (operator === divide && total === "") ||
    (operator === add && total === "")
  ) {
    total = operate(num1, num2, operator);
    previousDisplay(`${total} X `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = multiply;
    return total;
  } else if (operator === subtract || operator === divide || operator === add) {
    total = operate(total, num2, operator);
    previousDisplay(`${total} X `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = multiply;

    return total;
  }
  //
  operator = multiply;
  if (num1 === 0) {
    num1 = arrToNum();
    console.log(num1);
  } else if (total === "") {
    total = operate(num1, num2, operator);
    console.log(total);
  } else {
    total = operate(total, num2, operator);
  }
  if (typeof total === "number") {
    previousDisplay(`${total} X`);
    nowDisplay(`${total}`);
  } else {
    previousDisplay(`${arrToNum()} X `);
    nowDisplay(`${total}`);
  }

  numArray = [];
}

const multiplyButton = document.querySelector(".multiply");
multiplyButton.addEventListener("click", multiply_);

function divide_() {
  num2 = arrToNum();

  // prevent total / 0
  if (
    (num2 == 0 && total != 0 && operator === multiply) ||
    operator === divide
  ) {
    num2 = 1;
  }
  // checking if there is any previous operator
  if (
    (operator === subtract && total === "") ||
    (operator === multiply && total === "") ||
    (operator === add && total === "")
  ) {
    total = operate(num1, num2, operator);
    previousDisplay(`${total} ÷ `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = divide;
  } else if (
    operator === subtract ||
    operator === multiply ||
    operator === add
  ) {
    total = operate(total, num2, operator);
    previousDisplay(`${total} ÷ `);
    nowDisplay(`${total}`);
    numArray = [];
    operator = divide;
  }
  //
  operator = divide;
  if (num1 === 0) {
    num1 = arrToNum();
    console.log(num1);
  } else if (total === "") {
    total = operate(num1, num2, operator);
  } else {
    total = operate(total, num2, operator);
  }
  if (typeof total === "number") {
    previousDisplay(`${total} ÷`);
    nowDisplay(`${total}`);
  } else {
    previousDisplay(`${arrToNum()} ÷ `);
    nowDisplay(`${total}`);
  }

  // catching divide by 0
  if (total === Infinity || isNaN(total)) {
    alert("Do not divide by 0, Please input again");
    return clear();
  }

  console.log(total);
  console.log(numArray);

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

const deleteButton = document.querySelector(".delete");
deleteButton.addEventListener("click", delete_);

function equal() {
  num2 = arrToNum();

  if (total === "") {
    total = operate(num1, num2, operator);
  } else {
    total = operate(total, num2, operator);
  }
  numArray = [];
  if (operator === add) {
    previousDisplay(`${total} + `);
  }
  if (operator === subtract) {
    previousDisplay(`${total} - `);
  }
  if (operator === multiply) {
    previousDisplay(`${total} X `);
  }
  if (operator === divide) {
    previousDisplay(`${total} ÷ `);
  }
  if (total === Infinity || isNaN(total)) {
    alert("Do not divide by 0, Please input again");
    return clear();
  }
  nowDisplay(`${total}`);
}

function clear() {
  num1 = 0;
  num2 = 0;
  total = "";
  numArray = [];
  operator = "";
  previousScreen.textContent = "";
  nowScreen.textContent = 0;
}

function delete_() {
  numArray.pop();
  nowDisplay(arrToNum());
}
