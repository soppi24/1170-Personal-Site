# CheckList Guide

- There's a notifcation (an alert) that triggers when any of the color palette's are selected, to let the user know they're about to change the color scheme of the site.

- There are five main event handlers in the code, two of which respond to  an interaction that's different than the implemented notification (The other three are for the color palette).
  - In the JS file labbeled 'colorPalette', there's this, which triggers right after the DOM content has loaded:

```
document.addEventListener('DOMContentLoaded', initializeFeatureToggles);
```
- The second event handler can be found in the 'about.js' file, which is the submit button for the contact form, as to help validate the form BEFORE the information is sent over the internet.

```
submitButton.addEventListener("click", function validate(event) {
    //The implemented code is too long to put here, but exists in the file
  });
```


- Each JS file contains a conditional, mainly a set of if else statements. For example, in 'about.js', there's code that validates the form information, and checks for specifc issues.

```
submitButton.addEventListener("click", function validate(event) {
  //Some code above
    if (!name || !email || !phone || !topicOfInterest || !boxMessage) {
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Please fill in all fields";

    } else if (!pattern.test(email)){
      message.style.backgroundColor = "#ff6961";
      message.style.color = "white";
      message.innerHTML = "Email is not a valid one";

    }
 //Some more code below
```
- The site posseses 3 color schemes; Cotton Candy (Red), Seaside Serenade (Blue) and Forest Folly (Green). They were given specifc names, mainly to sound more whimicals and match the feel of the site. But in the js code (that is, 'colorPalette.js' and 'indexColorPalette.js') they are noted as 'red, green and blue' for labelling simplicity.
  - There are 3 buttons instead of 2, as the last button is to go back to the orignal state of the site. Hence the main focus is on the 'Cotton Candy theme' and 'Seaside Serenade theme' buttons.
  - Here are the color palette's for each of the themes
    - Cotton Candy (Red)
      - Main (For Backgrounds): #433232
      - Secondary (For Headers and Accents): #d07c7c
      - Generic white and black for text: #000000 and #FFFFFF
    - Seaside Serenade (Blue)
      - Main (For Backgrounds): #324343
      - Secondary (For Headers and Accents): #7cbbd0
      - Generic white and black for text: #000000 and #FFFFFF
    - Forest Folly (Green)
      - Main (For Backgrounds): #354433
      - Secondary (For Headers and Accents):#CBD07C
      - Generic white and black for text: #000000 and #FFFFFF
  - As noted in the accessibility report, the color changes does not affect the accessibility of the site, remainimg readable and accessibile

- The form in the 'about.html' page (connected to the 'about.js' page) fufills the requirements with 5 required questions (inspected and validated by 'about.js'), with the 3 input types of text, radio buttons, and a drop down menu. It also possess a textarea, used to type in a message. All input are checked with conditionals, with both the 'phone' and 'email' being pattern matched; The first requiring a set of ONLY numbers with a length of 10 or 11, and the latter requiring an '@' symbol.
```
//Some code before       
<div class="form-container">
        <form id="contact-form" action="#">
          <fieldset>
            <legend id="legend">Fill out the form below</legend>

            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" /><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" /> <br><br>
            
            <label for="phone">Phone Number (No dashes please):</label>
            <input type="tel" id="phone" name="phone" /><br><br>

            <p>Please select your affiliation:</p>
            <input type="radio" id="option1" name="affiliation" value="Corperate">
            <label for="option1">Corperate</label><br><br>
            <input type="radio" id="option2" name="affiliation" value="Individual">
            <label for="option2">Individual</label><br><br>
            <input type="radio" id="option3" name="affiliation" value="Other">
            <label for="option3">Other</label><br><br>
        
            <label for="topicOfInterest">Select a topic of interest</label>
            <select name="topicOfInterest" id="topicOfInterest">
              <option value=" ">Select</option>
              <option value="gameDesign">Game Design</option>
              <option value="conceptArt">Concept Art</option>
              <option value="gameNarrativeDesign">Game Narrative Design</option>
            </select><br><br>

            <label for="boxMessage">Message</label>
            <textarea id="boxMessage" name="message" rows="4" col="100"
              placeholder="Enter your text here..."></textarea>
  //Some more code after
```
#File Structure
Below outlines the code structure, including all relative paths. There a six main folders.

- Assignment3
  - HTML
      - HTML\about.html
      - HTML\game.html
      - HTML\index.html
      - HTML\portfolio.html
  - Styles
      - Styles\about.css
      - Styles\game.css
      - Styles\index.css
      - Styles\portfolio.css
  - Fonts
      - Fonts\cormorantGaramond.ttf (external source)
      - Fonts\higuenSerif.otf (external source)
  - JavaScript
      - JavaScript\indexColorPalette.js
      - JavaScript\about.js
      - JavaScript\colorPalette.js
  - Pictures
      - Pictures\bearBackgroundBlue.png
      - Pictures\bearBackgroundGreen.png
      - Pictures\bearBackgroundRed.png
      - Pictures\bearBannerBlue.png
      - Pictures\bearBannerGreen.png
      - Pictures\bearBannerRed.png
      - Pictures\bearFavicon.png (external source)
      - Pictures\bearFirst.png
      - Pictures\ben.png
      - Pictures\bobble.png
      - Pictures\charlotte.png
      - Pictures\gameshot.png
      - Pictures\historia.png
      - Pictures\me.png
      - Pictures\projects.png
      - Pictures\quinn.png
      - Pictures\space.png    
  - Videos
      - Videos\gameplay.mp4
  - Audio
      - Audio\pixelspace.mp3 (external source)

##Location of Assests
This refers to locations of pictures, video, audio and fonts (it's essentially those folders above). Each asset is in their respective folder, with the correct relative path that is called on by the html files above.
- Fonts
    - Fonts\cormorantGaramond.ttf (external source)
    - Fonts\higuenSerif.otf (external source)
- Pictures
    - Pictures\bearBackgroundBlue.png
    - Pictures\bearBackgroundGreen.png
    - Pictures\bearBackgroundRed.png
    - Pictures\bearBannerBlue.png
    - Pictures\bearBannerGreen.png
    - Pictures\bearBannerRed.png
    - Pictures\bearFavicon.png (external source)
    - Pictures\bearFirst.png
    - Pictures\ben.png
    - Pictures\bobble.png
    - Pictures\charlotte.png
    - Pictures\gameshot.png
    - Pictures\historia.png
    - Pictures\me.png
    - Pictures\projects.png
    - Pictures\quinn.png
    - Pictures\space.png    
- Videos
    - Videos\gameplay.mp4
- Audio
    - Audio\pixelspace.mp3 (external source)


# Extra Things to Note
- The site retains the color scheme across all its page using the 'session storage' concept. By using JSON.parse(), JSON.stringify, sessionStorage.setItem() and sessionStorage.getItem(), the site 'remembers' the last color palette that was set and implements it each time the user moves to a new page, or reloads the current page. Research was done to know how to implement this, and is cited below.
- The index.html page is the only way to set the colors, as it has the palette buttons (hence why it has a separate color palette JS page). This means the other pages, which share the same colorPalette.js file, need to know what color scheme was set in order to change to that palette. Thus, the session storage has to check the boolean values of the variables 'redEnabled', 'blueEnabled' and 'GreenEnabled' and based on which is set to 'true', sets the page to the required color.
- Any image, video etc. NOT labelled as 'external source' is of my creation
- The code has been taken and built-on from assignment 1 and 2
- The styling and JavaScript template for the submit button was taken from my 1170 Lab 5, as I really liked its sleek design



# Works Cited (from asignment 1 and 2)

[1] DomPizzie. n.d. A simple README.md template. GitHubGist. Retrieved February 9, 2024 from https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc

[2] JavaScript RegExp Reference. Retrieved April 5, 2024 from https://www.w3schools.com/jsref/jsref_obj_regexp.asp

[3] 2012. Pixelspace (Space is key 2 OST). Retrieved February 9, 2024 from https://www.youtube.com/watch?v=7ydkYqTH1rM

[4] 2021. Architectural Designer Creates a Pixel Art Town. Retrieved February 9, 2024 from https://www.youtube.com/watch?v=KMJbhee4xTk

[5] 2023. Window: sessionStorage property - Web APIs | MDN. Retrieved April 5, 2024 from https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

[6] n.d. brown bear v2 💌 | Винтажные логотипы, Винтажные плакаты дисней, Иконки. Pinterest. Retrieved February 9, 2024 from https://www.pinterest.ca/pin/2462974790409090/

[7] n.d 1170 Lab 5 (Css and JS code). Retrieved April 5, 2024 from 1170 Winter 2024 BrighSpace 

[8] n.d https://www.1001freefonts.com/



Note: Two fonts were imported  from the site: Cormorant Garamond and Higuen Elegant Serif