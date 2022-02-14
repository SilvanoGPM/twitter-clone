const $notifications = document.querySelector('[data-js="notification"]');

function randomInt() {
  return Math.floor(Math.random() * 100) + 1;
}

$notifications.textContent = randomInt();
