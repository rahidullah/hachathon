// JavaScript for the Quiz App

// Student Details Form Submission
document.getElementById('student-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const rollNumber = document.getElementById('roll-number').value;
    const name = document.getElementById('name').value;
    const batch = document.getElementById('batch').value;
    const section = document.getElementById('section').value;

    // Store data in Session Storage
    sessionStorage.setItem('rollNumber', rollNumber);
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('batch', batch);
    sessionStorage.setItem('section', section);

    // Hide student details form and show quiz page
    document.getElementById('student-form').style.display = 'none';
    document.getElementById('quiz-page').style.display = 'block';
});

// Quiz Form Submission
document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let totalMarks = 0;

    // Compare selected answers with correct answers
    const selectedAnswers = [];
    const correctAnswers = ['A', 'B', 'C', 'D', 'A']; // Example correct answers
    for (let i = 1; i <= 5; i++) {
        const selectedAnswer = document.querySelector('input[name="answer' + i + '"]:checked');
        if (selectedAnswer) {
            selectedAnswers.push(selectedAnswer.value);
            if (selectedAnswer.value === correctAnswers[i - 1]) {
                totalMarks += 1;
            }
        }
    }

    // Store marks in Session Storage
    sessionStorage.setItem('totalMarks', totalMarks);

    // Display results page
    document.getElementById('quiz-page').style.display = 'none';
    document.getElementById('results-page').style.display = 'block';

    // Display student details, quiz topic, selected answers, correct answers, and total marks
    document.getElementById('student-details').textContent = 'Roll Number: ' + sessionStorage.getItem('rollNumber') + ', Name: ' + sessionStorage.getItem('name') + ', Batch: ' + sessionStorage.getItem('batch') + ', Section: ' + sessionStorage.getItem('section');
    document.getElementById('quiz-topic-display').textContent = 'Quiz Topic: ' + document.getElementById('quiz-topic').value;
    const answersDiv = document.getElementById('answers');
    for (let i = 0; i < selectedAnswers.length; i++) {
        const answer = document.createElement('p');
        answer.textContent = 'Question ' + (i + 1) + ': Selected Answer - ' + selectedAnswers[i] + ', Correct Answer - ' + correctAnswers[i];
        answersDiv.appendChild(answer);
    }
    document.getElementById('total-marks').textContent = 'Total Marks: ' + totalMarks;
});