function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
 } 
 
 saturdayFun()

 function mondayWork(action = 'go to the office') {
    return `This Monday, I will ${action}.` 
 }

 function wrapAdjective(symbol = "*") {
    return function(adj= "a hard worker"){
    return `You are ${symbol}${adj}${symbol}!`
    }
    
    }

 wrapAdjective()();
 wrapAdjective("||","a dedicated programmer")();