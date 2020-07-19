const month = ['Januray', 'February', 'March', 'April', 'May', 'Jaun', 'July', 'Oguist', 'Septamber', 'October', 'November', 'December'];
const day = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wendsday', 'Thursday', 'Friday'];

const date = new Date();

const getDate = date.getDate();

const getDay = date.getDay();
const getDayName = day[getDay + 1];

const getMonth = date.getMonth();
const getMonthName = month[getMonth];

const getYear = date.getFullYear();

document.querySelector('.month-name').innerHTML = getMonthName;

document.querySelector('.day-name').innerHTML = getDayName;

document.querySelector('.day-number').innerHTML = getDate;

document.querySelector('.year-number').innerHTML = getYear;