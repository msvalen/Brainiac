import Question from '.';

describe('Question', ()=> {
    
    test('It check if renders a div whose class is question', () => {       
        const testQuestion={
            category: "Entertainment: Musicals & Theatres",
            type: "multiple",
            difficulty: "hard",
            question: "Which Shakespeare play features the stage direction &quot;Enter a messenger, with two heads and a hand&quot;?",
            correct_answer: "Titus Andronicus",
            incorrect_answers: [
            "Othello",
            "Macbeth",
            "King Lear"
            ]
        }
        renderWithReduxProvider(<Question question={testQuestion} selected={(e)=>console.log(e)} />)
        let question = document.querySelector('.question');
        expect(question).toBeInTheDocument();
    })
})