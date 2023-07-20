# Tech Quiz

Welcome to my first-ever online quiz application built using JavaScript! My Interactive quiz app is designed around the idea of providing a simple yet graphically pleasing Quiz app to my users . As a remote onsite technician , I believe that continuously testing your knowledge will greatly improve your overall regardless of your specialty in the IT world, this quiz offers a fun and engaging way to explore and expand your understanding of IT concepts, so please enjoy! 

![Responsive Mockup](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/am-i-responsive-pic.PNG)

## Features 

In the section below I will highlight each section of my website and explain its purpose , as well as why I have decided to implement each section and feature ! 

### Existing Features

- __Landing Page__

-Welcome to my landing page, where I have prioritized simplicity and functionality over flashy graphics and animations, this landing page only consists of 3 main elements which are immediately revealed to users upon the site loading.
![Landing Page](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/landing-page.PNG)
- __Title Text__
-My title text, center aligned and displayed in white, which creates a contrast against the dark grey background, immediately setting your expectations of what is to come!
![Title Text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/landing-page.PNG)
__Start Quiz Button__
-Now, your attention will be drawn to our thoughtfully placed "Start Quiz" button, also in white, inviting you to explore the quiz. This button serves as the sole interactive element on the landing page, ensuring that all users no matter what can fully understand what happens when the button is pressed.
![start button](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/landing-page.PNG)
__Footer Text__
-My Footer's text, which is also centered and colored in white, which displays important information to new users. Once you're ready to begin the quiz and press the start button, this footer is temporarily made invisible to eliminate any excess screen pollution.
![footer text](https://github.com/Blaize-Egelhof/Tech-Quiz/blob/main/media-for-readme/landing-page.PNG)

- __Info Box__

-After a user selects Start Quiz they will be greated by a clean , simplistic box containing a header , list of rules and 2 buttons, again adhering to the theme of simplicity and functionality over animations and graphics. 
![Info Box](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/project1-why-choose-us-section.PNG)
- __Info Box Header__
-When the info box is called users are met with a dark underlined header text which provides substansial contrast to the info-box's white background and provides visual clarity to all users , this heading serves as the main focal point for this layer. 
![Info Box Header](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/project1-why-choose-us-section.PNG)
- __Info Box Rules__
-After a user has glanced at the main focal point (header) users eyes are directed below the header , revealing a set of rules users need to be made aware of upon starting the quiz. This text is colored in black to again add contrast and clarity while present on the info-box.
![Info Box rules](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/project1-why-choose-us-section.PNG)
- __Info Box Buttons__












- __Meet The Head Team Section__

- This section showcases the names and faces of our VIP members who represent Investments AI to all potential and current clients.
- In this section, there are 3 different profiles featuring images, names, and their respective titles.
- This again aligns with the idea I am trying to communicate: honesty, transparency, and trustworthiness to all clients. Seeing   the main faces of the people who manage your money as an investor gives you a greater sense of relief, as there is a person to hold accountable if something goes wrong. It also emphasizes that we, as an investment firm, have nothing to hide from our investors, indirectly building trust with our clientele.
- I have decided to keep the page as simple as possible and get straight to the point in order to accommodate potential new investors who may be skeptical about entrusting their money to our firm.

![Meet The Head Team Section](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/meet-the-head-team-img.PNG)

- __The Footer__ 

- A footer section that contains the phone number and email address to directly get in contact with us.
- This footer section is valuable to users who have more questions that need to be answered before they even consider signing up 
  with us. This way, they do not have to complete the sign-up form in order to get in contact. It provides them with options for contacting us!

![Footer](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/project1footer.PNG)

- __Sign Up Form__

  - This form is dedicated to present a sign up form which contains a simple form that is intended for first time users signing  
    up . 
  - This section is valuable to first time potential clients who want to sign up and further enquire about plans etc. 

![Sign Up Form](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/project1-sign-up-form.PNG)

- __Login Form__

  - This section is dedicated to present a login form to any existing cliental who wish to login to their private accounts.

![Login Form](https://github.com/Blaize-Egelhof/Project_1/blob/main/media-for-readme/project1-loginform.PNG)

### Features Left to Implement

- A seperate dedicated page which can pull client data from a server side and display it for exsting clients who Login.
- I am unable to implement such a page due to time contraints and lack of knowledge about back-end data management as well as 
  JavaScript
- A static page which lets users know that they have succesfully submitted the Sign-Up form to avoid users filling in forms       multiple times , I have not implemented this design due to time constraints.

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