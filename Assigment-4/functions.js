//What happens when you add a for loop/while loop/switch case block inside a function and use return instead of break? Do statements after the loop run? What is the return value? Can we pass a return value from within a loop? Can you return from inside an if block? What impact does that have?

// For-loop
function printNmb(){
     for(let i=0;i<5;i++){
          if(i===3){
               return "Iteration is at nmb 3"
          }
          console.log("Testing return")
     }
     console.log("hello there")
}

console.log(printNmb())