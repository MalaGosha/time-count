const elDate = document.querySelector("#elDate");
const elTime = document.querySelector("#elTime");



function twoNumbers(i) {
  return `${i}`.padStart(2, "0");
}


function showTextTime() {
  const currentTime = new Date();
  const days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];

  const textDate = `${twoNumbers(currentTime.getDate())} . ${twoNumbers((currentTime.getMonth() + 1))} . ${currentTime.getFullYear()} (${days[currentTime.getDay()]})`;
  const textTime = `${twoNumbers(currentTime.getHours())} : ${twoNumbers(currentTime.getMinutes())} : ${twoNumbers(currentTime.getSeconds())}`;

  elDate.innerHTML = textDate;
  elTime.innerHTML = textTime;


  window.requestAnimationFrame(showTextTime);
}

window.requestAnimationFrame(showTextTime);

