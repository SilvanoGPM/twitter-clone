const $themeModal = document.querySelector('[theme-modal]');
const $openModalButton = document.querySelector('[open-modal-button]');
const $closeModalButton = document.querySelector('[close-modal-button]');
const $themeModalContent = $themeModal.querySelector('[theme-modal-content]');

const $colorButtons = $themeModal.querySelectorAll('[color-select]');
const $backgroundButtons = $themeModal.querySelectorAll('[background-select]');

function selectButton($buttons, target) {
  $buttons.forEach(($button) => $button.classList.remove('selected'));
  target.classList.add('selected');
}

function openModal() {
  $themeModal.classList.add('visible');
}

function closeModal() {
  $themeModal.classList.remove('visible');
}

$colorButtons.forEach(($button) => {
  $button.addEventListener('click', ({ target }) => {
    const color = target.getAttribute('color-select');

    if (color) {
      selectButton($colorButtons, target);

      document.documentElement.style.setProperty('--principal-color', color);
      document.documentElement.style.setProperty('--principal-transparent-color', `${color}25`);
    }

  });
});

$backgroundButtons.forEach(($button) => {
  $button.addEventListener('click', ({ target }) => {
    const colors = target.getAttribute('background-select');

    if (colors) {
      selectButton($backgroundButtons, target);

      const [background, color, feedColor, hoverColor, borderColor] = colors.split(', ');

      document.documentElement.style.setProperty('--background-color', background);
      document.documentElement.style.setProperty('--text-color', color);
      document.documentElement.style.setProperty('--background-second-color', feedColor);
      document.documentElement.style.setProperty('--item-hover-color', hoverColor);
      document.documentElement.style.setProperty('--border-color', borderColor);
    }
  });
});

$openModalButton.addEventListener('click', openModal);

$closeModalButton.addEventListener('click', closeModal);

$themeModal.addEventListener('click', ({ target }) => {
  if (target === $themeModal) {
    closeModal()
  }
});
