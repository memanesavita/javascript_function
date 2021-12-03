function add_numbers(num1,num2){
    console.log(num1+num2);
    console.log("------------");
    }
    
    function add_numbers_list(list1,list2){
    for(var i=0;i<3;i++){
    add_numbers(list1[i],list2[i]);
    }
    }
    
    add_numbers_list([50, 60, 10],[10, 20,10])