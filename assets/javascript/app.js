$(document).ready(function(){

	var timeCount = 61;
	var intervalId;
	var correct = 0;
	var incorrect = 0;
	var notAnswered = 0;


	// Start button and timer
	$("#start").click(startGame);


function startGame() {

		function run() {
			intervalId = setInterval(decrement, 1000);
			$("#start").hide()		
		}

		function decrement() {
			timeCount--;
			$("#theTime").html("<h2>Time Remaining: " + timeCount + "</h2>");

			if (timeCount === 0) {
				stop();
				endGame();
			}

		}

		function stop() {
			clearInterval(intervalId);
		}
	
	run();
	// End of timer

	// Beginning of questions

	var questions = [{
		q1: "Which animal is the hardest to catch?",
		a1: ["bird", "dog", "snake", "chicken"],
		rAnswer: "bird"
	}, {
		q1: "How many dogs are in a dozen?",
		a1: ["2", "5", "12", "24"],
		rAnswer: "12"
	}, {
		q1: "What country has the biggest population?",
		a1: ["United States", "Russia", "China", "South Africa"],
		rAnswer: "China"
	}];

	var questionNumber = 0;

	function showGame() {

		if (questionNumber === 3) {

			endGame();
			return;
		}


		var showQ = questions[0].q1;
		var showA = questions[0].rAnswer;
		$("#showTime").empty().append("<h2>" + showQ + "</h2>");
		console.log(showQ);

		for (var a = 0; a < questions[0].a1.length; a++) {
			var chosenAnswers = questions[questionNumber].a1[a];
			// console.log(chosenAnswers);
			// $("#slowTime").prepend("<div>" + chosenAnswers + "</div>");

			if(questions[questionNumber].rAnswer === questions[questionNumber].a1[a]) {
				$("#slowTime").append("<div id='right'>" + chosenAnswers + "</div>")
			}
			else {
				$("#slowTime").append("<div class='nope'>" + chosenAnswers + "</div>");
			}
		}

		// onclick 

		$("#right").on("click", function() {
			questionNumber++;
			correct++;
			setTimeout(startGame, 1000);

		});

		$(".nope").on("click", function() {
			questionNumber++;
			incorrect++;
			setTimeout(startGame, 1000);
		})

 	}

 	function endGame() {
 		("#showTime").empty();
 		("#slowTime").empty();
 		("#showTime").append("<div> Number of Correct Answers = " + correct + "</div>");
 		("#showTime").append("<div> Number of Wrong Answers = " + incorrect + "</div>");
 		("#showTime").append("<div> Number of Unanswered = " + notAnswered + "</div>");
 		stop();
 	}

 	showGame();

}

});