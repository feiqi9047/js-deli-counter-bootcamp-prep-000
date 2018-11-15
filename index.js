var katzDeliLine = [];
var number = 0;

function takeANumber(katzDeliLine){
  number = number +1;
  katzDeliLine.push(number);
  return "Welcome ${number}, you are ${katzDeliLine.length} in line."
}