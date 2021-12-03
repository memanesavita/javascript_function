// Write a function named average which takes 3 numbers and prints the sum of 
// 3 numbers and the average of 3 numbers.




function average(num1,num2,num3){
    console.log("sum of three numbers -",num1+num2+num3);
    console.log("Average of three numbers -",(num1+num2+num3)/3);
 }
  
 const input = require('readline-sync');
 let number1 = input.questionInt('Enter the number1 :- ');
 let number2 = input.questionInt('Enter the number2 :- ');
 let number3 = input.questionInt('Enter the number3 :- ');
 average(number1,number2,number3);
 