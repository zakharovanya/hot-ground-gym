import './popup.component.scss'

const openPopup = document.querySelectorAll('.open-popup');
const closePopup = document.querySelector('.close-popup');
const getPopup = document.getElementById('popup');

for (let i = 0; i < openPopup.length; i++) {
  openPopup[i].onclick = () => {
    getPopup.classList.add('popup-visible');
  };
}

closePopup.onclick = () => {
  window.setTimeout(function () {
    getPopup.classList.remove('popup-visible');
  }, 300);
};