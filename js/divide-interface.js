var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#divide-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#divide-num1').val());
    var num2 = parseInt($('#divide-num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.divide(num1, num2);
    $('#solution').text(output);
  });
});
