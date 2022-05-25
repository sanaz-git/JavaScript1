const credit = document.getElementById('credit');
const select = document.getElementById('btn1');
const validate = document.createElement('h1');
const ulEl = document.createElement('ul');
ulEl.classList.add('ul');
ulEl.style.display = 'none';
document.body.appendChild(ulEl);

const credit2 = parseInt(credit.value);

// Input must be 16 characters
function numCharacters() {
  if (credit.value.length == 16) {
    return true;
  } else {
    return false;
  }
}

// // All characters must be numbers
function checkNumber() {
  let regEx = '^[0-9]+$';

  if (credit.value.match(regEx)) {
    return true;
  } else {
    return false;
  }
}

// At least two different numbers should be represented
function twoDifferentNumbers() {
  for (i = 1; i < credit.value.length; i++) {
    if (credit.value[0] !== credit.value[i]) return true;
  }
  return false;
}

// // The last number must be even
function lastNumIsEven() {
  lastDigit = credit.value % 10;
  if (lastDigit % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// // The sum of all the numbers must be greater than 16
function sum() {
  let sumOfNumbers = 0;

  for (let i = 0; i < credit.value.length; i++) {
    sumOfNumbers += parseInt(credit.value[i]);
  }

  if (sumOfNumbers > 16) {
    return true;
  } else {
    return false;
  }
}

select.addEventListener('click', validateCreditNumber);

function validateCreditNumber(credit2) {
  ulEl.innerHTML = '';
  const answers = [];

  if (
    numCharacters(credit2) &&
    checkNumber(credit2) &&
    twoDifferentNumbers(credit2) &&
    lastNumIsEven(credit2) &&
    sum(credit2) == true
  ) {
    validate.textContent = 'your number is valid';
    answers.push(validate.textContent);
  } else {
    if (numCharacters(credit2) == false) {
      validate.textContent = 'Input must be 16 characters';
      answers.push(validate.textContent);
    }

    if (checkNumber(credit2) == false) {
      validate.textContent = 'All characters must be numbers';
      answers.push(validate.textContent);
    }

    if (twoDifferentNumbers(credit2) == false) {
      validate.textContent =
        'At least two different numbers should be represented';
      answers.push(validate.textContent);
    }

    if (lastNumIsEven(credit2) == false) {
      validate.textContent = 'The last number must be even';
      answers.push(validate.textContent);
    }

    if (sum(credit2) == false) {
      validate.textContent =
        'The sum of all the numbers must be greater than 16';
      answers.push(validate.textContent);
    }
  }
  answers.forEach((answer) => {
    const x = document.createElement('li');
    x.textContent = answer;
    ulEl.appendChild(x);
    ulEl.style.display = 'block';
  });
}
