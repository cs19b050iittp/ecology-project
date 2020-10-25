import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        Counters : [
            { id : 0 , value : 4},
            { id : 1 , value : 0},
            { id : 2 , value : 0},
            { id : 3 , value : 0},
            { id : 4 , value : 0}
        ]
    }

    handleReset = () =>{
        const counters = this.state.Counters.map(counter => {
            counter.value = 0;
            return counter;
        });
        this.setState({
            Counters : counters
        })
    }



    render() { 
        return ( 
             <div>
                <button onClick = {this.handleReset} className="btn btn-primary btn-sm">Reset</button>
                {this.state.Counters.map( counter => 
                < Counter 
                    key={counter.id} 
                    counter ={counter}
                    onIncrement = {this.handleIncrement}
                    onDelete={this.handleDelete}>
                </Counter>)}
            </div>
        );
    }

    handleDelete = (counterId) =>{
        const counters = this.state.Counters.filter(c => c.id !== counterId);
		this.setState({
            Counters : counters
        });
    }
    
    handleIncrement = (counter) => {
        const counters = [...this.state.Counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ Counters : counters})

    }
    
}
 
export default Counters;