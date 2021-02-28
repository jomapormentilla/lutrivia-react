import React from 'react'

class QuestionBox extends React.Component {
    render(){
        return(
            <div className="question" style={{ border: "solid 1px #777", padding: "15px", backgroundColor: "#eee", marginTop: "10px" }}>
                <h2>{ this.props.question.text }</h2>
                <button onClick={(e) => { this.props.handleTrueOrFalse(e, this.props.question) }} value="true">True</button>
                <button onClick={(e) => { this.props.handleTrueOrFalse(e, this.props.question) }} value="false">False</button>
            </div>
        )
    }
}

export default QuestionBox