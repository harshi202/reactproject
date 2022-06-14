import React from 'react';
class CounterOne extends React.Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
    }
    increment = () => {
        this.setState({
            counter : this.state.counter+1
        })
    }
    decrement = ()=> {
        this.setState({
            counter : this.state.counter-1
        })
    }
    render() {
        return(
            <div>
                <h1>Counter Demo using Class Component</h1>
                <h3>Counter : {this.state.counter}</h3>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}
export default CounterOne;