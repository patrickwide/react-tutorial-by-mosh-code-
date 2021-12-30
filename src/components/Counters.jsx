import React, { Component } from 'react';
import Counter from "./Counter";

class Counters extends React.Component {

    render() { 
        const {
            onReset,counters,onDelete,onIncrement,onDecrement
        } = this.props;
        return (
        <React.Fragment>
            <button style={{ margin:10, }} onClick={ onReset } >Reset</button>
            { counters.map( counter => (
                <Counter
                key={ counter.id }
                onDelete={ onDelete } 
                onIncrement={ onIncrement }
                onDecrement={ onDecrement }
                counter={ counter } 
                />
            ))}
        </React.Fragment>
        );
    }
}
 
export default Counters;