/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let score = 90; 

if (score >= 90 && score <= 100) {
    console.log('Tumi A+ paico');
} else if (score >= 80 && score < 89) {
    console.log('Tumi B+ paico');
} else if (score >= 70 && score < 79) {
    console.log('Tumi c+ paico');
} else if (score >= 60 && score < 69) {
    console.log('Tumi D+ paico');
} else if (score >= 0 && score < 59) {
    console.log('Tumi F paico');
} else {
    console.log('Tumi fale korco');
}
