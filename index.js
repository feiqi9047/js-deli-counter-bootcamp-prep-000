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
    var newLine = [];
    for (var i=0; i<line.length; i++){
      newLine.push()
    }
  }
}