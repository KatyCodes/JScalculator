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

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    $("#solution").empty();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});

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
