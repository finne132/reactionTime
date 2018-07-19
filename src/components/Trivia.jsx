import React from 'react';

class Buttons extends React.Component {
    constructor(props) {
        super(props);
        console.log("props in trivia component  buttons = " + JSON.stringify(props))
    }

    render() {
        
        let buttons = this.props.possibleAnswers.map((answer, index) => {
            return (
                <div className="col-12 button">
                    <div id="back"></div>
                    <div id="front"></div>
                    <button type="button" key={'answer-' + index} onClick={() => this.props.handleClick(answer, this.props.correctAnswer)}>{answer}</button>
                </div>
            )


        });
        return (
            <div>{buttons}</div>
        )
    }
}

class Totals extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="col-3 score">
                <div className="correct"><span>Correct:</span> {this.props.correct}</div>
                <div className="incorrect"><span>Incorrect:</span> {this.props.incorrect}</div>
            </div>
        )
    }
}
class Question extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let i = this.props.q,
            totalQuestions = this.props.totalQuestions - 1;

        if(i <= totalQuestions) {
            return (
                <div>
                    <h1>{this.props.questions[i].question}</h1>
                    <Buttons possibleAnswers={this.props.questions[i].possibleAnswers} correctAnswer={this.props.questions[i].correct_answer} handleClick={this.props.handleClick} />
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Play Again?</h1>
                    <button onClick={() => this.props.handleNewGame()}>New Game</button>
                </div>
            )
        }

    }
}

class Trivia extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            correct: 0,
            incorrect: 0,
            totalQuestions: 10,
            q: 0,
            user: props.user
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
    }
    handleNewGame(){
        this.setState({
            questions: [],
            correct: 0,
            incorrect: 0,
            q: 0,
        });
        this.fetchQuestions();
    }

    handleClick(answer, correct_answer) {
        let correct = this.state.correct,
            incorrect = this.state.incorrect,
            totalQuestions = this.state.totalQuestions - 1;
        if (unescape(answer) === unescape(correct_answer)) {
            correct = this.state.correct + 1;
        } else {
            incorrect = this.state.incorrect + 1;
        }
        if(this.state.q <= totalQuestions) {
            this.setState({correct: correct, incorrect: incorrect, q: this.state.q + 1});
        } else {
            this.setState({correct: correct, incorrect: incorrect});
        }

    }

    fetchQuestions() {
        let q = this.state.totalQuestions;
        fetch('https://opentdb.com/api.php?amount='+ q +'&category=9&difficulty=easy&type=multiple&encode=url3986')
        .then(results => {
            return results.json();
        }).then(data => {
            this.questionLoader(data)
        })
    }
    questionLoader(data) {
        let questions = [];
        for(let i in data.results) {

            let q = unescape(data.results[i].question),
                correct_answer = unescape(data.results[i].correct_answer),
                possibleAnswers = [correct_answer,
                                    unescape(data.results[i].incorrect_answers[0]),
                                    unescape(data.results[i].incorrect_answers[1]),
                                    unescape(data.results[i].incorrect_answers[2])
                                ];
            // randomize the possible answers array
            possibleAnswers = possibleAnswers.sort(() => {
                return 0.5 - Math.random()
            });

            questions.push({
                'question': q,
                'possibleAnswers': possibleAnswers,
                'correct_answer': correct_answer
            });
        }
        this.setState({questions: questions});
    }


    componentWillMount() {
        this.fetchQuestions();
    }
    render() {
        let questions = this.state.questions.length <= 0 ? false : <Question questions={this.state.questions} q={this.state.q} totalQuestions={this.state.totalQuestions} handleClick={this.handleClick} handleNewGame={this.handleNewGame} />;
        return (
            <div class="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <p> TIMER </p>
                </div>
                <div className="col-md-12 question">
                   <p class="text-center"> {questions} </p>
                </div>
            </div>

            <div className="row justify-content-center">
                <Totals correct={this.state.correct} incorrect={this.state.incorrect} />
            </div>

            <div className="row justify-content-center">
                <div className="col-md-12 multiScores">
                <div class="row">
                <span>Player 1</span>
                <span>Player 2</span>
                </div>
                <div class="row">
                <span>Player 3</span>
                <span>Player 4</span>
                </div>
                </div>
            </div>
            </div>
            
            

        )

}
}

export default Trivia