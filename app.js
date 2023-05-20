function getNum(num){
    document.getElementById('result').value += num;
}
if (num === "Math.sin") {
  resultInput.value = resultInput.value.replace(/(.*)/, "sin");

} 
else if (num === "Math.cos") {
  resultInput.value = resultInput.value.replace(/(.*)/, "cos");
} 
  else if (num === "Math.E") {
  resultInput.value = resultInput.value.replace(/(.*)/, "E");
} 
else if (num === "Math.tan") {
  resultInput.value = resultInput.value.replace(/(.*)/, "tan");
}
 else if (num === "Math.PI") {
  resultInput.value = resultInput.value.replace(/(.*)/, "π");
} 
else if (num === "Math.log") {
  resultInput.value = resultInput.value.replace(/(.*)/, "log");
}
 else if (num === "Math.exp") {
    resultInput.value = resultInput.value.replace(/(.*)/, "exp");
}
else if (num === "Math.sqrt") {
    resultInput.value = "√"; resultInput.value += num;
}  
function clearscr(){
    document.getElementById('result').value = '';
}

function removeNumb(){
    var res = document.getElementById('result').value; 
    document.getElementById('result').value = document.getElementById('result').value.slice(0,res.length-1)
}

function getAns(){
    document.getElementById('result').value = eval(document.getElementById('result').value)

}
 try {
    var result = eval(expression);
    resultInput.value = result;
  } catch (error) {
    resultInput.value = "Error";
  }


    