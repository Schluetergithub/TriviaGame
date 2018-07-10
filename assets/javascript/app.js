var allottedTime = 120



const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [
    {
      question: "Who holds the single season Rushing record for the Rams?", 
      answers: {
        a: "Todd Gurley",
        b: "Marshall Faulk",
        c: "Steven Jackson",
        d: "Eric Dickerson"
      },
      correctAnswer: "d"
    },
    {
      question: "Where do the Rams originate from?",
      answers: {
        a: "Cleveland",
        b: "Los Angeles",
        c: "St. Louis",
        d: "Baltimore"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the Rams' mascot's name?",
      answers: {
        a: "Rambuntious",
        b: "Rammy",
        c: "Rampage",
        d: "Rama-lama-ding-dong"
      },
      correctAnswer: "c"
    },
    {
        question: "What year were the Rams established in the NFL?",
        answers: {
          a: "1950",
          b: "1936",
          c: "1940",
          d: "1961"
        },
        correctAnswer: "b"
      },
      {
        question: "How many Superbowl titles have the Rams won?",
        answers: {
          a: "1",
          b: "2",
          c: "3",
          d: "4"
        },
        correctAnswer: "a"
      },
      {
        question: "What was the nickname of the Rams famed defensive line in the 1960s?",
        answers: {
          a: "The Roadblocks",
          b: "The Fearsome Foursome",
          c: "Sack Attack",
          d: "The Bullrush"
        },
        correctAnswer: "b"
      },
      {
        question: "Who made 'The Tackle' in the 2000 Superbowl, to win the game?",
        answers: {
          a: "Steve Spagnulo",
          b: "Chris Long",
          c: "Kurt Warner",
          d: "Mike Jones"
        },
        correctAnswer: "d"
      },
      {
        question: "The Rams were the first NFL team to have what?",
        answers: {
          a: "A Mascot",
          b: "Cheerleaders",
          c: "Helmet Logos",
          d: "Painted Endzones"
        },
        correctAnswer: "c"
      },
      {
        question: "Which coach led the Rams to their Superbowl win in the year 2000?",
        answers: {
          a: "Sean McVay",
          b: "Dick Vermeil",
          c: "Steve Spagnulo",
          d: "Mike Martz"
        },
        correctAnswer: "b"
      },
      {
        question: "How many Superbowl appearances have the Rams made?",
        answers: {
          a: "4",
          b: "3",
          c: "2",
          d: "1"
        },
        correctAnswer: "b"
      }
  ];


function buildQuiz(){
    // we'll need a place to store the HTML output
  const output = [];

  // for each question...
  myQuestions.forEach(
    (currentQuestion, questionNumber) => {

      // we'll want to store the list of answer choices. Contains all HTMl output including questions and answer choices.
      const answers = [];

      // and for each available answer...
      for(letter in currentQuestion.answers){

        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join('')} </div>`
      );
    }
  );

  // finally combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join('');

};

function showResults(){
    // gather answer containers from our quiz
  const answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  let numCorrect = 0;

  // for each question...
  myQuestions.forEach( (currentQuestion, questionNumber) => {

    // find selected answer
    const answerContainer = answerContainers[questionNumber];
    const selector = 'input[name=question'+questionNumber+']:checked';
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    // if answer is correct
    if(userAnswer===currentQuestion.correctAnswer){
      // add to the number of correct answers
      numCorrect++;

      // color the answers green
      answerContainers[questionNumber].style.color = 'lightgreen';
    }
    // if answer is wrong or blank
    else{
      // color the answers red
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  // show number of correct answers out of total
  resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);



