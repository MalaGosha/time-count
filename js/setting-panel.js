const settings = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');

const eventName = document.querySelector('#event-name');
const eventDay = document.querySelector('#event-day');
const eventMonth = document.querySelector('#event-month');
const eventYear = document.querySelector('#event-year');
const eventImage = document.querySelector('#event-image');

const saveBtn = document.querySelector('.save');

let root = document.documentElement;


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









settingsBtn.addEventListener('click', showSettings);




