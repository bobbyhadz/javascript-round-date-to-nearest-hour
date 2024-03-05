// EXAMPLE 1 - Round a Date to the Nearest Hour using JavaScript

function roundToNearestHour(date) {
  date.setMinutes(date.getMinutes() + 30);
  date.setMinutes(0, 0, 0);

  return date;
}

// 👇️ Sun Jan 16 2022 14:00:00 (minutes are 30)
console.log(
  roundToNearestHour(new Date(2022, 0, 16, 13, 30, 0)),
);

// 👇️ Sun Jan 16 2022 13:00:00 (minutes are 29)
console.log(
  roundToNearestHour(new Date(2022, 0, 16, 13, 29, 0)),
);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Round a Date to the nearest 30 Minutes using JavaScript

// function roundToNearest30(date = new Date()) {
//   const minutes = 30;
//   const ms = 1000 * 60 * minutes;

//   // 👇️ replace Math.round with Math.ceil to always round UP
//   return new Date(Math.round(date.getTime() / ms) * ms);
// }

// // 👇️ Mon Jan 24 2022 06:00:00 (minutes are 14)
// console.log(roundToNearest30(new Date(2022, 0, 24, 6, 14, 0)));

// // 👇️ Mon Jan 24 2022 06:30:00 (minutes are 15)
// console.log(roundToNearest30(new Date(2022, 0, 24, 6, 15, 0)));

// ------------------------------------------------------------------

// // EXAMPLE 3 - Round time to the nearest 15 Minutes using JavaScript

// function roundToNearest15(date = new Date()) {
//   const minutes = 15;
//   const ms = 1000 * 60 * minutes;

//   // 👇️ replace Math.round with Math.ceil to always round UP
//   return new Date(Math.round(date.getTime() / ms) * ms);
// }

// // 👇️ Mon Jan 24 2022 09:00:00 (minutes are 7)
// console.log(roundToNearest15(new Date(2022, 0, 24, 9, 7, 0)));

// // 👇️ Mon Jan 24 2022 09:15:00 (minutes are 8)
// console.log(roundToNearest15(new Date(2022, 0, 24, 9, 8, 0)));

// ------------------------------------------------------------------

// // EXAMPLE 4 - Round a Date to the nearest 5 Minutes using JavaScript

// function roundToNearest5(date = new Date()) {
//   const minutes = 5;
//   const ms = 1000 * 60 * minutes;

//   // 👇️ replace Math.round with Math.ceil to always round UP
//   return new Date(Math.round(date.getTime() / ms) * ms);
// }

// // 👇️ Sun Jan 16 2022 08:15:00 (minutes are 13)
// console.log(roundToNearest5(new Date(2022, 0, 16, 8, 13, 0)));

// // 👇️ Sun Jan 16 2022 08:10:00 (minutes are 12)
// console.log(roundToNearest5(new Date(2022, 0, 16, 8, 12, 0)));

// ------------------------------------------------------------------

// // EXAMPLE 5 - Round time to the nearest Minute using JavaScript

// function roundToNearestMinute(date = new Date()) {
//   const minutes = 1;
//   const ms = 1000 * 60 * minutes;

//   // 👇️ replace Math.round with Math.ceil to always round UP
//   return new Date(Math.round(date.getTime() / ms) * ms);
// }

// // 👇️ Thu Jan 13 2022 08:30:00 (seconds are 29)
// console.log(
//   roundToNearestMinute(new Date(2022, 0, 13, 8, 30, 29)),
// );

// // 👇️ Thu Jan 13 2022 08:31:00 (minutes are 30)
// console.log(
//   roundToNearestMinute(new Date(2022, 0, 13, 8, 30, 30)),
// );
