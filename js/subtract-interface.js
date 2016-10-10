var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#subtract-form').submit(function(event) {
    
    event.preventDefault();
    var num1 = parseInt($('#subtract-num1').val());
    var num2 = parseInt($('#subtract-num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.subtract(num1, num2);
    $('#solution').text(output);
  });
});
