$(document).ready(function(){ 

//========================================================================

// QUESTIONS & ANSWERS & CORRECT ANSWER

var myQuestions = [
{
question: "What year was Shakespeare born?",
answers: ["1616", "1564", "1732", "1501"],
correctAnswer: "1564"
},
{
question: "Who was Shakespeare's Wife?",
answers: ['Margaret Thatcher', 'Anne Hathaway','Halle Berry','Elizabeth Townsend'],
   correctAnswer: 'Anne Hathaway'
},

{
question: "What was Shakespeare's first play?",
answers: ['Hamlet', 'Macbeth', 'Titus Andronicus','Timon of Athens'],
correctAnswer: 'Titus Andronicus'
},

{
question: "How many Greek plays has Shakespeare written?",
answers: ['3', '7', '1', '4'],
correctAnswer: '3'
},

{
question: "What was William Shakespeare's father's profession?",
answers: ['priest', 'book binder','cobbler', 'glove maker'],
correctAnswer: 'glove maker'
},
]; 

//========================================================================

// VARIABLES FOR TRIVIA GAME

var game = {
  correct: 0, 
  incorrect: 0,
  counter: 120, 
  countdown: function() {
    game.counter--;
    $('#timer').html(game.counter);
 
    // if the timer runs out, then run the function "game done" to trigger end of game
      if(game.counter<= 0){
        console.log("Time is up!");
        //game.done();
    }
  }
}

// START OF GAME -----------------------------------------------------------------------------------

  // - FUNCTION - WHEN START BUTTON IS CLICKED
    $("#startButton").on('click', function() {

      // alert the user how much time they have for trivia game
        alert("You have 2 minutes to answer all the questions. Good Luck!");
      
        // TIMER ---------------------------------------------------------------------------------
        // start the timer 
        timer = setInterval(game.countdown, 1000);

        // add text of time remaining to page
        $("#smwrapper").prepend('<h2> Time Remaining: <span id="timer">120</span> seconds </h2>');

        // HIDE START BUTTON ---------------------------------------------------------------------
        $('#startButton').hide();

        // QUESTIONS AND ANSWERS ------------------------------------------------------------------
        // sort through my questions array
        for(var i = 0; i < myQuestions.length; i++){

        // append the questions to the div 
        $("#smwrapper").append('<h4>' + myQuestions[i].question + '</h4>');

        // create a loop to go through all the answers 
        for(var j = 0; j < myQuestions[i].answers.length; j++){

            // append the answers and give them a radio button to collect an input(or answer) from the user
            $("#smwrapper").append("<input type='radio' name='question-"+i+"' value='"+myQuestions[i].answers[j]+"'>" +myQuestions[i].answers[j])
            }
        } //end for loop 

      }); // END OF THE CLICK START BUTTON FUNCTION

}) // END OF THE DOCUMENT READY FUNCTION
