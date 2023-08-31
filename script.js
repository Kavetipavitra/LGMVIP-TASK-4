let result = document.getElementById('result');
function updateDisplay(value){
   result.value += value;

}
function clearDisplay(){
   result.value = "";

}
function calculation(){
  result.value = eval(result.value)
}
