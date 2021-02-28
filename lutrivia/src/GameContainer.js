import React from 'react'

import data from './data'
import QuestionBox from './QuestionBox'
import Form from './Form'

class GameContainer extends React.Component {
    state = {
        questions: [],
        score: 0,
        total: null,
        name: ""
    }

    componentDidMount() {
        this.initialState = this.state
    }

    renderQuestions = () => {
        let counter = 0
        return this.state.questions.map(question => {
            counter++
            return <QuestionBox key={ counter } question={ question } handleTrueOrFalse={ this.handleTrueOrFalse } />
        })
    }

    handleNewGame = e => {
        let arr = this.selectFourRandomQuestions()
        this.setState({
            questions: arr,
            total: 0
        }, ()=>{console.log(this.state)})
    }

    selectFourRandomQuestions = () => {
        let mySet = new Set()
        let arr = []
        
        do {
            mySet.add(Math.floor(Math.random() * 10))
        } while( mySet.size < 4 )

        for (let num of mySet) {
            arr.push(data.questions[num])
        }
        console.log("Set:", mySet)
        return arr
    }

    handleTrueOrFalse = (e, question) => {
        e.persist()
        if (e.target.value === question.answer.toString()) {
            e.target.style.backgroundColor = "green"
            this.setState(prevState => {return { score: prevState.score+1 }}, ()=>{console.log(this.state)})
        } else {
            e.target.style.backgroundColor = "red"
        }
        e.target.style.color = "#fff"
        this.setState(prevState => {return { total: prevState.total + 1 }}, ()=>{ this.showForm() })
    }

    handleSubmitForm = e => {
        e.preventDefault()
        e.target.reset()
        alert(`${ this.state.name } scored ${ this.state.score } points!`)
        this.setState(this.initialState)
    }

    showForm = () => {
        return this.state.total === this.state.questions.length ? <Form handleInputChange={ this.handleInputChange } handleSubmitForm={ this.handleSubmitForm } /> : null
    }

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>Lutrivia</h1>
                <h3>Score: { this.state.score }</h3>
                <button onClick={ this.handleNewGame }>New Game</button>
                { this.renderQuestions() }
                { this.showForm() }
            </div>
        )
    }
}

export default GameContainer