const menuToggle = document.querySelector('.toggle');
const menuItems = document.querySelector('.menu-items');
const navigation = document.querySelector('.Navigation');

let menuIsOpen = false;
menuToggle.addEventListener('click', (event) => {
  // do stuff
  if (menuIsOpen) {
    menuIsOpen = false;
    menuItems.style.display = 'none';
    navigation.style.height = '50px';
  } else {
    menuIsOpen = true;
    menuItems.style.display = 'block';
    navigation.style.height = '105px';
  }
});