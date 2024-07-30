function appendToDisplay(value) {
    document.getElementById("display").value += value;
  }
  
function clearDisplay(value){
    document.getElementById("display").value=" ";
    
}

function DelByEachElement(){
    let displayElement = document.getElementById("display");
    let displayValue = displayElement.value;
        displayValue = displayValue.slice(0,-1);
        displayElement.value = displayValue;
}

  function calculate() {
    try {
      const result = eval(document.getElementById("display").value);
      document.getElementById("display").value = result;
    } catch (error) {
      document.getElementById("display").value = "Error";
    }
  }
  
  // clear Display, clear last element