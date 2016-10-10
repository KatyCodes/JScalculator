var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#add-form').submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($('#add-num1').val());
    var num2 = parseInt($('#add-num2').val());
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.add(num1, num2);
    $('#solution').text(output);
  });
});
