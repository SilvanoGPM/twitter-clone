const $themeModal = document.querySelector('[theme-modal]');
const $openModalButton = document.querySelector('[open-modal-button]');
const $closeModalButton = document.querySelector('[close-modal-button]');
const $themeModalContent = $themeModal.querySelector('[theme-modal-content]');

const $colorButtons = $themeModal.querySelectorAll('[color-select]');
const $backgroundButtons = $themeModal.querySelectorAll('[background-select]');

function clearButtons($buttons) {
  $buttons.forEach(($button) => $button.classList.remove('selected'));
}

function openModal() {
  $themeModal.classList.add('visible');
}

function closeModal() {
  $themeModal.classList.remove('visible');
}

$colorButtons.forEach(($button) => {
  $button.addEventListener('click', ({ target }) => {
    clearButtons($colorButtons);

    const color = target.getAttribute('color-select');
    target.classList.add('selected');
    document.documentElement.style.setProperty('--principal-color', color);
    document.documentElement.style.setProperty('--principal-transparent-color', `${color}25`);
  });
});

$backgroundButtons.forEach(($button) => {
  $button.addEventListener('click', ({ target }) => {
    clearButtons($backgroundButtons);

    const [background, color, feedColor, hoverColor, borderColor] = target.getAttribute('background-select').split(', ');

    target.classList.add('selected');

    console.log({ x: [background, color, feedColor, hoverColor, borderColor] });

    document.documentElement.style.setProperty('--background-color', background);
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--background-second-color', feedColor);
    document.documentElement.style.setProperty('--item-hover-color', hoverColor);
    document.documentElement.style.setProperty('--border-color', borderColor);
  });
});

$openModalButton.addEventListener('click', openModal);

$closeModalButton.addEventListener('click', closeModal);

$themeModal.addEventListener('click', ({ target }) => {
  if (target === $themeModal) {
    closeModal()
  }
});
