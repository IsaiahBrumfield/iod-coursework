import { DateTime } from 'luxon';

const now = DateTime.now(); // Get current time
console.log('Current DateTime:', now.toString());

// Add 1 week to current date
const oneWeekLater = now.plus({ weeks: 1 });
console.log('One Week Later:', oneWeekLater.toString());

// Subtract 1 month from the current date
const oneMonthAgo = now.minus({ months: 1 });
console.log('One Month Ago:', oneMonthAgo.toString());

// Format the current date
const formattedNow = now.toLocaleString(DateTime.DATE_FULL);
console.log('Formatted Current Date:', formattedNow);

// Custom format
const customFormattedDate = now.toFormat('MMMM dd, yyyy');
console.log('Custom Formatted Date:', customFormattedDate);
