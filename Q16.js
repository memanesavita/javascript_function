function perfect(num){
    sum=0
    for(var i=1;i<num;i++){
    if(num%i === 0){
    sum+=i
    }
    }
    if(sum === num){
    console.log(num," is a perfect number");
    }
    else{
    console.log(num," is not a perfect number");
    }
    }
    perfect(6);