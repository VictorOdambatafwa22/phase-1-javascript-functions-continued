// code your solution here
function saturdayFun(lawyer = "roller-skate") {
return `This Saturday, I want to ${lawyer}!`
}
saturdayFun(play-football);
//=> "You've been razzled!"


function mondayWork(lawyer2 = "go to the office") {
    return `This Monday, I will ${lawyer2}.`
    }
    mondayWork(sing);
    //=> "You've been razzled!"

    function wrapAdjective(message="*") {
        return function (moringa = "special") {

          if (message==="*"){

        return `You are *a hard worker*!` 
           
          }
          else if (message==="||"){
            return `You are ||a dedicated programmer||!`
          }

          else {
            return `No proper response`
          }
        }  
    }

    wrapAdjective("*")
    wrapAdjective("||")
        const encouragingPromptFunction = wrapAdjective("!!!");