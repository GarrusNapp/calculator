let keys = document.querySelectorAll(".keyboard div");
let result = document.getElementById("result");
// number a (operator) number b //
let a = 0;
let b = 0;
let currentNumber = 0; //displayed
let m = 0; //memory
let operator = ""

function equals() {
  currentNumber = operator(a,b);
  result.innerHTML = currentNumber;
  a = currentNumber;
  b = 0;
  operator = ""
  console.log(a,",",b)
}

function handleOperator() {
  if (this.innerHTML == "+") {
    operator = function(x, y) { return x + y }
  }
  currentNumber = 0;
  console.log(a,",",b)
}

function handleNumber() {
  let newNumber = currentNumber.toString() + this.innerHTML;
  if (newNumber.length > 12) {
    return
  }
  currentNumber = parseFloat(newNumber);

  if (!operator) {
    a = currentNumber;
  }
  else {
    b = currentNumber;
  }
  result.innerHTML = currentNumber;
  console.log(a,",",b)
}

for (let i = 0; i < keys.length; i++) {
  if (!isNaN(parseInt(keys[i].innerHTML))) {
    keys[i].addEventListener("click", handleNumber);
  }
  else if (keys[i].innerHTML == "=") {
    keys[i].addEventListener("click", equals);
  }
  else {
    keys[i].addEventListener("click", handleOperator);
  }
}
