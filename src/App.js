import React, { Component } from 'react';
import './App.css';

class App extends Component {
    state = {
        name: 'Ryu',
        age: 35
    };

    handleClick = () => {
        console.log('The button has been clicked!');
    }

    handleMouseOver = () => {
        this.setState({
            name: 'Nelu'
        })
    }

    render() {
        return (
            <div className="App">
                <h1>Hello there!</h1>
                <p>Hi, my name is {this.state.name} and I am {this.state.age} years old.</p>  
                <button onClick={this.handleClick}>Click me</button>  
                <button onMouseOver={this.handleMouseOver}>Hover</button>  
            </div>
        );
    }


    
}

export default App;
