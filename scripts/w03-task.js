/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {

return number1 + number2

};

function addNumbers(add1, add2){

    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
    
};

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

const subtract = function(number1, number2){
    return number1 - number2
};

function subtractNumbers(subtract1, subtract2){

    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
    
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */


const multiply = (number1, number2) => number1 * number2;

function multiplyNumbers(factor1, factor2){

    let multiplyNumber1 = Number(document.querySelector('#factor1').value);
    let multiplyNumber2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiplyNumber1, multiplyNumber2);
    
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(number1, number2) {

return number1 / number2;
    
};
    
function divideNumbers(add1, add2){
    
    let divideNumber1 = Number(document.querySelector('#dividend').value);
    let divideNumber2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divideNumber1, divideNumber2);
    
};
    
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);


/* Decision Structure */

/*const buttonElement = document.querySelector("#getTotal");*/

function total(number) {
    return number * 0.8
};

function getTotalDueMember () {

    let subTotal = Number(document.querySelector("#subtotal").value);

    document.querySelector("#total").innerHTML = total(subTotal);
};

function getTotalDue() {
    let subTotal = Number(document.querySelector("#subtotal").value);
    document.querySelector("#total").innerHTML = subTotal;
}

/*buttonElement.addEventListener("click", getTotalDue)*/
const subTotal = document.querySelector("#subtotal");
let checkBox = document.querySelector("#member");

if (checkBox.checked){
    document.querySelector("#getTotal").addEventListener("click", getTotalDueMember);
}
else {
    document.querySelector("#getTotal").addEventListener("click", getTotalDue);
};




/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => ! (number%2 === 0));


/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number%2 === 0);


/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").innerHTML = numbersArray.reduce((sum, number) => sum + number );

/* Output Multiplied by 2 Array */
const arrayMultiplied = (
document.querySelector("#multiplied").innerHTML = numbersArray.map(( number) => number *2 ));

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = arrayMultiplied.reduce((sum, number) => sum + number );
