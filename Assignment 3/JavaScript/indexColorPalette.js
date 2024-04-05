document.addEventListener('DOMContentLoaded', initializeColor);

// Event listeners to toggle color schemes
document.getElementById('candy').addEventListener('click', function() {
  redEnabled = true;
  sessionStorage.setItem('redEnabled', JSON.stringify(redEnabled));
  blueEnabled = false;
  sessionStorage.setItem('blueEnabled', JSON.stringify(blueEnabled));
  greenEnabled = false;
  sessionStorage.setItem('greenEnabled', JSON.stringify(greenEnabled));
  alert("Applying Cotton Candy Palette...")
  applyColor();
});

document.getElementById('seaside').addEventListener('click', function() {
  blueEnabled = true;
  sessionStorage.setItem('blueEnabled', JSON.stringify(blueEnabled));
  redEnabled = false;
  sessionStorage.setItem('redEnabled', JSON.stringify(redEnabled));
  greenEnabled = false;
  sessionStorage.setItem('greenEnabled', JSON.stringify(greenEnabled));
  alert("Applying Seaside Seranade Palette...")
  applyColor();
});

document.getElementById('forest').addEventListener('click', function() {
greenEnabled = true;
sessionStorage.setItem('greenEnabled', JSON.stringify(greenEnabled));
redEnabled = false;
sessionStorage.setItem('redEnabled', JSON.stringify(redEnabled));
blueEnabled = false;
sessionStorage.setItem('blueEnabled', JSON.stringify(blueEnabled));
alert("Applying Forest Folly Palette...")
applyColor();
});


// Finds the color that was last set
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



