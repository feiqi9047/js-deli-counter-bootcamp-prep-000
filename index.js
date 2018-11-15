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

function CurrenLine(numline){
  var str = "The line is currently: "
  if (numline.length===0){
    return 'There is nobody waiting to be served!'
  } else{
    for(var i=0; i<numline.length; i++){
      line += (i+1) + ". " + numline[i] + ", "
 