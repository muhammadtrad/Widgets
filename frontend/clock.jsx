import React from 'react';
import ReactDom from 'react-dom';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { time: new Date() };
        this.id = id;

        this.tick = this.tick.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
    }

    tick(){
        let time = new Date();
        this.setState({ time });
    }

    componentDidMount(){

    }

    componentWillUnmount(){

    }

    render(){
        return (
            <div>
               <h1>Clock</h1> 
            </div>
        );
    }
};


export default Clock;