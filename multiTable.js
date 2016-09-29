// Right aligned multiplication table
var n = prompt("Enter a number");
maxResult = (n*n).toString();
var maxLength = maxResult.length;
for(var i = 1; i <= n; i++){
  str = "";
  for(var j = 1; j <= n; j++){
    number = i*j;
  	var numStr = number.toString().length;
    var unitSpace = maxLength - numStr;
    for(var k = 0; k <= unitSpace; k++){
      str += " "; 
    }
      str += number + " ";
  }
  console.log(str);
}