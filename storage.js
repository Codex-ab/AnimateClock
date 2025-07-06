// storage.js (ES Module)

const keys = {
  faceColor: 'faceColor',
  borderColor: 'borderColor',
  lineColor: 'lineColor',
  largeHandColor: 'largeHandColor',
  secondHandColor: 'secondHandColor',
};

export function saveColorsToLocalStorage(colorElements) {
  for (const key in keys) {
    localStorage.setItem(keys[key], colorElements[key].value);
  }
}

export function loadColorsFromLocalStorage(colorElements) {
  for (const key in keys) {
    const value = localStorage.getItem(keys[key]);
    if (value) colorElements[key].value = value;
  }
}

export function clearColorsFromLocalStorage() {
  Object.values(keys).forEach((key) => localStorage.removeItem(key));
  location.reload(); // Reset to default
}
