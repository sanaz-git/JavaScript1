// define a function calculate student grade

function gradeCalculator(point){
    let grade;

    if(point >= 90  && point <= 100){ 
        grade = 'A'
    }else if (point >=  80  && point <= 89){
        grade = 'B'
    }else if (point >= 70 && point <= 79){
        grade = 'C'
    }else if (point >= 60 && point <= 69){
        grade = 'D'    
    }else if (point >= 50 && point <= 59){
        grade = 'E' 
    }else{
        grade = 'F'
    }
    // return 'you got a ' + grade + '(' + point + '%)!';

    return `You got a ${grade} (${point}%)!`
}

const studentOneGrade = 90;

const output = gradeCalculator(studentOneGrade)

console.log(output)

// console.log(gradeCalculator(90))
