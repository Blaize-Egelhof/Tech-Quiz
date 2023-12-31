# Tech Quiz

Welcome to my first-ever online quiz application built using JavaScript! My Interactive quiz app is designed around the idea of providing a simple yet graphically pleasing Quiz app to my users. As a remote onsite technician, I believe that continuously testing your IT knowledge will greatly improve your overall regardless of your speciality in the IT world, this quiz offers a fun and engaging way to explore and expand your understanding of IT concepts, so please enjoy! 

![Responsive Mockup](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/am-i-responsive-pic.png)

## Features 

In the section below I will highlight each section of my website and explain its purpose, as well as why I have decided to implement each section and feature! 

### Landing Page

-Welcome to my landing page, where simplicity and functionality reign supreme, foregoing flashy graphics and animations. The site boasts just three main elements, promptly revealed upon loading for an intuitive user experience. 

![Landing Page](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/landing-page.png)
- __Title Text__
-My title text is centre aligned and displayed in white, which creates a contrast against the dark grey background, I have chosen to underline the entire title text to create deeper contrast making it almost impossible to miss! This title states very simply of what is to come!
![Title Text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/title-text.png)
- __Start Quiz Button__
-Now, your attention will be drawn to our thoughtfully placed "Start Quiz" button, also in white, inviting you to explore the quiz. This button serves as the sole interactive element on the landing page, this button is coloured white with a black text colour to stand out from the grey background, ensuring that all users no matter what can fully understand what happens when the button is pressed.
![start button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/startquizbutton.png)
-__Footer Text__
-My Footer's text, which is also centred and coloured in white again to provide contrast to its respective grey background, this text displays important information to new users. Once you're ready to begin the quiz and press the start button, this footer is temporarily made invisible to eliminate any excess screen pollution.
![footer text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/footer.png)

### Information Box 

-Welcome to the Info Box!, After a user selects Start Quiz they will be greeted by a clean, simplistic box containing a header, a list of rules and 2 buttons, again adhering to the theme of simplicity and functionality over animations and graphics, this box has been carefully coloured and placed so that the users can't miss it once the start-quiz button on the landing page has been pressed.
![Info Box](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infobox.png)
- __Info Box Header__
-When the info box is called users are met with a dark underlined header text which provides substantial contrast to the info box's white background and provides visual clarity to all users, this heading serves as the main focal point for this layer.  
![Info Box Header](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxheader.png)
- __Info Box Rules__
-After a user has glanced at the main focal point (header) users eyes are directed below the header, revealing a set of rules users need to be made aware of upon starting the quiz. This text is coloured in black to again add contrast and clarity while present on the info box.
![Info Box rules](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxtext.png)
- __Info Box Buttons__
-After a user has glanced over the rules, naturally, they will glance over the infobox's "footer," revealing 2 buttons. These buttons have been given a black border and grey background to provide adequate contrast against the info box's colour palette. Additionally, each button has been given inner text.
-The Exit Quiz button, on click, simply reveals the landing page while hiding the info box.
-The Start Quiz button, on click, hides the info box and reveals the actual Quiz box, populating the first set of fields for question 1.
![Info Box Button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.png)

### Quiz Box

Welcome to the quiz screen! , a simple yet functional quiz interface, which provides a clean UI to accommodate all users. This quiz screen is made up of 6 key elements which are re-used for every new quiz question, keeping the transition from 1 question to another easy to follow, this entire container uses a white background with black text to provide contrast to the background grey colour all to accommodate my theme of simplicity!
![Quiz Screen](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizscreen.png)
- __Quiz Box Title__
Glancing to the very top of my Quiz box I have included a black underlined heading, this heading doesn't specifically serve a purpose to the end user, however, it reminds the user as to what the quiz topics will be about IE Tech-related and provides a way for me as the developer to mark this UI as my own. 
![Quiz Screen Titel](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizboxtitel.png)
- __Quiz Box Timer__
Located on the very right of the Titel text there is static-black text with a container which displays the time remaining for the current quiz, this timer serves as a deadline for each question to be answered and will reveal the answers automatically to the user when the timer reaches 0, this small addition to my quiz creates a sense of urgency when it comes to answering questions which is the whole reason for my quiz, which is to answer a set range of questions within a given time parameter to test how well you know your work!  
![Quiz Screen Timer](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizboxtimer.png)
- __Quiz Box Question__
Written in the biggest font-size on in the container, black text is given to the user which asks a specific given question, this text has been carefully placed in the centre of the Quiz Box along with the given options to the question when the user hits the next button this objects .innertext is updated to the next question.
![Quiz Screen Main Question](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizboxquestion.png)
- __Quiz Box Option List__
Directly below the question, users will find 4 buttons carefully stacked horizontally on top of each other, each button has a grey background with black inner text by default to make them easy for users to read off of. Once a user has selected a given option button all buttons inherit specific properties to display visually to users as to which option box was the correct option and which is not, in my below images these options have already inherited said properties to display visually to users which options are right and which aren't.  
![Quiz Screen Option List](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizboxoptions.png)
- __Quiz Box User Score Tally__
In the bottom left corner of the Quiz Box are 2 number values, these number values are coloured green for each given answer that is correct and red for each answer given that is wrong, additionally if a user has not answered by the time the timer has reached 0, the red (incorrect) text is incremented by 1. All inputs given by the user per quiz can only increment the green(correct) text or red (incorrect) text by 1. These text values serve as visual feedback for users so that they may keep track of how many answers they have gotten right or wrong as they work through the quiz.
![Quiz Tally](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizboxfooter.png)
- __Quiz Box Next Button__
In the bottom right corner of my Quiz box is a button which is coloured black with white inner text, this button is the only element in my quiz application to take on a different background colour, I have chosen to do this as the next button is the most important button in my quiz which allows my Javascript to work correctly, the colour choice was chosen so that once the button appears for users, its very difficult for said users to miss it, without these colours users may ignore the pop-up and as a result, won't be able to proceed to the next question.
Initially, this next button is hidden from all users, I have chosen this approach to ensure that only once the timer has run out OR if a user has inputted an answer to a question will this button reveal itself to users, once the button is clicked again however, the button automatically hides itself to prepare for the next question, with this defensive design in place I can manipulate how users answer questions.
![Quiz Screen Next Button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/quizboxfooter.png)

### Quiz Result Box

-Welcome to my Result Box, a UI which is only revealed to users once they have answered all questions given in the quiz, this container is made up of 3 main sections each section horizontally stacked on top of each other, the emoji, text and button sections.
-This result box has a white background with all inner text coloured black to contrast with the grey background.
-In addition, this result box will provide users with different text and emojis depending on how well they did in the quiz, providing direct feedback to users who complete the quiz.
![Quiz Result Box](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/resultbox.png)
- __Result Box Emojie__
This small section contains and displays 1 of 3 different emojis depending on how well the user did on the quiz, this provides additional visual feedback to users after they have completed the quiz, the below emoji in the attached image specifically is for when a user scored 3 or less questions correct
![Quiz Result Box Emojie](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/emojiesection.png)
- __Result Box Text__
Below the emoji section is a text feedback section which is given to users, again depending on how well users do in the quiz the text box will display 1 of 3 different template literals, with the inclusion of a basic emoji these 2 sections together provide users with enough feedback to fully understand how well they did on the quiz given.
Both sections occupy a large majority of centred space within the Result box to draw users to the inner contents of the Result box, to again make it easy for users to keep notice
![Quiz Result Text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/resultboxtext.png)
- __Result Box Buttons__
Below the result text box are 2 large buttons which are coloured grey with black text, I have chosen a grey background over a white background for these buttons as the grey sharply contrasts against the result box's white background. 
Both buttons fundamentally do the same thing, which refreshes the browser allowing users to reply the quiz. 
![Quiz Result Box Buttons](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/resultboxbuttons.png)

### Additional

-The choice of a simple and bland colour theme in the code serves a specific purpose: readability and clarity. By using muted colors and avoiding vibrant or distracting elements, my Quiz dampens any form of visual noise that might otherwise hinder the user's focus during the Quiz.

### Features Left to Implement

-A basic form that users can fill in to create their own set of Quiz Questions. 

-A basic form for users to give feedback to me as the developer to improve my web application.

## Testing 
**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
index.html	| Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
index.html	| Size to 1920px using Chrome Dev Tools | Elements look good @ 1920px | Works as expected
index.html	| Test Using WAVE | Pass all checks with 0 error or contrast errors | find results below table
index.html	| Test Using Lighhouse | Pass all checkboxes with above 90% | works as expected , find results below table
index.html	| Nav buttons |That each nav element takes me to the correct page site page | Works as expected
index.html  | Start Quiz Button | Reveal Rules page and hide Quiz Page | Works as expected
index.html  | Exit Quiz Button | Hides Rules page and reveals Quiz Page | Works as expected
index.html  | Continue Quiz Button | Hides Quiz Rules page and reveals Quiz Box | Works as expected
index.html  | Quiz Option Buttons | Provides visual feedback to users to tell if they are correct or not , while revealing the next Button to reveal next Quiz Page| Works as expected
index.html  | Next Button | Clears previous Quiz Information and populates the existing fields with the new question | Works as expected
index.html  | LAST Next Button | Hides Quiz Box and reveals Result Box | Works as expected
index.html  | Reply Quiz Button | Restarts user browser to restart Quiz  | Works as expected
index.html  | Quit Quiz Button | Restarts user browser to restart Quiz  | Works as expected

-Lighthouse test results 
[index.html](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/html-lighthouse.png) 

-Wave test results 
[wave](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/waveresults.png)
-I have also tested my website and have confirmed that it works on both Chrome , Safari and FireFox browsers.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator] , upon scanning the index.html file present. 

  [Index](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/htmlvalidator.png)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator] , upon scanning each .css file present.

  [Style](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/cssvalidator.png)

- Javascript 
  - No errors were found when passing through the official [(JSHint) validator] , upon scanning each .css file present.

  -[Javascript](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/jsvalidator.png)

### Unfixed Bugs

No definitive bugs present  

## Deployment

How I deployed this site using Github Pages

- The site was deployed to GitHub Pages. The steps to deploy are as follows:
  - I started a repository using GitHub and cloned it to CodeAnywhere to use as an IDE.
  - Then, I used "git add ." to add my current changes to the workspace.
  - I used "git commit -m" to commit these changes officially to my workspace.
  - Next, I used "git push" to push my changes to my GitHub repository and update the official copies of my code.
  - After my changes were pushed:
  - In the GitHub repository, I navigated to the Settings tab.
  - From the Source section dropdown menu, I selected the Master Branch.
  - Once the master branch was selected, my page was automatically refreshed, and a detailed ribbon display indicated the successful deployment.

How You can clone this repository 
 - Go to your repository's Github page and find the "Clone" button.
 - Copy the URL provided in the dropdown.
 - Open your terminal or command prompt on your local machine.
 - Navigate to the directory where you want to store the cloned repo using the 'cd' command.
 - Type 'git clone [paste the URL]' and press Enter. This will download the repository to your local machine.
 - Once the cloning is complete, navigate into the cloned directory using 'cd [repository folder name]'.
 - Now, you can make changes to the project, add new features, or use it as a starting point for your own development.
 - To keep your repo up to date with the original, use 'git pull' whenever you see updates on the original repository.

The live link can be found here - https://blaize-egelhof.github.io/Tech-Quiz/

## Credits 

### Content 

- The icons in the result box were taken from [Font Awesome](https://fontawesome.com/)
- The favicon logo was taken from [icons8](https://icons8.com/icons/set/tech)
- Inspiration for the quiz design was taken from this walkthrough [CodeNow] (https://www.youtube.com/watch?v=3fbU4z7fPe4)
- Font types was taken from Google Fonts [GoogleFonts](https://fonts.google.com/)

### Media

Globally applicable images : 
-None Present