let questions = [
    { //6 Variablen (links vom Doppelpunkt) und 6 Werte (rechts davon)
        // 5 dieser werte sind strings und die letzte ist ein integers (Buchstaben und zahlen)//
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
    },

    {
        "question": "Was bedeutet das HTML Tag a",
        "answer_1": "Text fett",
        "answer_2": "Container",
        "answer_3": "Link",
        "answer_4": "Kursiv",
        "right_answer": 3,
    },

    {
        "question": "Wie bindet man eine Website in eine Website ein",
        "answer_1": "<iframe>, <frame>, and <frameset>",
        "answer_2": "<iframe>",
        "answer_3": "<frame>",
        "answer_4": "<frameset>",
        "right_answer": 2,
    },

    {
        "question": "Wie stellt man Text am Besten fett dar",
        "answer_1": "<strong>",
        "answer_2": "CSS nutzen",
        "answer_3": "<bold>",
        "answer_4": "<b>",
        "right_answer": 1,
    },

    {
        "question": "Wie definiert man in JavaScript eine Variable",
        "answer_1": "let 100 = rate;",
        "answer_2": "100 = let rate;",
        "answer_3": "rate = 100;",
        "answer_4": "let rate = 100;",
        "right_answer": 4,
    }
];

let currentQuestion = 0;

function init() {
    document.getElementById('questions-overall').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        //ToDo: show EndScreen
        document.getElementById('end-screen').style = '';
        document.getElementById('question-body').style = 'display: none';
    } else {

        let question = questions[currentQuestion];

        document.getElementById('questions-individually').innerHTML = currentQuestion + 1; //aber ist currentQuestio nicht gelich 0?//
        document.getElementById('questiontext').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];

    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    document.getElementById('next-button').disabled = true;
    resetAnswers();
    showQuestion();

}
function resetAnswers() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success', 'bg-danger')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success', 'bg-danger')
}