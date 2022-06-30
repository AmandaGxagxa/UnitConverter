var inputNum = document.getElementById("inputFeet");
//feet to length
var lengthOutput = document.getElementById("length_number");
var feetOutput = document.getElementById("feet_number");
// labels
var lengthLabel = document.getElementById("lengthLb");
var feetLabel = document.getElementById("feetLb");

// Liter to gallons
var literOutput = document.getElementById("liter_number");
var gallOutput = document.getElementById("gallon_number");
//labels
var literLabel = document.getElementById("literLb");
var galLabel = document.getElementById("gallonLb");

// KG to Pound
var kgOutput = document.getElementById("kg_number");
var poundOutput = document.getElementById("pound_number");
//labels
var kgLabel = document.getElementById("kgLb");
var poundLabel = document.getElementById("poundLb");


function unitConverter( numValue) {
 var lLabel= lengthLabel.innerHTML = numValue + "feets = ";
 var fLabel= feetLabel.innerHTML = numValue + "Meter = ";

 var litLabel= literLabel.innerHTML = numValue + "Liter = ";
 var gLabel= galLabel.innerHTML = numValue + "Gallon = ";

 var kgLl= kgLabel.innerHTML = numValue + "Kilograms = ";
 var poundLl= poundLabel.innerHTML = numValue + "Pound = ";


var lengthTotal = lengthOutput.innerHTML=(numValue/3.2808).toFixed(2) + " Meters | "  
feetOutput.innerHTML= (numValue*3.2808).toFixed(3) + " Feets";

var literTotal = literOutput.innerHTML=(numValue*0.264172).toFixed(2) + " Gallons | "  
gallOutput.innerHTML= (numValue * 3.78541).toFixed(2) + " Liter";

var Total = kgOutput.innerHTML= (numValue * 2.2046).toFixed(2) + " Pounds | "  
poundOutput.innerHTML= (numValue / 2.20461).toFixed(2) + " Kilograms";




// kiloOutput.innerHTML=numValue/2.2046 + "|" ;   
}
