const numChildren = [1, 2, 3, 4, 5];

const partnerNames = ["John", "William", "James", "Johnson", "Smith"];

const locations = ["Canada", "Austria", "France", "Germany", "Norway"];

const jobs = ["Teacher", "engineer", "programmer", "Physician", "Nurse"];

function tellFortune() {

    const randomNumChildren = numChildren[Math.floor(Math.random() * numChildren.length)] ;
    const randomPartnerNames = partnerNames[Math.floor(Math.random() * partnerNames.length)] ;
    const randomLocations = locations[Math.floor(Math.random() * locations.length)] ;
    const randomJobs = jobs[Math.floor(Math.random() * jobs.length)] ;
    

    return `You will be a ${randomJobs} in ${randomLocations} married to ${randomPartnerNames} with ${randomNumChildren} kids.`
}

console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
console.log(tellFortune(numChildren, partnerNames, locations, jobs));