let stage = 1;

// Random floating animation speed
let floats = document.querySelectorAll(".float");

floats.forEach(function(el){

let duration = 5 + Math.random() * 10;
let delay = Math.random() * 5;

el.style.animationDuration = duration + "s";
el.style.animationDelay = delay + "s";

});

// Puzzle logic
function checkAnswer(){

let input = document.getElementById("answer").value.toUpperCase();

if(stage === 1){

if(input === "DESIRE"){

document.getElementById("story").innerHTML =
"✨ The mirror fades... A glowing spell appears.";

document.getElementById("clue").innerHTML =
"Clue: MAGIC (Shift each letter forward by 1)";

document.getElementById("message").innerHTML =
"Hint: Spell Cipher";

stage = 2;

}else{

document.getElementById("message").innerHTML =
"❌ Wrong. Gaze deeper into the mirror.";

}

}

else if(stage === 2){

if(input === "NBHJD"){

document.getElementById("story").innerHTML =
"💀 You sense the Final Horcrux nearby...";

document.getElementById("clue").innerHTML =
"Final Clue: Reverse the last 3 letters of NBHJD";

document.getElementById("message").innerHTML =
"The Horcrux is revealing itself...";

stage = 3;

}else{

document.getElementById("message").innerHTML =
"❌ Spell failed.";

}

}

else if(stage === 3){

if(input === "DJH"){

document.getElementById("story").innerHTML =
"⚡ YOU DESTROYED THE FINAL HORCRUX ⚡";

document.getElementById("clue").innerHTML =
"🏆 Hogwarts is safe because of you!";

document.getElementById("message").innerHTML =
"🎉 Congratulations, Wizard!";

}else{

document.getElementById("message").innerHTML =
"❌ The Horcrux still exists.";

}

}

}