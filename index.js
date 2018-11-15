var katzDeliLine = [];
var number = 0;

function takeANumber(katzDeliLine,name){
    katzDeliLine.push(name)
    return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(line){
  if (line.length===0){
    return 'There is nobody waiting to be served!'
  } else{
     return 'Currently serving ' + line.shift() +'.';
  }
}

function currentLine(line){
var outputString;
if (line.length === 0){
outputString = “The line is currently empty.”
}
else{
outputString = “The line is currently: ”;
for(var i = 0; i < line.length ; i++){
if (i === 0){

outputString = outputString + (i+1) + “. ” + line[i];
}
else{
outputString = outputString + “, ” + (i+1) + “. ” + line[i];
}
}
}
return outputString;
}