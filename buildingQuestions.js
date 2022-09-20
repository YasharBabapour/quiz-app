class question {
    constructor(questionText, questionAnswer){
        this.questionText = questionText;
        this.questionAnswer = questionAnswer;
    }
    buildQuestion(){
        let questionBox = document.createElement('div');
        questionBox.classList.add('question');
        questionBox.setAttribute('id', 'question'+buildingCounter);


        let questionTitle = document.createElement('h3');
        questionTitle.innerHTML = this.questionText;
        questionBox.appendChild(questionTitle)


        let answerDiv = document.createElement('div');
        answerDiv.classList.add('answers');

        let ul = document.createElement('ul');
        
        for(let index in this.questionAnswer){
            let li = document.createElement('li');
            li.innerHTML = this.questionAnswer[index]
            li.setAttribute('onclick', 'submitAnswer(this.innerHTML)');
            li.setAttribute('id', this.questionAnswer[index])
            ul.appendChild(li)
            
            console.log(index);
        }




        let nextBtnDiv = document.createElement('div');
        nextBtnDiv.classList.add('nextBtnDiv');
        


        let nextBtn = document.createElement('button');
        nextBtn.setAttribute('id', 'next'+buildingCounter);
        nextBtn.setAttribute('onclick', 'nextFunction()')
        nextBtn.classList.add('hide')
        nextBtn.innerText = 'Next';
        
        nextBtnDiv.appendChild(nextBtn);


        let scoreDisplay = document.createElement('h4');
        scoreDisplay.setAttribute('id', 'score'+buildingCounter)
        scoreDisplay.innerHTML = `Your Score: ${scores} / ${questions.titles.length}`;
        scoreDisplay.classList.add('scores');
        nextBtnDiv.appendChild(scoreDisplay);
        
        
        answerDiv.appendChild(ul);
        questionBox.appendChild(answerDiv);
        questionBox.appendChild(nextBtnDiv)
        document.getElementById('container').appendChild(questionBox)


        //console.log(1);
    }
}
