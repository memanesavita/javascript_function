// Write a function squares_of_numbers which takes a number as a parameter, and runs 
// a loop from 1 to the given number, and makes the number and square of a number as key, 
// value pair. See the example below.



function squares_of_numbers(limit){
    var output={}
    for(var i=1;i<=limit;i++){
        output[i]=i*i
    }
    console.log(output);
 }
 squares_of_numbers(20)
 