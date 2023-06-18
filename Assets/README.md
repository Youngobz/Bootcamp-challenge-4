# Bootcamp-challenge-4 (Online Quiz Project)


This project involved creating an interactive online quiz using HTML, CSS, and JavaScript. The purpose of the quiz was to test users' knowledge on a specific topic and provide them with a score based on their answers. I started from scratch and built the code for HTML, CSS, and JavaScript to create the online quiz.

HTML Structure
The HTML code consisted of a container element that enclosed the quiz sections, including the quiz questions, choices, and feedback screens. It also included elements for displaying the current question, score, and navigation buttons. Each question was represented by a separate section in the HTML structure, and the choices were displayed as buttons within a list.
[HTML](./Screenshots/image.png)

CSS Styling
For the CSS code, I focused on styling the quiz interface to create an appealing and user-friendly design. I added custom styles for buttons, text elements, and containers to ensure a visually consistent and engaging quiz layout. I applied the CSS styles to various HTML elements using class selectors, ensuring proper formatting and positioning of quiz components.
[CSS](./Screenshots/image-1.png)

JavaScript Functionality
The JavaScript code was responsible for the quiz's functionality and interactivity. I implemented several key functions that controlled the quiz flow and user interactions. Here's an overview of the main functions:

startQuiz(): This function initiated the quiz by hiding the start screen and displaying the first question screen. It also initialized variables to keep track of the current question index, user score, and selected answers. [startQuiz function](./Screenshots/image-2.png)

showQuestion(): This function retrieved the current question from an array of quiz questions and displayed it on the screen. It dynamically generated the answer choices as buttons and attached event listeners to capture the user's selection. [showQuestion function](./Screenshots/image-3.png)

checkAnswer(): When a user clicked on an answer choice, this function evaluated whether the selected answer was correct. It updated the user's score accordingly and displayed feedback on the screen indicating whether the answer was correct or incorrect. After the user submitted an answer, this function progressed to the next question by updating the question index. It also checked if the quiz had reached the end and displayed the final score screen if applicable. [checkAnswer function](./Screenshots/image-4.png)

submitScore(): This function presented the user's final score at the end of the quiz, along with the option to input their initials. This data is then stored on the  local storage as is available for users to view in the view high scores section. [submitScore function](./Screenshots/image-5.png)

User Experience and Interaction
Throughout the development process, I paid careful attention to the user experience and interaction design. I designed the quiz to be intuitive and engaging, providing clear instructions and visually appealing elements. Feedback was provided to the user after each question, giving them immediate knowledge of their performance. Additionally, I ensured a seamless quiz flow with smooth transitions between questions and a visually pleasing layout. [User experience](./Screenshots/image-6.png)

Conclusion
By combining HTML, CSS, and JavaScript, I successfully created an interactive online quiz that tested users' knowledge on a specific topic. The structure, styling, and functionality of the quiz were carefully designed to provide an enjoyable and educational experience for users. The use of HTML for content structure, CSS for visual styling, and JavaScript for interactivity resulted in a well-rounded and fully functional online quiz.