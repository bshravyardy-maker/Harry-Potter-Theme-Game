let stage = 1;

function checkAnswer(){

let input = document.getElementById("answer").value.toUpperCase();

if(stage === 1){

if(input === "DESIRE"){
document.getElementById("story").innerHTML =
"Correct. A spell appears in the air...";
document.getElementById("clue").innerHTML =
"Spell word: MAGIC (shift each letter +1)";
document.getElementById("message").innerHTML =
"Hint: Caesar Cipher";
stage = 2;
}
else{
document.getElementById("message").innerHTML =
"Wrong. Gaze deeper into the mirror.";
}

}

else if(stage === 2){

if(input === "NBHJD"){
document.getElementById("story").innerHTML =
"You are close. The Horcrux reveals itself...";
document.getElementById("clue").innerHTML =
"Final password: Reverse last 3 letters of NBHJD";
stage = 3;
}
else{
document.getElementById("message").innerHTML =
"The spell failed.";
}

}

else if(stage === 3){

if(input === "DJH"){
document.getElementById("story").innerHTML =
"⚡ YOU FOUND THE FINAL HORCRUX ⚡";
document.getElementById("clue").innerHTML =
"Victory belongs to you, wizard.";
document.getElementById("message").innerHTML =
"🏆 Congratulations!";
}
else{
document.getElementById("message").innerHTML =
"The Horcrux remains hidden.";
}

}

}