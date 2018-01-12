$(document).ready(function() {
  $("form#Triangle").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());


    if (side1 === side2 && side1 === side3) {
      $('#equilateral').show();
    }
    if (side1 === side2 < side3) {
      $('#isosceles').show();
    }
    if (side2 === side3 > side3) {
      $('#isosceles').show();
    }
    if (side1>side3>side2) {
      $('#scalene').show();
    }
    if (side1<side3<side2) {
      $('#scalene').show();
    }
    if (side1<side3>side2) {
      $('#scalene').show();
    }
    if (side1 + side2 <= side3) {
      $('#not').show();
    }
    if (side2 + side3 <= side1) {
      $('#not').show();
    }
    if (side1 + side3 <= side2) {
      $('#not').show();
    }
event.preventDefault();
   });
 });
