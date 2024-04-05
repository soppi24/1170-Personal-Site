document.addEventListener('DOMContentLoaded', initializeColor);

// Sets color palette
function setColorPalette(color) {;
  if (color === 'red') {
    const root = document.documentElement;
    root.style.setProperty('--main-color', '#433232')
    root.style.setProperty('--second-color', '#d07c7c')
    const mainImage = document.getElementById('mainImage');
    mainImage.src = '../Pictures/bearBackgroundRed.png'
    const mainImageBanner = document.getElementById('mainImageBanner');
    mainImageBanner.src = '../Pictures/bearBannerRed.png'
  } else if (color === 'green') {
    const root = document.documentElement;
    root.style.setProperty('--main-color', '#354433')
    root.style.setProperty('--second-color', '#CBD07C')
    const mainImage = document.getElementById('mainImage');
    mainImage.src = '../Pictures/bearBackgroundGreen.png'
    const mainImageBanner = document.getElementById('mainImageBanner');
    mainImageBanner.src = '../Pictures/bearBannerGreen.png'
  } else if (color === 'blue') {
    const root = document.documentElement;
    root.style.setProperty('--main-color', '#324343')
    root.style.setProperty('--second-color', '#7cbbd0')
    const mainImage = document.getElementById('mainImage');
    mainImage.src = '../Pictures/bearBackgroundBlue.png'
    const mainImageBanner = document.getElementById('mainImageBanner');
    mainImageBanner.src = '../Pictures/bearBannerBlue.png'
  }
}

//Finds the color that was last set
function initializeColor() {
    const storedRed = sessionStorage.getItem('redEnabled');
    if (storedRed !== null) {
        redEnabled = JSON.parse(storedRed);
    }

    const storedBlue = sessionStorage.getItem('blueEnabled');
    if (storedBlue !== null) {
        blueEnabled = JSON.parse(storedBlue);
    }

    const storedGreen = sessionStorage.getItem('greenEnabled');
    if (storedGreen !== null) {
        greenEnabled = JSON.parse(storedGreen);
    }

    applyColor();
}

// Applies color to site
function applyColor() {
    if (redEnabled) {
        setColorPalette('red')
    } else if (blueEnabled) {
        setColorPalette('blue')
    } else if (greenEnabled) {
      setColorPalette('green')
    }
}





