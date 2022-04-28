import { randomInt } from './modules/random.mjs';

const $notifications = document.querySelector('[data-js="notification"]');

const notifications = randomInt();

$notifications.textContent = `${notifications >= 100 ? '+99' : notifications}`;
