var katzDeliLine = [];
var number = 0;

function takeANumber(katzDeliLine,name){
    number = number +1;
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}