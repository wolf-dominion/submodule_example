// hello, this is the first edit of this submodule file

// this branch has the first bug fix, this current line of code

// I'm adding this line of code through the main project, "cd"ing into submodule_example and its branch "bugfix_01"

// I am bugfix_02

import React, { Component } from 'react'

class submodule_example extends Component {

    state = {
        number: 0,
    }

    handleClick = () => {
        this.setState({number: this.state.number + 1})
    }

    render(){
        return(
            <div>
                <p>This text is within the submodule</p>
                <p>Number: {this.state.number}</p>
            </div>
        )
    }
}

export default submodule_example