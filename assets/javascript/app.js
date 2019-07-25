
$(document).ready(function(){ 


//========================================================================
// VARIABLES 

var correct = 0;
var incorrect = 0;
var question = "none";
var input = "none";
var answer = "none";

// Start Game - when user presses Start Button
$("#startButton").click(function() {


    // alert the user how much time they have for trivia game
    alert("You have 2 minutes to answer all the questions. Good Luck!");

    // hide the start button
    $('#startButton').hide();

    // start the timer
    setTimeout(twoMinutes, 1000 * 5);
    
    function twoMinutes() {
        // 
        $("#time-left").append("<h2> you have whatever seconds </h2>");
        console.log("Time's Up!");

    // show the questions
    // $("#quiz-container").show();

};

});


}) ;




//=======================================================================

// QUESTIONS & ANSWERS & CORRECT ANSWER
/* var myQuestions = [
	{
		question: "What year was Shakespeare born?",
		answers: {
			a: '1616',
			b: '1564',
            c: '1732',
            d: '1501'
		},
		correctAnswer: 'b'
    },
    {
		question: "Who was Shakespeare's Wife?",
		answers: {
			a: 'Margaret Thatcher',
			b: 'Anne Hathaway',
            c: 'Halle Berry',
            d: 'Elizabeth Townsend'
		},
		correctAnswer: 'b'
    },
    
    {
		question: "What was Shakespeare's first play?",
		answers: {
			a: 'Hamlet',
			b: 'Macbeth',
            c: 'Titus Andronicus',
            d: 'Timon of Athens'
		},
		correctAnswer: 'c'
    },
    
    {
		question: "How many Greek plays has Shakespeare written?",
		answers: {
			a: '3',
			b: '7',
            c: '1',
            d: '4'
		},
		correctAnswer: 'a'
    },
    
    {
		question: "What was William Shakespeare's father's profession?",
		answers: {
			a: 'priest',
			b: 'book binder',
            c: 'cobbler',
            d: 'glove maker'
		},
		correctAnswer: 'd'
    },

]; */

//========================================================================

// Before Start of Game 

//document.getElementById('quiz-container').style.visibility = 'hidden';



