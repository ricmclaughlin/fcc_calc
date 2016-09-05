$(document).ready(function() {
  let totaldiv = $("#total");
  totaldiv.text(0);
  let number = 0;
  let newNumber = 0;
  let operator = '';
  var testNumLength = function(number) {
    if (number.length > 9) {
      totaldiv.text(number.substr(number.length - 9, 9));
      if (number.length > 15) {
        number = "";
        totaldiv.text("Err");
      }
    }
  };

  $("#numbers > button").not("#clear,#equals").click(function() {
    number += $(this).text();
    totaldiv.text(number);
    testNumLength(number);
  });
  $("#operators > button").click(function() {
    operator = $(this).text();
    newNumber = number;
    number = "";
    totaldiv.text(0);
  });
  $("#clear").click(function() {
    number = "";
    totaldiv.text(0);
  });
  $("#equals").click(function() {
    let result = 0;
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
});
