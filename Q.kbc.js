var question_list = [
    "How many continents are there?",             
    "What is the capital of India?",           
    "NG mei kaun se course padhaya jaata hai?"    
]

var options_list = [
    ["Four", "Nine", "Seven", "Eight"],
    ["Chandigarh", "Bhopal", "Chennai", "Delhi"],
    ["Software Engineering", "Counseling", "Tourism", "Agriculture"]
]


var solution_list = [3, 4, 1] 

var answer_list=[
    ["1.four","3.seven"],
    ["2.Delhi","4.Bhopal"],
    ["4.Agricultue","1.Software Engineering"]
]
function kbc_game(){
    console.log("kon banega carorepati???")
    var i=0;
    var s=0;
    var count=0;
    while( i<question_list.length){
        console.log(question_list[i])
        var a=0;
        var b=i;
        while(a<options_list[i].length){
            k=options_list[b][a]
            console.log(a+1,k)
            a=a+1
        }
        let y = require("readline-sync");
        var lifeline=y.question("you want life line:")
        if (lifeline=="yes"){
            console.log("50 50 lyfline")
            if (count<1){
                console.log(answer_list[i])
                var answer1=y.questionInt("enter your answer1:")
                if (answer1==solution_list[i]){
                    s=s+10000
                    console.log("your answer is correct")
                    console.log("you won Rs/",s)
                    console.log("\U0001F917")
                }
                else{
                    console.log("your answer is wrong")
                    console.log("you won zero")
                    console.log("\U0001F629")
                    break
                }
                count=count+1
                
            }
            else{
                var answer2=y.question("enter your second chance answer:")
                if (answer2==solution_list[i]){
                    console.log("your answer is correct")
                    s=s+10000
                    console.log("you won Rs/ :",s)
                    console.log("\U0001F917")
                }
                else{
                    console.log("your answer is wrong")
                    console.log("\U0001F637")
                    console.log("you win RS/: ",s)
                    break
                }
                    
            }
        }
        else{
            var answer2=y.questionInt("enter your answer2: ")
            if (answer2==solution_list[i]){
                console.log("your answer is correct")
                s=s+10000
                console.log("you won Rs/ :",s)
                console.log("\U0001F917")
            }
            else{
                console.log("your answer is wrong")
                console.log("you won Rs/:",)
                console.log("\U0001F637")
            }
        }
        i++
    }
}    
kbc_game()

    

