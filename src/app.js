


  //write your code here
  window.onload = function() {
    
    var first = "My ";
    var noun = ["dog ", "grandma ", "mailman ", "bird ", "driver "];
    var action = ["ate ", "peed ", "crushed ", "broke "];
    var possetion = ["my homework ", "my phone ", "the car "];
    var when = ["before the class", "when i was sleeping", "while i was exercising", "during my lunch", "while i was praying"];
  
    var rdm1 = Math.floor(Math.random() * noun.length);
    var rdm2 = Math.floor(Math.random() * action.length);
    var rdm3 = Math.floor(Math.random() * possetion.length);
    var rdm4 = Math.floor(Math.random() * when.length);
  
    document.querySelector("#excuse").innerHTML = first + noun[rdm1] + action[rdm2] + possetion[rdm3] + when[rdm4];
  
  }
  
