


  //write your code here
  window.onload = function() {
    
    let first = "My ";
    let noun = ["dog ", "grandma ", "mailman ", "bird ", "driver "];
    let action = ["ate ", "peed ", "crushed ", "broke "];
    let possetion = ["my homework ", "my phone ", "the car "];
    let when = ["before the class", "when i was sleeping", "while i was exercising", "during my lunch", "while i was praying"];
  
    let rdm1 = Math.floor(Math.random() * noun.length);
    let rdm2 = Math.floor(Math.random() * action.length);
    let rdm3 = Math.floor(Math.random() * possetion.length);
    let rdm4 = Math.floor(Math.random() * when.length);
  
    document.querySelector("#excuse").innerHTML = first + noun[rdm1] + action[rdm2] + possetion[rdm3] + when[rdm4];
  
  }
  
