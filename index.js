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

function CurrenLine(katzDeliLine){
  if (line.length===0){
    return 'There is nobody waiting to be served!'
  } else{
    var newLine = [],i;
    for (i=0; i<newLine.length;i++); 
    newLine.push('${i+1}.${newLine[i]}');
  }
  return 'The line is currently: ${newLine}'
}