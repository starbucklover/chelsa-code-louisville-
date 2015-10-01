quiz.js

var correct = 0;
var totalQuestions = 3;

var answer1 = prompt("Is D a dhampir?");
if(answer1.toUpperCase() === 'YES') {
     correct +=1;
    }

var answer2 = prompt("Is D the son of a vampire father and human mother ?");
if(answer2.toUpperCase() === 'YES') {
     correct +=1;
    }

var answer3 = prompt("Does D have a symbiotic left hand?");
if(answer3.toUpperCase() === 'YES') {
    correct +=1;
}



if(correct === 3) { 
  document.write("<p>You win .</p>"); 
} else if(correct === 2) {
  document.write("<p>Not bad.</p>"); 
} else if(correct === 1) {
  document.write("<p>Sorry you only get one.</p>"); 
} else if(correct ===0) {  
 document.write("<p>SORRY YOU LOSE!.</p>");
}