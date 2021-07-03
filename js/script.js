// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate a random word of a certain length from a string of characters 
function randomWord (ll,ranChars){
   var temp1="";
   //Add all existing alphatetic characters to a standard string to choose from
   for ( var xx=0; xx<ll; xx++) {
     temp1 += ranChars.charAt(Math.floor(Math.random()*ranChars.length));
   }  
   //console.log (" Temp is " + temp1);
   return temp1;
}
//Generate the password based on the user inputs
function generatePassword(){
  //Basic alphatetic characters
  var useChars="abcdefghijklimnopqrstuvwxyz";
  //Prompt user for password length until correct value is entered or user cancel program
  var passLength =window.prompt("Please select the length of your password-From 8 to 128", " ");
 if (passLength){
  while (isNaN(passLength) || passLength < 8 || passLength > 128  || (passLength === " ")) {
    var passLength =window.prompt("Please enter a valid number  from 8 to 128"," "); 
    if(!passLength) { //User pressed Cancel 
      alert("You terminated the program");
     return;}
  }
} else { //User cancelled the program by pushing the cancel button
     alert("You terminated the program");
   return;
   }
  //Prompt user for lower case choice until right answer is entered or exits
 var pasL =window.prompt("Do you want to include a lower case in your password? yes or no"," ");
 if (pasL){ 
  pasL = pasL.toLowerCase();
  while ((pasL !== "yes" && pasL !== "no") || (pasL === " ")) {
    var pasL =window.prompt("Please enter a valid answer for lower case; yes or no"," ");
    if(!pasL) { //User pressed Cancel 
      alert("You terminated the program");
     return;}
  }
} else { alert("You terminated the program");
   return;
   }
//Prompt user for Upper case choice until right answer is entered or exits
var pasU =window.prompt("Do you want to include a upper case in your password? yes or no"," ");
if (pasU){ 
  pasU = pasU.toLowerCase();
 while ((pasU !== "yes" &&  pasU !== "no") || (pasU === " ")) {
   var pasU =window.prompt("Please enter a valid answer for your upper case; yes or no"," ");
   if(!pasU) { //User pressed Cancel 
    alert("You terminated the program");
   return;}
 }
} else { alert("You terminated the program");
  return;
  }
 //Prompt user for number choice until right answer is entered or exits
 var pasN =window.prompt("Do you want to include one number in your password? yes or no"," ");
if (pasN){ 
  pasN = pasN.toLowerCase();
 while ((pasN !== "yes" && pasN !== "no") || (pasN === " ")) {
   var pasN =window.prompt("Please enter a valid answer for number. yes or no"," ");
   if(!pasN) { //User pressed Cancel  button
    alert("You terminated the program");
   return;}
 }
} else { alert("You terminated the program");
  return;
  } 
//Prompt user for special character choice until right answer is entered for special character
 
var pasS =window.prompt("Do you want to include one special character in your password? yes or no","");
    
if (pasS){ 
  pasS = pasS.toLowerCase();
 while ((pasS !== "yes" && pasS !== "no") || (pasS === " "))  {
   var pasS =window.prompt("Please enter a valid answer for special character. yes or no"," ");
   if(!pasS) { //User pressed Cancel button
    alert("You terminated the program");
   return;}
 }
} else { alert("You terminated the program"); //User pressed Cancel button
  return;
  } 
  
  // Make Modification to pool of characaters for random password generation based on user criteria 
  //No lower cases
    if (  pasL ==="no") {
    Lcase="abcdefghijklimnopqrstuvwxyz";
    useChars= Lcase.toUpperCase();
  }
  //Upper cases included in pool when user chooses to do so
  if ( pasU==="yes" ){
    Lcase="abcdefghijklimnopqrstuvwxyz";
    useChars= useChars +  Lcase.toUpperCase();
  }
  //Special characters included in pool when user chooses yes
  if ( pasS === "yes" ){
  useChars= useChars + "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}
//Number included in the pool
if ( pasN === "yes" ){
  useChars= useChars + "0123456789";
}
//Generate a random word with the criterias from the updated pool of characters
    randW=randomWord(passLength,useChars);
 // Return password   
 return randW;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
