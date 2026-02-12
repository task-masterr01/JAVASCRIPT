// const now = new Date();
// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());
// console.log(now.toLocaleString());

// //gives result according to local time
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getMonth());
// console.log(now.getFullYear());
// console.log(now.getMinutes());
// console.log(now.getSeconds());

// // days 1 2 ... 6
// //month 0 1 2 ... 11
//                     //format: year month day minute second milisecond
// const currentTime = new Date(2026 , 1, 13 , 12 , 30 , 45 , 96);
// console.log(currentTime);


const now = Date.now()
console.log(now);
const dates = new Date(now);
console.log(dates.toString());
