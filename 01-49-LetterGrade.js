// Letter Grade
// Mr. Cerise teaches high school math. Write a function that assigns and prints a letter grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. For example, given 88 , you should log "Score: 88. Grade: B" . Given the score 61 , log the string "Score:61. Grade: D" .

function letterGrade(score) {
    var grade = '';
    if (score >= 90) {
        grade = 'A';
    } else if (score >= 80 && score <= 89) {
        grade = 'B';
    } else if (score >= 70 && score <= 79) {
        grade = 'C';
    } else if (score >= 60 && score <= 69) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    console.log('Score: '+score+'. Grade: '+grade);
}

letterGrade(88);
letterGrade(61);