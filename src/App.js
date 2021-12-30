import React, { Component } from 'react';
import NavBar from "./components/NavBar";
import Counters from "./components/Counters";
class App extends React.Component {

    // state
    state = {
        counters: [

            { id: 1,value: 1 },
            { id: 2,value: 1 },
            { id: 3,value: 1 },
            { id: 4,value: 1 },

        ]
    };

    // lifecycle hooks
    constructor(props) {
        super(props);
        console.log("App - Constructor");
        // to set the state use
        // this.state = this.props.data;
    }

    componentDidMount() {
        // Ajax call
        // this.setState({ movies });
        console.log("App - ComponentDidMount");
    }


    // functions
    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };

        if (counters[index].value !== 0) {

            counters[index].value--;
            this.setState({ counters:counters });

        } else {

            return;

        }
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters:counters });
    };

    handleDelete = (counterId) => {
        let counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({
            counters:counters 
        });
    }

    handleReset =() => {
        let counters = this.state.counters.map(c => {
            c.value = 1;
            return c;
        });
        this.setState({counters:counters});
    }

    render() {

        console.log("App - render");

        return (
            <React.Fragment>
            <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
            <Counters 
            counters={this.state.counters}
            onReset={this.handleReset} 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            />
            </React.Fragment>
        ); 
        
    }

}
 
export default App;
