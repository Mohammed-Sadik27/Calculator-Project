const display=document.getElementById('display');

function appendToDisplay(item){ // add element in screen of calculator 
    display.value +=item
}
function ClearDisplay(){   // remove the last element added
    display.value=display.value.slice(0,-1);
}
function calculateResult(){ // calcul and display the result in screen
    try{
         display.value=eval(display.value);
    } 
    catch(error){
        alert("Invalid input. Please try again.");
    }
}
function ACbutton(){ // Clear screen 
    display.value="";
}