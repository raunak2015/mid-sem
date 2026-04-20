import questions from './questions.js';
import cppQuestions from './cpp_questions.js';
import mongodbQuestions from './mongodb_questions.js';

// State Management
let activeQuestionSet = [];
let currentSubject = 'react';

let currentQuiz = {
    selectedQuestions: [],
    currentIndex: 0,
    answers: [], // Stores user's selected index for each question
    startTime: null,
    endTime: null,
    timerInterval: null
};

// DOM Elements
const subjectScreen = document.getElementById('subject-screen');
const configScreen = document.getElementById('config-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionCountInput = document.getElementById('question-count');
const rangeValue = document.getElementById('range-value');
const themeToggle = document.getElementById('theme-toggle');
const startBtn = document.getElementById('start-quiz-btn');
const presetBtns = document.querySelectorAll('.preset-btn');
const backToSubjectsBtn = document.getElementById('back-to-subjects');
const subjectTitle = document.getElementById('selected-subject-title');

const progressBar = document.getElementById('progress-bar');
const questionNumber = document.getElementById('question-number');
const timerDisplay = document.getElementById('timer');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options-list');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const finishBtn = document.getElementById('finish-btn');

const finalScore = document.getElementById('final-score');
const statTotal = document.getElementById('stat-total');
const statCorrect = document.getElementById('stat-correct');
const statWrong = document.getElementById('stat-wrong');
const statTime = document.getElementById('stat-time');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('review-container');
const reviewList = document.getElementById('review-list');

const leaveBtn = document.getElementById('leave-btn');

// Initialize
function init() {
    setupEventListeners();
    loadTheme();
    // Initialize preset button highlight for default value
    updatePresetSelection(questionCountInput.value);
}

function setupEventListeners() {
    // Subject Selection
    document.getElementById('subject-react').addEventListener('click', () => selectSubject('react'));
    document.getElementById('subject-cpp').addEventListener('click', () => selectSubject('cpp'));
    document.getElementById('subject-mongodb').addEventListener('click', () => selectSubject('mongodb'));

    // Back to Subjects
    backToSubjectsBtn.addEventListener('click', () => {
        configScreen.classList.remove('active');
        subjectScreen.classList.add('active');
    });

    // Range Input
    questionCountInput.addEventListener('input', (e) => {
        rangeValue.textContent = e.target.value;
        updatePresetSelection(e.target.value);
    });

    // Preset Buttons
    presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.dataset.val;
            questionCountInput.value = val;
            rangeValue.textContent = val;
            updatePresetSelection(val);
        });
    });

    // Start Quiz
    startBtn.addEventListener('click', startQuiz);

    // Navigation
    prevBtn.addEventListener('click', goToPrevious);
    nextBtn.addEventListener('click', goToNext);
    finishBtn.addEventListener('click', showResults);
    
    // Leave Quiz
    leaveBtn.addEventListener('click', quitQuiz);

    // Results Actions
    restartBtn.addEventListener('click', () => {
        resultsScreen.classList.remove('active');
        subjectScreen.classList.add('active');
        // Reset state for a clean start
        currentQuiz = {
            selectedQuestions: [],
            currentIndex: 0,
            answers: [],
            startTime: null,
            endTime: null,
            timerInterval: null
        };
    });
    reviewBtn.addEventListener('click', toggleReview);

    // Theme Toggle
    themeToggle.addEventListener('click', toggleTheme);
}

function selectSubject(subject) {
    currentSubject = subject;
    if (subject === 'react') {
        activeQuestionSet = questions;
        subjectTitle.textContent = 'Master React';
    } else if (subject === 'cpp') {
        activeQuestionSet = cppQuestions;
        subjectTitle.textContent = 'C++ Programming';
    } else if (subject === 'mongodb') {
        activeQuestionSet = mongodbQuestions;
        subjectTitle.textContent = 'MongoDB Database';
    }

    subjectScreen.classList.remove('active');
    configScreen.classList.add('active');
}

// Theme Logic
function toggleTheme() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update results circle color if visible
    if (resultsScreen.classList.contains('active')) {
        updateResultsCircle();
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const isDark = savedTheme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('light-mode', !isDark);
}

function updatePresetSelection(value) {
    presetBtns.forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.val === value);
    });
}

function quitQuiz() {
    if (confirm("Are you sure you want to leave the quiz? Your progress will be lost.")) {
        clearInterval(currentQuiz.timerInterval);
        quizScreen.classList.remove('active');
        subjectScreen.classList.add('active');
        
        // Reset state
        currentQuiz = {
            selectedQuestions: [],
            currentIndex: 0,
            answers: [],
            startTime: null,
            endTime: null,
            timerInterval: null
        };
    }
}

// Fisher-Yates Shuffle Algorithm
function shuffleArray(array) {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

// Quiz Logic
function startQuiz() {
    if (!activeQuestionSet || activeQuestionSet.length === 0) {
        alert("Error: No questions found for this subject!");
        return;
    }

    const count = parseInt(questionCountInput.value);
    const shuffled = shuffleArray(activeQuestionSet);
    currentQuiz.selectedQuestions = shuffled.slice(0, Math.min(count, activeQuestionSet.length));
    currentQuiz.currentIndex = 0;
    currentQuiz.answers = new Array(currentQuiz.selectedQuestions.length).fill(null);
    currentQuiz.startTime = new Date();

    configScreen.classList.remove('active');
    quizScreen.classList.add('active');

    renderQuestion();
    startTimer();
}

function startTimer() {
    if (currentQuiz.timerInterval) clearInterval(currentQuiz.timerInterval);
    
    let seconds = 0;
    currentQuiz.timerInterval = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        timerDisplay.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function renderQuestion() {
    const question = currentQuiz.selectedQuestions[currentQuiz.currentIndex];
    const total = currentQuiz.selectedQuestions.length;
    const userAnswer = currentQuiz.answers[currentQuiz.currentIndex];

    // Update UI
    questionNumber.textContent = `Question ${currentQuiz.currentIndex + 1} of ${total}`;
    progressBar.style.width = `${((currentQuiz.currentIndex + 1) / total) * 100}%`;
    
    // Add topic tag
    const topicTag = `<span class="topic-tag">${question.topic}</span>`;
    questionText.innerHTML = `${topicTag}<br>${escapeHtml(question.question)}`;

    // Render Options
    optionsList.innerHTML = '';
    question.options.forEach((opt, index) => {
        const div = document.createElement('div');
        div.className = 'option';
        
        // If already answered, show feedback
        if (userAnswer !== null) {
            if (index === question.answer) {
                div.classList.add('correct');
            } else if (index === userAnswer) {
                div.classList.add('wrong');
            }
            div.style.pointerEvents = 'none'; // Disable clicking
        }
        
        div.innerHTML = `
            <span class="option-label">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${escapeHtml(opt)}</span>
        `;
        
        if (userAnswer === null) {
            div.addEventListener('click', () => selectOption(index));
        }
        
        optionsList.appendChild(div);
    });

    // Update Buttons
    prevBtn.disabled = currentQuiz.currentIndex === 0;
    if (currentQuiz.currentIndex === total - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function selectOption(index) {
    const question = currentQuiz.selectedQuestions[currentQuiz.currentIndex];
    
    // Record the answer
    currentQuiz.answers[currentQuiz.currentIndex] = index;
    
    // Immediate Feedback
    const options = optionsList.querySelectorAll('.option');
    options.forEach((opt, i) => {
        opt.style.pointerEvents = 'none'; // Disable all options
        
        if (i === question.answer) {
            opt.classList.add('correct');
        } else if (i === index) {
            opt.classList.add('wrong');
        }
    });
}

function goToNext() {
    if (currentQuiz.currentIndex < currentQuiz.selectedQuestions.length - 1) {
        currentQuiz.currentIndex++;
        renderQuestion();
    }
}

function goToPrevious() {
    if (currentQuiz.currentIndex > 0) {
        currentQuiz.currentIndex--;
        renderQuestion();
    }
}

function showResults() {
    clearInterval(currentQuiz.timerInterval);
    currentQuiz.endTime = new Date();

    let correctCount = 0;
    currentQuiz.selectedQuestions.forEach((q, i) => {
        if (currentQuiz.answers[i] === q.answer) {
            correctCount++;
        }
    });

    const total = currentQuiz.selectedQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    // Stats
    finalScore.textContent = `${percentage}%`;
    statTotal.textContent = total;
    statCorrect.textContent = correctCount;
    statWrong.textContent = total - correctCount;

    const duration = Math.floor((currentQuiz.endTime - currentQuiz.startTime) / 1000);
    const mins = Math.floor(duration / 60);
    const secs = duration % 60;
    statTime.textContent = `${mins}m ${secs}s`;

    // Visual feedback
    updateResultsCircle(percentage);

    if (percentage >= 80) {
        document.getElementById('result-message').textContent = 'Excellent! You are ready for the exam.';
        finalScore.style.color = 'var(--success)';
    } else if (percentage >= 50) {
        document.getElementById('result-message').textContent = 'Good effort! A bit more practice and you\'ll be perfect.';
        finalScore.style.color = 'var(--primary)';
    } else {
        document.getElementById('result-message').textContent = 'Keep studying! Focus on the topics you missed.';
        finalScore.style.color = 'var(--danger)';
    }

    quizScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    
    // Prepare Review
    prepareReview();
}

function updateResultsCircle(percentage) {
    if (percentage === undefined) {
        const text = finalScore.textContent;
        percentage = parseInt(text) || 0;
    }
    
    const circle = document.querySelector('.score-circle');
    const isDark = document.body.classList.contains('dark-mode');
    const trackColor = isDark ? 'var(--border-dark)' : 'var(--border-light)';
    
    circle.style.background = `conic-gradient(var(--primary) ${percentage}%, ${trackColor} 0%)`;
}

function prepareReview() {
    reviewList.innerHTML = '';
    currentQuiz.selectedQuestions.forEach((q, i) => {
        const userAns = currentQuiz.answers[i];
        const isCorrect = userAns === q.answer;

        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML = `
            <p class="review-q">${i + 1}. ${escapeHtml(q.question)}</p>
            <div class="review-ans">
                <div class="ans-row ${userAns === null ? 'ans-empty' : (isCorrect ? 'ans-correct' : 'ans-wrong')}">
                    <strong>Your Answer:</strong> ${userAns !== null ? escapeHtml(q.options[userAns]) : 'Not answered'}
                </div>
                ${!isCorrect ? `
                <div class="ans-row ans-correct">
                    <strong>Correct Answer:</strong> ${escapeHtml(q.options[q.answer])}
                </div>
                ` : ''}
            </div>
        `;
        reviewList.appendChild(div);
    });
}

function toggleReview() {
    const isHidden = reviewContainer.classList.toggle('hidden');
    reviewBtn.textContent = isHidden ? 'Review Answers' : 'Hide Review';
    if (!isHidden) {
        reviewContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Start App
init();
