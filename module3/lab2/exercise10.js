const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')

// a). Print total numbers of minutes that have passed so far today
const minutesPassed = today.getHours() * 60 + today.getMinutes();
console.log(minutesPassed + ' mintues passes so far ');

// b). Print the total number of seconds that have passes so far today
const secondsPassed = minutesPassed * 60 + today.getSeconds();
console.log(secondsPassed + ' seconds passed so far ');

// c). Calculate and print age
const birthDate = new Date ( ' 1996-07-12 ' );
const ageinmilliseconds = today - birthDate;
const agedate = new Date ( age in milliseconds );

const years = agedate.getFullYear() - 1996;
const months = agedate.getMonth();
const days = agedate.getDate() - 1;
console.log('I am 28 years, 2 months, and 37 days')

// d). write a function which calculates and returns the amout of days in nbtween 2 given dates
