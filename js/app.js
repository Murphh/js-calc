window.onload= function(){
  do {
    var quit = false;
    var toQuit = prompt("Would you like to use the calculator or quit(1)");
    if(toQuit == "1"){
      quit = true;
    }else {
      console.log("----- NEW CALCULATION ------");
      var menuOption = prompt("Would you like standard(1), or advanced(2) functions");
      if (menuOption == "1") {
        console.log("Standard Calculator chosen.");

        var val1 = parseFloat(prompt("Enter the first value for the calculation"));
        var val2 = parseFloat(prompt("Enter the second value for the calculation"));

        var operand = prompt("Enter the operator for your calculation. Addition(1), Multiplication(2), Subtraction(3), Division(4)");

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
      }else if (menuOption == "2") {
        console.log("Advanced Calculator chosen");

        var operand = prompt("Enter the operator for your calculation. Power(1), or Square Root(2)");

        switch (operand) {
          case "1": //Power operation
            var val1 = parseFloat(prompt("Enter the numeric value for the calculation"));
            var val2 = parseFloat(prompt("What power would you like to multiply it by?"));
            console.log(val1 + " to the power of " + val2 +  " is: " + Math.pow(val1, val2));
            break;
          case "2": //Square root operation
            var val = parseFloat(prompt("Enter the numeric value for the calculation"));
            console.log("The square root of " + val + " is: " +  Math.sqrt(val));
            break;
          default:  //Returned to start
            console.log("Wrong input - Returned to start!");
        }
      }else{
        console.log("Invalid input - Returned to start");
      }
    }

  } while (!quit);

}
