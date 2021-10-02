const numChildren = [1, 2, 3, 4, 5];

const partnerNames = ["John", "William", "James", "Johnson", "Smith"];

const locations = ["Canada", "Austria", "France", "Germany", "Norway"];

const jobs = ["Teacher", "engineer", "programmer", "Physician", "Nurse"];

function tellFortune(a, b, c, d) {

    Math.floor(numChildren.random() + a)

    return `You will be a ${jobs} in ${locations} married to ${partnerNames} with ${numChildren} kids.`
}

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));