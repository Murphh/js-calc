window.onload= function(){
  do {
    var quit = false;
    var toQuit = prompt("Would you like to use the calculator or quit(1)");
    if(toQuit == "1"){
      quit = true;
    }else {
      var val1, val2, operand;
      console.log("----- NEW CALCULATION ------");
      var menuOption = prompt("Would you like standard(1), or advanced(2) functions");
      if(menuOption == "1"){
        operand = prompt("Enter the operator for your calculation. Addition(1), Multiplication(2), Subtraction(3), Division(4)");
        val1 = parseFloat(prompt("Enter the first value for the calculation"));
        val2 = parseFloat(prompt("Enter the second value for the calculation"));
        standardOp(val1, val2, operand);
      }else if (menuOption == "2") {
         operand = prompt("Enter the operator for your calculation. Power(1), or Square Root(2)");
         if(operand == "1"){
           val1 = parseFloat(prompt("Enter the first value for the calculation"));
           val2 = parseFloat(prompt("Enter the second value for the calculation"));
           advancedOp(val1, val2, operand);
         }else if (operand == "2") {
           val1 = parseFloat(prompt("Enter the value for the calculation"));
           val2 = 0;
           advancedOp(val1, val2, operand);
         }else{
           console.log("Invalid input - Returned to start");
         }
      }else {
        console.log("Invalid input - Returned to start");
      }
    }
  } while (!quit);
}

function standardOp(val1, val2, operand){
  switch (operand) {
    case "":  //Addition
      console.log(val1 + "+" + val2 + " = " + (val1 + val2));
      break;
    case "1": //Addition
      console.log(val1 + "+" + val2 + " = " + (val1 + val2));
      break;
    case "2": //Multiplication
      console.log(val1 + "x" + val2 + " = " + (val1 * val2));
      break;
    case "3": //Subtraction
      console.log(val1 + "-" + val2 + " = " + (val1 - val2));
      break;
    case "4": //Division
      console.log(val1 + "/" + val2 + " = " + (val1 / val2));
      break;
    default: //Returned to start
      console.log("Wrong input - Returned to start!");
  }
}

function advancedOp(val1, val2, operand){
  switch (operand) {
    case "1": //Power operation
      console.log(val1 + " to the power of " + val2 +  " is: " + Math.pow(val1, val2));
      break;
    case "2": //Square root operation
      console.log("The square root of " + val1 + " is: " +  Math.sqrt(val1));
      break;
    default:  //Returned to start
      console.log("Wrong input - Returned to start!");
  }
}
