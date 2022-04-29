import Repository from './modules/repository.mjs';

const THEME_COLOR_KEY = '@TwitterClone/THEME_BACKGROUND';
const THEME_BACKGROUND_KEY = '@TwitterClone/THEME_COLOR';

const $themeModal = document.querySelector('[theme-modal]');
const $openModalButton = document.querySelector('[open-modal-button]');
const $closeModalButton = document.querySelector('[close-modal-button]');

const $colorButtons = [...$themeModal.querySelectorAll('[color-select]')];
const $backgroundButtons = [...$themeModal.querySelectorAll('[background-select]')];

function selectButton($buttons, $element) {
  $buttons.forEach(($button) => $button.classList.remove('selected'));
  $element.classList.add('selected');
}

function openModal() {
  $themeModal.classList.add('visible');
}

function closeModal() {
  $themeModal.classList.remove('visible');
}

function setupThemeBackground($element) {
  const colors = $element.getAttribute('background-select');

  if (colors) {
    const backgroundName = $element.getAttribute('data-theme-background-stored');

    selectButton($backgroundButtons, $element);

    const [background, color, feedColor, hoverColor, borderColor] = colors.split(', ');

    document.documentElement.style.setProperty('--background-color', background);
    document.documentElement.style.setProperty('--text-color', color);
    document.documentElement.style.setProperty('--background-second-color', feedColor);
    document.documentElement.style.setProperty('--item-hover-color', hoverColor);
    document.documentElement.style.setProperty('--border-color', borderColor);

    Repository.save(THEME_BACKGROUND_KEY, backgroundName);
  }
}

function loadBackgroundTheme() {
  const theme = Repository.get(THEME_BACKGROUND_KEY);

  if (theme) {
    const $themeBackground = $backgroundButtons
      .find(($element) => $element.getAttribute('data-theme-background-stored') === theme);

    setupThemeBackground($themeBackground);
  }
}

function setupThemeColor($element) {
  const color = $element.getAttribute('color-select');

  if (color) {
    const colorName = $element.getAttribute('data-theme-color-stored');

    selectButton($colorButtons, $element);

    document.documentElement.style.setProperty('--principal-color', color);
    document.documentElement.style.setProperty('--principal-transparent-color', `${color}25`);

    Repository.save(THEME_COLOR_KEY, colorName);
  }

}

function loadThemeColor() {
  const colorName = Repository.get(THEME_COLOR_KEY);

  if (colorName) {
    const $themeColor = $colorButtons
      .find(($element) => $element.getAttribute('data-theme-color-stored') === colorName);

    setupThemeColor($themeColor);
  }
}

function loadTheme() {
  loadThemeColor();
  loadBackgroundTheme();
}

$colorButtons.forEach(($button) => {
  $button.addEventListener('click', ({ target }) => setupThemeColor(target));
});

$backgroundButtons.forEach(($button) => {
  $button.addEventListener('click', ({ target }) => setupThemeBackground(target));
});

$openModalButton.addEventListener('click', openModal);

$closeModalButton.addEventListener('click', closeModal);

$themeModal.addEventListener('click', ({ target }) => {
  if (target === $themeModal) {
    closeModal()
  }
});

loadTheme();
