let questions_Title = ['hello'];
let question_Answers = []
let questions = {

    titles: [
        'Where is capital of IRAN ?',
        'Where is capital of ENGLAND ?',
        'Where is capital of USA ?',
        'Where is capital of CANADA ?',
        'Where is capital of CHINA ?',
        'Where is capital of RUSSIA ?',
        'Where is capital of Turkey ?',
        'Where is capital of GERMANY ?',
        'Where is capital of SWEDEN ?',
        'Where is capital of BRAZIL ?'

    ],

    answers: [
        ['Tehran', 'Mashhad', 'Shiraz'],
        ['Liverpool', 'London', 'NewYork', 'Manchester'],
        ['New York', 'Boston', 'Washington, D.C.'],
        ['Ottawa', 'Toranto'],
        ['Beijing', 'Shanghai', 'Xi An'],
        ['Novosibirisk', 'Kazan', 'Moscow', 'Samara'],
        ['Izmir', 'Istanbul', 'Bursa', 'Ankara'],
        ['Cologne', 'Frankfurt', 'Berlin'],
        ['Uppsala', 'Stockholm', 'Visby', 'Malmo'],
        ['Brasília', 'Rio de Janeiro', 'Manaus']
    ],
    correctAnswers: [
        'Tehran',
        'London',
        'Washington, D.C.',
        'Ottawa',
        'Beijing',
        'Moscow',
        'Ankara',
        'Berlin',
        'Stockholm',
        'Brasília'
    ]

};
let buildingCounter = 0


let scores = 0
let start = function(){
    
    document.getElementById('startBtn').classList.add('hide');
    let newQuestion = new question(questions.titles[buildingCounter], questions.answers[buildingCounter]);
    newQuestion.buildQuestion();
}
//start();

    


let build = function(){
    document.getElementById('startBtn').classList.add('hide');
    //console.log('khob');
    
    
}

let submitAnswer = function(value){
    if(value === questions.correctAnswers[buildingCounter]){
        document.getElementById(value).style.backgroundColor = '#07bb38'
        document.getElementById(value).style.color = 'white';
        scores++;
        document.getElementById('score'+buildingCounter).innerHTML = `Your Score: ${scores} / ${questions.titles.length}`
    }else{
        document.getElementById(questions.correctAnswers[buildingCounter]).style.backgroundColor = '#07bb38'
        document.getElementById(questions.correctAnswers[buildingCounter]).style.color = 'white'
        document.getElementById(value).style.backgroundColor = '#d1051d'
        document.getElementById(value).style.color = 'white'
    }
    document.getElementById('next'+buildingCounter).classList.remove('hide');
    console.log(value);
}

let nextFunction = function(){
    
    if(buildingCounter < questions.titles.length-1){
        document.getElementById('question'+buildingCounter).style.display = 'none';
        buildingCounter++
        
        let newQuestion = new question(questions.titles[buildingCounter], questions.answers[buildingCounter]);
        newQuestion.buildQuestion();
    }else{
        document.getElementById('question'+buildingCounter).innerHTML = ' ';
        let result = document.createElement('div');
        result.classList.add('result')
        result.innerHTML = `You Answered ${scores} question correctly`;
        document.getElementById('question'+buildingCounter).appendChild(result);

        let resetBtn = document.createElement('button');
        resetBtn.innerText = 'Reset';
        resetBtn.classList.add('resetBtn')
        resetBtn.setAttribute('onclick', 'resetFunction()')
        result.appendChild(resetBtn);
        console.log('done');
    }
}


let resetFunction = function(){
    old_data = [];
    localStorage.setItem('data', JSON.stringify(old_data));
    location.reload();
    
}