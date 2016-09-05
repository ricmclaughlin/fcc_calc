$(document).ready(function() {
  let totaldiv = $("#total");
  totaldiv.text(0);
  let number = '';
  let newNumber = '';
  let first = 0;
  let result = null;
  let operator = '';
  let testNumLength = function(number) {
    if (number.toString().split('').length > 7) {
      number = "";
      totaldiv.text("Err");
    }
  };
  $("#numbers > button").not("#clear,#equals").click(function() {
    number += $(this).text();
    totaldiv.text(number);
    testNumLength(number);
  });

  $("#operators > button").click(function() {
    operator = $(this).text();
    // could have running total
    if (result === null) {
      newNumber = number;
    } else {
      newNumber = result;
    }
    number = "";
    totaldiv.text(0);
  });

  $("#clear").click(function() {
    number = "";
    result = null;
    totaldiv.text(0);
  });

  $("#equals").click(function() {

    number = parseInt(number, 10);
    newNumber = parseInt(newNumber, 10);
    if (operator === "+") {
      result = newNumber + number;
    } else if (operator === "-") {
      result = newNumber - number;
    } else if (operator === "*") {
      result = newNumber * number;
    } else if (operator === "/") {
      result = newNumber / number;
    }
    totaldiv.text(result);
    testNumLength(result);
    number = 0;
    newNumber = 0;
  });

  $(document).keypress(function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which);
    switch (keycode) {
      case 42:
        $("#multiply").click();
        break;
      case 43:
        $("#add").click();
        break;
      case 47:
        $("#divide").click();
        break;
      case 48:
        $("#zero").click();
        break;
      case 49:
        $("#one").click();
        break;
      case 50:
        $("#two").click();
        break;
      case 51:
        $("#three").click();
        break;
      case 52:
        $("#four").click();
        break;
      case 53:
        $("#five").click();
        break;
      case 54:
        $("#six").click();
        break;
      case 55:
        $("#seven").click();
        break;
      case 56:
        $("#eight").click();
        break;
      case 57:
        $("#nine").click();
        break;
      case 61:
        $("#equals").click();
        break;
      case 99:
        $("#subtract").click();
        break;
    }
  });

  $(document).keydown(function(event) {
    if (event.which === 27) {
      $("#clear").click();
    } else if (event.which === 13) {
      $("#equals").click();
    }
  });
});
