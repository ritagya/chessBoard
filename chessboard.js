// Chess board
var n = prompt("Enter a number");
for(var i = 1; i <= n; i++){
  var str = "";
  for(var j = 1; j <= n; j++){
    if((i+j) % 2 !== 0){
      str += "#";
    }
    else{
      str += " ";
    }
  }
  console.log(str);
}