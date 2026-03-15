function showEven(){

let result = "";

for(let i=1;i<=100;i++){

if(i%2==0){
result += i + " ";
}

}

document.getElementById("evenResult").innerText = result;

}


// 2 Calculator using switch

function calculate(){

let n1 = Number(document.getElementById("num1").value);
let n2 = Number(document.getElementById("num2").value);
let op = document.getElementById("operation").value;

let result;

switch(op){

case "+":
result = n1 + n2;
break;

case "-":
result = n1 - n2;
break;

case "*":
result = n1 * n2;
break;

case "/":
result = n1 / n2;
break;

default:
result = "Invalid";
}

document.getElementById("calcResult").innerText = "Result: " + result;

}



// 3 Tax Calculator

function findTax(){

let salary = Number(document.getElementById("salary").value);
let tax;

switch(true){

case (salary>0 && salary<=500000):
tax = salary * 0;
break;

case (salary>500000 && salary<=1000000):
tax = salary * 0.10;
break;

case (salary>1000000 && salary<=1500000):
tax = salary * 0.20;
break;

case (salary>1500000):
tax = salary * 0.30;
break;

default:
tax = 0;
}

document.getElementById("taxResult").innerText = "Tax Amount: ₹" + tax;

}



// 4 Sum of product of digits

function digitProduct(){

let n1 = document.getElementById("n1").value.split("").reverse();
let n2 = document.getElementById("n2").value.split("").reverse();

let max = Math.max(n1.length , n2.length);

let sum = 0;

for(let i=0;i<max;i++){

let d1 = Number(n1[i] || 0);
let d2 = Number(n2[i] || 0);

sum += d1 * d2;

}

document.getElementById("digitResult").innerText = "Result: " + sum;

}
