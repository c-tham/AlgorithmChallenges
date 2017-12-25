// More Accurate Grades
// For an additional challenge, add ‘ - ’ signs to scores in the bottom two percent of A, B, C and D scores, and “ + ” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise never gives an A+). Given 88 , console.log "Score: 88. Grade: B+" . Given 61 , log "Score: 61. Grade: D-" .

function letterGrade(score) {
    var grade = '';
    var accurate = 0;
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
    accurate = Math.ceil(((score/10) - Math.floor(score/10))*10);
    // console.log('Accurate = '+accurate);
    if (score < 95) {
        if (accurate>=8) {
            grade += '+';
        } else if (accurate<=2) {
            grade += '-';
        }
    }

    console.log('Score: '+score+'. Grade: '+grade);
}

letterGrade(88);
letterGrade(61);