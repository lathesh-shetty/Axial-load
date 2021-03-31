
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
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
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");


// Don't touch the above code




// Write your MCQs here --- Start --- --------------------
  const myQuestions = [
    {
      question: "Hook’s law applicable within",
      answers: {
        a: "Plastic limit",
        b: "Elastic limit",
        c: "Fracture point",
        d: "None of the above"
      },
      correctAnswer: "b"
    },
    {
      question: "A circular rod of 17mm diameter is subjected to a load of 500N. The stress in N/mm² is",
      answers: {
        a: "18.55",
        b: "7.41",
        c: "8.81",
        d: "10"
      },
      correctAnswer: "c"
    },
    {
      question: "When compressive load is applied on a circular rod",
      answers: {
        a: "Diameter increases",
        b: "Length increases",
        c: "Volume increases",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "A cord has original length of 100cm is pulled by a force, if change in length of cord is 2mm what is the strain?",
      answers: {
        a: "0.2",
        b: "1",
        c: "0.0002",
        d: "0.002"
      },
      correctAnswer: "b"
    },
    {
      question: "A load of 5KN is to be raised with the help of a steel wire. Find the minimum diameter of wire if stress is not to exceed 100MPa",
      answers: {
        a: "7.98",
        b: "8.53",
        c: "9.98",
        d: "7"
      },
      correctAnswer: "a"
    }
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
