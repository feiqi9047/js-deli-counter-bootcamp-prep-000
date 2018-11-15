var katzDeliLine = [];
var number = 0;

function takeANumber(katzDeliLine){
    number = number +1;
    katzDeliLine.push(number)
    return `Welcome, ${number}. You are number ${katzDeliLine.length} in line.`
}