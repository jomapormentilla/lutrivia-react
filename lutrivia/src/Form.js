import React from 'react'

class Form extends React.Component {
    render(){
        return(
            <div>
                <br />
                <form onSubmit={ this.props.handleSubmitForm }>
                    <input type="text" name="name" placeholder="Name" onChange={ (e)=>{ this.props.handleInputChange(e) } } />
                    <input type="submit" value="Submit Score" />
                </form>
            </div>
        )
    }
}

export default Form