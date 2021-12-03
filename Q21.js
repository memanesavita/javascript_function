// Write a function that takes 2 strings as parameters and prints whose length is bigger, if both lengths are equal print two strings.


function is_equal_lenth(str1,str2){
    if(str1.length === str2.length){
        console.log(str1);
        console.log(str2);
    }
    else if(str1.length > str2.length){
        console.log(str1);
    }
    else{
        console.log(str2);
    }
 }
  
 is_equal_lenth("hello","welcome");
 
 