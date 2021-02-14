const root = document.querySelector('html');
const burger = document.querySelector('#burger');
const more_options = document.querySelector('#more_options');
const more_options_menu = document.querySelector('#more_options_menu');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    more_options_menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
    more_options_menu.classList.add('hidden');
  }
})

more_options.addEventListener('click', () => {
  if (more_options_menu.classList.contains('hidden')) {
    more_options_menu.classList.remove('hidden');
  } else {
    more_options_menu.classList.add('hidden');
  }
})