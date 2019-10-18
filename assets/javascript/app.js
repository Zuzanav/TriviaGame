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
  answers: ['Priest', 'Book Binder','Cobbler', 'Glove Maker'],
  correctAnswer: 'Glove Maker'
},

{
  question: "How many plays did Shakespeare write, that we know of?",
  answers: ['15', '37', '42', '31'],
  correctAnswer: '37'
},

{
  question: "What condition does Othello live with?",
  answers: ['Schizophrenia', 'Syphilis', 'Depression', 'Epilepsy'],
  correctAnswer: 'Epilepsy'
},

{
  question: "What play is this famous line from? 'If you prick us, do we not bleed?'",
  answers: ['Merchant of Venice', 'Macbeth', 'Twelth Night', 'Othello'],
  correctAnswer: 'Merchant of Venice'
},

{
  question: "How does Lady Macbeth learn of her husband's first meeting with the witches?",
  answers: ['He tells her in person', 'Via a letter', 'Through a dream', 'Banquo tells her'],
  correctAnswer: 'Via a letter'
},

{
  question: "Which of these plays, while not historical, is loosely based on historical events?",
  answers: ['The Tempest', 'Much Ado About Nothing', 'Macbeth', 'Romeo and Juliet'],
  correctAnswer: 'Macbeth'
},


]; 

//========================================================================

// VARIABLES FOR TRIVIA GAME

var game = {
  correct: 0, 
  incorrect: 0,
  counter: 5, 
  //countdown function
  countdown: function() {
    // decrease the amount of time by 1
    game.counter--;
    // add time to html timer 
    $('#timer').html(game.counter);
 
    // if the timer runs out, then run the function "game done" to trigger end of game
      if(game.counter<= 0){
        console.log("Time is up!");
        doneGame();
    }
  }
}


// START OF GAME -----------------------------------------------------------------------------------

    // WHEN START BUTTON IS CLICKED, CALL THE startGame FUNCTION
    $("#startButton").on('click', function() {
      startGame();
      console.log("start button clicked");
    })

    // FUNCTION OF START OF GAME 
    function startGame() {

      // alert the user how much time they have for trivia game
        //alert("You have 2 minutes to answer all the questions. Good Luck!");
      
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
            $("#smwrapper").append("<input class='radiobtn' type='radio' name='question-"+i+"' value='"+myQuestions[i].answers[j]+"'>" +myQuestions[i].answers[j])
            };
        } //end for loop 

      }; // END OF startGame FUNCTION

// END OF GAME -----------------------------------------------------------------------------------

  // FUNCTION OF DONE GAME doneGame
  function doneGame() { 

    var inputs = $("input:checked")

    for (var i = 0; i < inputs.length; i++) {
      if ($(inputs[i]).val() === myQuestions[i].correctAnswer) {
        game.correct++;
        } else {
          game.incorrect++;
        }
    };


    // VARIABLES -------------------------------------------------------------
    var totalQuestions = myQuestions.length;
    var totalincorrect = game.incorrect;
    var totalcorrect = game.correct;
    var unansweredTotal = totalQuestions - (totalincorrect + totalcorrect);
    console.log("unanswered global : " + unansweredTotal);
  
    result( x = unansweredTotal );

    // ----------------------------------------------------------------------
    function result(x) {
      clearInterval(timer);
      $("#smwrapper h2").remove();
      $("#smwrapper").html("<h2> All done </h2>");
      $("#smwrapper").append("<h3> Correct Answer: " + game.correct +  "</h3>");
      $("#smwrapper").append("<h3> Incorrect Answer: " + game.incorrect +  "</h3>");
      $("#smwrapper").append("<h3> Unanswered: " + x + "</h3>");
      console.log("questions" + myQuestions.length);
      console.log("incorrect" + game.incorrect);
      console.log("correct" + game.correct);
    }
  } // END OF doneGame FUNCTION



}) // END OF THE DOCUMENT READY FUNCTION
