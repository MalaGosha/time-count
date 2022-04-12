const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const imageSection = document.querySelector('.image-section');
const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');
const eventSpan = document.querySelector('.event');
const saveBtn = document.querySelector('.save');

let root = document.documentElement;
let usersTime;



const showSettings = () => {
  settings.classList.toggle('active');
  if (settings.classList.toggle(true)){
    root.style.setProperty('margin-left', '-500px');
    root.style.setProperty('transition', '1s');
  } else {
    root.style.setProperty('margin-left', '0');
    root.style.setProperty('transition', '1s');
  }
}


const appUpdate = () => {
  eventSpan.textContent = eventName.value;
  usersTime = new Date(`${eventDay.value} ${eventMonth.value} ${eventYear.value}`);
  if(eventImage.value === 'default.jpg'){
    imageSection.style.backgroundImage = eventImage.value;
  } else {
    imageSection.style.backgroundImage = `url(${eventImage.value})`
  }

  setTime();
}



settingsBtn.addEventListener('click', showSettings);
saveBtn.addEventListener('click', appUpdate);

appUpdate();





