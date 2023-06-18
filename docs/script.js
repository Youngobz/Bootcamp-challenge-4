// Constants
var startButton = document.getElementById('start-quiz');
var quizContainer = document.querySelector('.quiz-container');
var questionScreen = document.querySelector('.question-screen');
var questionElement = document.getElementById('question-element');
var choicesList = document.getElementById('choices');
var timerElement = document.getElementById('timer');
var finishContainer = document.querySelector('.quiz-finish-screen');
var finalScoreElement = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitScoreButton = document.getElementById('submit-score');
var highscoresList = document.getElementById('highscores');
var viewHighScoresButton = document.getElementById('view-high-score');
var goBackButton = document.getElementById('go-back');
var clearHighscoresButton = document.getElementById('clear-highscores');
var resultScreen = document.querySelector('.result-screen');
var submittedResult = document.getElementById('submitted-result');

// Quiz variables
var currentQuestionIndex = 0;
var timerCount = 75;
var timerInterval;
var score = 0;
var highscores = [];

// Quiz questions
var quizQuestions = [
  {
    question: 'Commonly used data types DO NOT include:',
    choices: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
    correctAnswer: 'Alerts'
  },
  {
    question: 'The condition in an if/else statement is enclosed within _____.',
    choices: ['Quotes', 'Curly brackets', 'Parentheses', 'Square brackets'],
    correctAnswer: 'Parentheses'
  },
  {
    question: 'Arrays in JavaScript can be used to store _____.',
    choices: ['Numbers and strings', 'Other arrays', 'Booleans', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    choices: ['Commas', 'Curly brackets', 'Quotes', 'Parentheses'],
    correctAnswer: 'Quotes'
  },
  {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    choices: ['JavaScript', 'Terminal/bash', 'For loops', 'console.log'],
    correctAnswer: 'console.log'
  }
];

// Event listeners
startButton.addEventListener('click', startQuiz);
submitScoreButton.addEventListener('click', submitScore);
clearHighscoresButton.addEventListener('click', clearHighscores);
goBackButton.addEventListener('click', goBack);
viewHighScoresButton.addEventListener('click', loadHighscores);

// Functions
function startQuiz() {
  startButton.classList.add('hide');
  document.querySelector('.quiz-firstpage').classList.add('hide');
  quizContainer.classList.remove('hide');
  questionScreen.classList.remove('hide');
  showQuestion();
  startTimer();
}

function startTimer() {
  timerInterval = setInterval(function () {
    timerCount--;
    timerElement.textContent = 'Timer: ' + timerCount;

    if (timerCount <= 0) {
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  var currentQuestion = quizQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;
  choicesList.innerHTML = '';
  for (var i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i];
    var li = document.createElement('li');
    var button = document.createElement('button');
    button.classList.add('choice');
    button.textContent = choice;
    li.appendChild(button);
    choicesList.appendChild(li);
  }
}

function checkAnswer(event) {
  var selectedChoice = event.target;
  var selectedAnswer = selectedChoice.textContent;
  var currentQuestion = quizQuestions[currentQuestionIndex];
  var correctAnswer = currentQuestion.correctAnswer;
  if (selectedAnswer === correctAnswer) {
    score++;
    showSelectedResult('Correct');
  } else {
    timerCount -= 10;
    showSelectedResult('Wrong');
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    showQuestion();
  }
}

function showSelectedResult(resultType) {
  resultScreen.classList.remove('hide');
  submittedResult.innerHTML = resultType;
  setTimeout(() => {
    resultScreen.classList.add('hide');
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  questionScreen.classList.add('hide');
  finishContainer.classList.remove('hide');
  finalScoreElement.textContent = score;
}

function submitScore(event) {
  event.preventDefault();
  var initials = initialsInput.value.trim();
  if (initials !== '') {
    var highscore = {
      initials: initials,
      score: score
    };
    highscores.push(highscore);
    highscores.sort(function (a, b) {
      return b.score - a.score;
    });
    saveHighscores();
    viewHighscores();
  }
}

function viewHighscores() {
  clearInterval(timerInterval);
  document.querySelector('.top-container').classList.add('hide');
  finishContainer.classList.add('hide');
  document.querySelector('.highscore-screen').classList.remove('hide');
  highscoresList.innerHTML = '';

  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];
    var li = document.createElement('li');
    li.textContent = highscore.initials + ' - ' + highscore.score;
    highscoresList.appendChild(li);
  }
}

function goBack() {
  clearInterval(timerInterval);
  document.querySelector('.top-container').classList.remove('hide');
  document.querySelector('.highscore-screen').classList.add('hide');
  startButton.classList.remove('hide');
  document.querySelector('.quiz-firstpage').classList.remove('hide');
  currentQuestionIndex = 0;
  timerCount = 75;
  score = 0;
  timerElement.textContent = 'Timer: ' + timerCount;
}

function clearHighscores() {
  highscores = [];
  saveHighscores();
  highscoresList.innerHTML = '';
}

function saveHighscores() {
  localStorage.setItem('highscores', JSON.stringify(highscores));
}

function loadHighscores() {
  var storedHighscores = localStorage.getItem('highscores');

  if (storedHighscores !== null) {
    highscores = JSON.parse(storedHighscores);
    hideAllPagesExceptHighScore();
    viewHighscores();
  }
}

function hideAllPagesExceptHighScore() {
  document.querySelector('.quiz-firstpage').classList.add('hide');
  questionScreen.classList.add('hide');
  finishContainer.classList.add('hide');
}

// loadHighscores();

// Event delegation for dynamically created elements
choicesList.addEventListener('click', function (event) {
  if (event.target.matches('.choice')) {
    checkAnswer(event);
  }
});
