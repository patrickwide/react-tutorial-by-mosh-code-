import React, { Component } from 'react';


class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);

        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get new data from the server
            console.log("new data");
        } else {
            // Don't get new data again from the server
            console.log("don't get new data");
        }

    };

    componentWillUnmount() {
        console.log("Counter - Unmount");
    }

    render() { 
        return (
        <React.Fragment>
            <div>
                { this.props.counter.value === 0 ? "" : <button style={ this.styles } onClick={ () => this.props.onDecrement(this.props.counter) }>-</button>}
                <span style={ this.styles }>{ this.props.counter.value === 0 ? "Zero" : this.props.counter.value }</span>
                <button style={ this.styles } onClick={ () => this.props.onIncrement(this.props.counter) }>+</button>
                <button style={ this.styles } onClick={ () => this.props.onDelete(this.props.counter.id) } >Delete</button>

            </div>
        </React.Fragment>
        );
    }

    // notes

    // props - data that we give to component
    // state - data that is local & private to that component

    // functions

    // this function was relace with an arrow function 
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }


    // this function was replaced with the inline function insted
    // 
    //  () => this.handleIncrement({id: 1}
    // 
    // doHundleIncrement =() => {
    //     this.handleIncrement({id: 1});
    // };

    // // widgets
    // productCalt() {

    //     if (this.state.tags.length === 0) return <h1>No blogs found</h1>;
    //     return <div>{this.state.tags.map(tag => 
    //     <div key={tag.id}>
        
    //         <h6  style={ this.styles }>{tag.productName}</h6>   
    //         <button style={ this.styles }>-</button>
    //         <span style={ this.styles }>{ tag.itemCount }</span>
    //         <button style={ this.styles }>+</button>
    //     </div>
    //      )}</div>;
    // }

    // styles
    styles = {
        margin:10,
    };

}

export default Counter;