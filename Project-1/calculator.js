const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  var repeat = true;
  
  function performCalculation() {
    readline.question("Enter first number:", function(num1) {
      num1 = parseFloat(num1);
      readline.question("Enter second number:", function(num2) {
        num2 = parseFloat(num2);
        readline.question("Enter operator (+, -, *, /):", function(operator) {
          var result;
  
          switch (operator) {
            case "+":
              result = num1 + num2;
              break;
            case "-":
              result = num1 - num2;
              break;
            case "*":
              result = num1 * num2;
              break;
            case "/":
              result = num1 / num2;
              break;
            default:
              result = "Invalid operator";
          }
  
          console.log("Result: " + result);
          if (repeat) {
            performCalculation();
          } else {
            readline.close();
          }
        });
      });
    });
  }
  
  performCalculation();
  