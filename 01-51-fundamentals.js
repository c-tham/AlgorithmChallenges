
    var name = prompt("Please enter your name");
    var numberQuestions = prompt("Number of questions do you want to play?");
    var questions = [];
    var noQuestions = 0;
    var correctAnswer = 0;
    var askQuestion = '';
    var askAnswer = '';
    var askContinue = '';
    var yourAnswer = '';

    if (numberQuestions != 0) {
        do {
            noQuestions++;
            askQuestion = prompt('Hello '+name+', what is your question '+noQuestions+' is?');
            askAnswer = prompt('Hello '+name+', what is your answer '+noQuestions+' is?');
            questions.push([askQuestion,askAnswer]);
            // console.log(questions);
        } while (noQuestions < numberQuestions )

        for (i=0;i<questions.length;i++) {
            // console.log(questions[i]);
            yourAnswer = prompt('Hello '+name+', question '+(i+1)+' is '+questions[i][0]+'?');
            if (questions[i][1] == yourAnswer) {
                correctAnswer++;
            }
        }

        alert('You have answered '+correctAnswer+' of '+questions.length+' corrected. Thank you');
    }
