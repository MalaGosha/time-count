const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');

const setTime = () => {
  const currentTime = new Date();
  const result = usersTime - currentTime;

  const days = Math.floor(result/1000/60/60/24);
  const hours = Math.floor(result/1000/60/60) %24;
  const minutes = Math.floor(result/1000/60) %60;
  const seconds = Math.floor(result/1000) %60;

  daysCount.textContent = days;
  hoursCount.textContent = hours;
  minutesCount.textContent = minutes;
  secondsCount.textContent = seconds;
}

setInterval(setTime, 1000);
