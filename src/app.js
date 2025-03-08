


  //write your code here
  window.onload = function() {
    let createExcuse = ()=>{
      let first = "My ";
      let who = ["dog ", "grandma ", "mailman ", "bird ", "driver "];
      let action = ["ate ", "peed ", "crushed ", "broke "];
      let possetion = ["my homework ", "my phone ", "the car "];
      let when = ["before the class", "when i was sleeping", "while i was exercising", "during my lunch", "while i was praying"];
  
    return first + (who[Math.floor(Math.random()*(who.length))]) + (action[Math.floor(Math.random()*(action.length))]) + (possetion[Math.floor(Math.random()*(possetion.length))]) + (when[Math.floor(Math.random()*(when.length))]);
    
    
    
    
   }
  
    
    
    document.getElementById("excuse").innerHTML = createExcuse()
    
  
  }
  
