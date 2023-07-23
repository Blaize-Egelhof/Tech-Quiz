# Tech Quiz

Welcome to my first-ever online quiz application built using JavaScript! My Interactive quiz app is designed around the idea of providing a simple yet graphically pleasing Quiz app to my users . As a remote onsite technician , I believe that continuously testing your IT knowledge will greatly improve your overall regardless of your specialty in the IT world, this quiz offers a fun and engaging way to explore and expand your understanding of IT concepts, so please enjoy! 

![Responsive Mockup](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/am-i-responsive-pic.PNG)

## Features 

In the section below I will highlight each section of my website and explain its purpose , as well as why I have decided to implement each section and feature ! 

### Landing Page

-Welcome to my landing page, where simplicity and functionality reign supreme, foregoing flashy graphics and animations. The site boasts just three main elements, promptly revealed upon loading for an intuitive user experience. 

![Landing Page](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/landing-page.PNG)
- __Title Text__
-My title text, center aligned and displayed in white, which creates a contrast against the dark grey background, I have chosen to underline the entire title text  to create deeper contrast making it almost impossible to miss ! This title states very simply of what is to come !
![Title Text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/title-text.PNG)
- __Start Quiz Button__
-Now, your attention will be drawn to our thoughtfully placed "Start Quiz" button, also in white, inviting you to explore the quiz. This button serves as the sole interactive element on the landing page,this button is colored white with a black text color in order to stand out from the grey background, ensuring that all users no matter what can fully understand what happens when the button is pressed.
![start button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/start-quiz-button.PNG)
-__Footer Text__
-My Footer's text, which is also centered and colored in white again to provide contrast to its respective grey background, this text displays important information to new users. Once you're ready to begin the quiz and press the start button, this footer is temporarily made invisible to eliminate any excess screen pollution.
![footer text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/footer.PNG)

### Information Box 

-Welcome to the Info Box!,After a user selects Start Quiz they will be greated by a clean , simplistic box containing a header , list of rules and 2 buttons, again adhering to the theme of simplicity and functionality over animations and graphics, this box has been carefully colored and placed so that the users cant miss it once the start-quiz button on the landing page has been pressed! 
![Info Box](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infobox.PNG)
- __Info Box Header__
-When the info box is called users are met with a dark underlined header text which provides substansial contrast to the info-box's white background and provides visual clarity to all users , this heading serves as the main focal point for this layer. 
![Info Box Header](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxheader.PNG)
- __Info Box Rules__
-After a user has glanced at the main focal point (header) users eyes are directed below the header , revealing a set of rules users need to be made aware of upon starting the quiz. This text is colored in black to again add contrast and clarity while present on the info-box.
![Info Box rules](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxtext.PNG)
- __Info Box Buttons__
-After a user has glanced over the rules, naturally, they will glance over the infobox's "footer," revealing 2 buttons. These buttons have been given a black border and grey background to provide adequate contrast against the info box's color palette. Additionally, each button has been given inner text.
-The Exit Quiz button, on click, simply reveals the landing page while hiding the info box.
-The Start Quiz button, on click, hides the info box and reveals the actual Quiz box, populating the first set of fields for question 1.
![Info Box Button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)

### Quiz Box

Welcome to the quiz screen ! , a simple yet functionable quiz interface, which provides a clean UI to accomodate all users . This quiz screen is made up of 6 key elements which are re-used for every new quiz question , keeping the transition from 1 question to another easy to follow , this entire container uses a white background with black text in order to provide contrast to the background grey color all to accomadate my theme of simplicity !
![Quiz Screen](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Quiz Box Titel__
Glancing to the very top of my Quiz box I have included a black underlined heading , this heading doesnt specifically serve a purpose to the end user , however it reminds the user as to what the quiz topics will be about IE Tech related and provides a way for me as the developer to mark this UI as my own. 
![Quiz Screen Titel](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Quiz Box Timer__
Located on the very righ of the Titel text there is static-black text with a grey container which displays the time remaining for the current quiz , this timer serves as a deadline for each question to be answered and will reveal the answers automatically to the user when the timer reaches 0 , this small addition to my quiz creates a sense of urgency when it comes to answering questions which is the whole reason for my quiz , which is to answer a set range of questions within a given time parameter in order to test how well you know your work! 
![Quiz Screen Timer](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Quiz Box Question__
Written in the biggest font-size on in the container , a black text is given to the user which asks a specific given question, this text has been carefully placed in centere of the Quiz-Box along with the given options to the question, when the user hits the next button this objects .innertext is updated to the next question
![Quiz Screen Main Question](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Quiz Box Option List__
Directly below the question , users will find 4 buttons carefully stacked horizontally ontop of eachother , each button has a grey background with black innertext by default to make them easy for users to read off of. Once a user has selected a given option button all buttons inherit specific properties to display visually to users as to which option box was the correct option and which are not, in my below images these options have already inherited said properties to display visually to users which options are right and which arnt. 
![Quiz Screen Option List](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Quiz Box User Score Tally__
In the bottom left corner of the Quiz Box are 2 number values , these number values are colored green for each given answer that is correct and red for each answer given that is wrong , addionally if a user has not given an answer by the time the timer has reached 0 ,the red (incorrect) text is incremented by 1. All inputs given by the user per quiz can only increment the green(correct) text or red (incorrect) text by 1. These text values serve as visual feedback for users so that they may keep track of how many answers they have gotten right or wrong as they work through the quiz.
![Quiz screen tally](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Quiz Box Next Button__
In the bottom right corner of my Quiz box is a button which is colored black with white innertext , this button is the only element in my quiz application to take on a different background color , I have chosen to do this as the next button is the most important button in my quiz which allows my Javascript to work correctly, the color choice was chosen so that once the button appears for users , its very difficult for said users to miss it , without these colors users may ignore the pop-up and as a result wont be able to proceed to the next question.
Initially this next button is hidden to all users , I have chosen this approach to ensure that only once the timer has run out OR if a user has inputted an answer to a question will this button reveal itself to users, once the button is clicked again however , the button automatically hides itself to prepair for the next question, with this defensive design in place I can manipulate how users answer questions.
![Quiz Screen Next Button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)

### Quiz Result Box

-Welcome to my Result Box , a UI which is only revealed to users once they have answered all questions given in the quiz, this container is made up of 3 main sections each section horizontally stacked ontop of eachother , the emonjie,text and button sections.
-This result box has a white background with all innertext colored black in order to contrast with the grey background.
-In addion this result box will provide users with different text and emojies depending on how well they did in the quiz , providing direct feedback to users who complete the quiz.
![Quiz Result Box](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Result Box Emojie__
This small section contains and displays 1 of 3 different emojies depending on how well the user did on the quiz, this provides addional visual feedback to users after they have completed the quiz , the below emojie in the attached image specifically is for whena user scored 3 or less questions correct.
![Quiz Result Box Emojie](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Result Box Text__
Below the emojie section is a text feedback section which is given to users , again depending on how well users do in the quiz the text box will display 1 of 3 different template literals, with the inclusion of a basic emojie these 2 sections together provide users with enough feedback to fully understand how well they did on the quiz given.
Both sections occupy a large majority of centered space within the Result box in order draw users to the inner contents of the result box , to again make it easy for users to keep notice.
![Quiz Result Text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)
- __Result Box Buttons__
Below the result text box are 2 large buttons which are colored grey with black text, I have chosen a grey background over a white background for these buttons as the grey sharply contrasts against the result box's white background. 
Both buttons fundamentally do the same thing, which refreshes the browser allowing users to reply the quiz. 
![Quiz Result Box Buttons](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/infoboxbuttons.PNG)

### Features Left to Implement

-A basic users can fill in to create their own set of Quiz Questions. 
-A basic form for users to give feedback to me as the developer to improve my web application.

## Testing 
**TEST** | **ACTION** | **EXPECTATION** | **RESULT** 
----------|----------|----------|----------
index.html	| Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
index.html	| Size to 1920px using Chrome Dev Tools | Elements look good 1920px | Works as expected
index.html	| Test Using WAVE | Pass all checks with no errors| 7 Contrast errors found , chose to keep the errors for aestheic purposes and as the text contrast errors do not reduce visability
index.html	| Test Using Lighhouse | Pass all checkboxes with above 80% | performance @77% the rest works as expected , find results below table
index.html	| Nav buttons |That each nav element takes me to the correct page site page | Works as expected
sign-up-form.html | Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
sign-up-form.html | Size to 1920px using Chrome Dev Tools | Elements look good 1920px | Works as expected
sign-up-form.html | Click send button without data in form fields | Cannot submit form | Works as expected
sign-up-form.html | Nav buttons |That each nav element takes me to the correct page site page | Works as expected
sign-up-form.html | Click send button with all fields correctly filled in | Routes user to codeinstitute dump page | Works as expected
sign-up-form.html| Test Using WAVE | Pass all checks with no errors| works as expected
sign-up-form.html| Test Using Lighhouse | Pass all checkboxes with above 80% | works as expected , find results below table
login-form.html| Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
login-form.html| Size to 1920px using Chrome Dev Tools | Elements look good 1920px | Works as expected
login-form.html| Test Using WAVE | Pass all checks with no errors| works as expected
login-form.html| Test Using Lighhouse | Pass all checkboxes with above 80% | Works as expected , find results below table
login-form.html| Nav buttons |That each nav element takes me to the correct page site page | Works as expected
login-form.html| Click send button with all fields correctly filled in | Routes user to codeinstitute dump page | Works as expected
meet-the-team.html| Size to 320px using Chrome Dev Tools	| Elements look good @ 320px | Works as expected
meet-the-team.html| Size to 1920px using Chrome Dev Tools | Elements look good 1920px | Works as expected
meet-the-team.html| Test Using WAVE | Pass all checks with no errors| Found 4 contrast errors , which I have chosen to ignore for aestheic purposes as well as the fact that it doesnt reduce user readability
meet-the-team.html| Test Using Lighhouse | Pass all checkboxes with above 80% | Works as expected , find results below table
meet-the-team.html| Nav buttons |That each nav element takes me to the correct page site page | Works as expected
meet-the-team.htmll| Click send button with all fields correctly filled in | Routes user to codeinstitute dump page | Works as expected

-Lighthouse test results 

[index.html](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/lighthouseindex.PNG) [sign-up.html](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/lighthousesignin.PNG) [login-form.html](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/lighthouselogin.PNG) [meet-the-team.html](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/lighthousemeettheteam.PNG)

-I have also tested my website and have confirmed that it works on both Chrome , Safari and FireFox browsers.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator] , upon scanning each .html file present. 

  [Index](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/indexPage.PNG)
  [signup](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/signupform.PNG)
  [login](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/loginform.PNG)
  [meet-the-team](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/meettheteam.PNG)

- CSS
  - No errors were found when passing through the official [(Jigsaw) validator] , upon scanning each .css file present.

  [style](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/cssstyle.PNG)
  [meettheteam](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/cssmeettheteam.PNG)
  [loginform](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/csslogin.PNG)

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

The live link can be found here - https://blaize-egelhof.github.io/Project_1/

## Credits 

### Content 

- The text for my entire website was thumb sucked and put through [Grammerley](https://www.grammarly.com/grammar-check) in order to upscale my vocabulary and correct any spelling/or grammatical errors.
- Instructions on how to design an almost fully responsive form was inspired by the following website [webdesign.tutsplus.com](https://webdesign.tutsplus.com/tutorials/building-responsive-forms-with-flexbox--cms-26767)
- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

Globally applicable images : 

[Header background](https://za.pinterest.com/pin/748653138049829887/) - Taken from [pngtree.com](https://pngtree.com/). With a huge thanks to the user 588ku who published this image from pngtree.com.

[Footer background](https://za.pinterest.com/pin/748653138049829887/) - Taken from [pngtree.com](https://pngtree.com/). With a huge thanks to the user 588ku who published this image from pngtree.com.

Index.html body:
[Landing page background img](https://slidescorner.com/backgrounds/background-for-tech-free-for-ppt-google-slides/) - Taken from [slidescorner.com](https://slidescorner.com/). Completely free to use.

[Why choose us background section img](https://za.pinterest.com/pin/270356783867104506/) - Taken from [istockphoto.com](https://www.istockphoto.com/vector/business-candle-stick-graph-chart-of-stock-market-investment-trading-financial-chart-gm921380008-253052413) with credit to Istock publisher Yozayo.

Meet-our-head-team section member img URLs:
[Profile 1](https://pixabay.com/photos/business-businessman-chair-computer-1839191/) - Credit to Pexels.
[Profile 2](https://za.pinterest.com/pin/193443746482722989/) - Published by @emilywongphoto. Full credit goes to @emilywongphoto.
[Profile 3](https://in.pinterest.com/pin/625437467023443753/) - Published under photodune.net by vadymvdrobot. Full credit to vadymvdrobot.

[Background img for Sign-up-form.html form and Login-form.html form](https://www.123rf.com/photo_19072901_abstract-futuristic-fade-computer-technology-business-background.html) - Published by vska.

Meet-the-team.html body:
[Background images](https://slidescorner.com/backgrounds/background-for-tech-free-for-ppt-google-slides/) - Taken from [slidescorner.com](https://slidescorner.com/). Completely free to use. The section below uses this exact image but rotated 180 degrees.

[Meet-the-team of investors img](https://za.pinterest.com/pin/1009580441445599246/) - Taken from [fortunebuilders.com](https://za.pinterest.com/pin/1009580441445599246/) under the Pinterest username: FortuneBuilders.

[Meet-the-team of AI Specialists img](https://za.pinterest.com/pin/330240585152398223/) - Taken from [stocksy.com](https://za.pinterest.com/pin/1009580441445599246/) under Pinterest username: Stocksy United.



DONT DELETE 
https://icons8.com/icons/set/tech - favicon icon 