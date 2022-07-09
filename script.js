const calc = document.querySelector(".calculation");
const equalSign = document.querySelector(".equalSign");
const nums = document.querySelectorAll(".num");
const deci = document.querySelector(".deci");
const changeNegative = document.querySelector(".negativeChange");
const plusSign = document.querySelector(".plus");
const minusSign = document.querySelector(".minus");
const divideSign = document.querySelector(".divide");
const multiplySign = document.querySelector(".multiply");
let calcCounter = 0;
let x;
let y;
// adds event listener to each node from node list to input number into calc value
for(let num of nums) {
    num.addEventListener("click", function() {
        console.log(num.innerText);
        calc.value = `${calc.value}${num.innerText}`;
    })
};

// adds decimal to number

deci.addEventListener("click", function() {
    calc.value = `${calc.value}${deci.innerText}`
})

// switch positive to negative



// math functions

const sum = function() {
    return x + y;
};

const sub = function() {
    return x - y;
};

const divi = function() {
    return x / y;
};

const multi = function() {
    return x * y;
}
plusSign.addEventListener("click", function() {
    calcCounter = 1;
    x = +calc.value;
    console.log(x);
    calc.value = "";
});

minusSign.addEventListener("click", function() {
    calcCounter = 2;
    x = +calc.value;
    console.log(x);
    calc.value = "";
});

divideSign.addEventListener("click", function() {
    calcCounter = 3;
    x = +calc.value;
    console.log(x);
    calc.value = "";
});

multiplySign.addEventListener("click", function() {
    calcCounter = 4;
    x = +calc.value;
    console.log(x);
    calc.value = "";
});

equalSign.addEventListener("click", function() {
    y = +calc.value;
    console.log(y);
    if(calcCounter === 1) {
        calc.value = sum();
    } else if(calcCounter === 2) {
        calc.value = sub();
    } else if(calcCounter === 3) {
        calc.value = divi();
    } else {
        calc.value = multi();
    }

})



