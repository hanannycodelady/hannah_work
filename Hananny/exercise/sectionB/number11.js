const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const date = new Date();
const day = days[date.getDay()];
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const amOrPm = hours < 12 ? "AM" : "PM";
const formattedHours = hours % 12 || 12;
const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

console.log(`Today is : ${day}.`);
console.log(`Current time is : ${formattedHours} ${amOrPm} : ${formattedMinutes} : ${formattedSeconds}.`);