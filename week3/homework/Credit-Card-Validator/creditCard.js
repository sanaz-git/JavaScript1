const credit = document.getElementById('credit');
const validate = document.getElementById('validate');
const select = document.getElementById('btn1');

// Input must be 16 characters
function numCharacters(credit) {
  const input = credit.toString().length;
  console.log(input);

  if (input == 16) {
    return true;
  } else {
    return false;
  }
}

// // All characters must be numbers
// function checkNumber(credit) {
//   let regEx = '^[0-9]+$';

//   if (credit.match(regEx)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// At least two different numbers should be represented
// function twoDifferentNumbers(credit) {
//   for (i = 1; i < credit.length; i++) {
//     if (credit[0] !== credit[i]) return true;
//   }
//   return false;
// }

// // The last number must be even
// function lastNumIsEven(credit) {
//   lastDigit = credit % 10;
//   // console.log('The last digit of ', credit, ' is ', lastDigit);
//   if (lastDigit % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // The sum of all the numbers must be greater than 16
// function sum(num) {
//   let sumOfNumbers = 0;

//   for (let i = 0; i < num.length; i++) {
//     sumOfNumbers += parseInt(num[i]);
//   }

//   if (sumOfNumbers > 16) {
//     return true;
//   } else {
//     return false;
//   }
// }

select.addEventListener('click', validateCreditNumber);

function validateCreditNumber(credit) {
  // const answers = [];

  if (lastNumIsEven(credit) == true) {
    validate.textContent = 'your number is valid';
  } else {
    validate.textContent = 'Input must be 16 characters';

    // if (checkNumber(num) == false) {
    //   answers.push('All characters must be numbers');
    // }

    // if (twoDifferentNumbers(credit) == false) {
    //   validate.textContent =
    //     'At least two different numbers should be represented';
    // }

    //   if (lastNumIsEven(num) == false) {
    //     answers.push('The last number must be even');
    //   }

    //   if (sum(num) == false) {
    //     answers.push('The sum of all the numbers must be greater than 16');
    //   }

    //   const x = answers.join('\n');
    //   return `Invalid Number \n ${x} `;
  }
}
