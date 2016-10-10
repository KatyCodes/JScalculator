var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#multiply-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#multiply-num1').val());
    var num2 = parseInt($('#multiply-num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.multiply(num1, num2);
    $('#solution').text(output);
  });
});
