import React from 'react';

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = { time: new Date() };
        this.tick = this.tick.bind(this);
    }
    componentDidMount(){
        this.Id = setInterval(this.tick, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.Id);
    }
    tick(){
        this.setState({ time : new Date()});
    }

    render(){
        const { time } = this.state;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();

        hours = (hours < 10) ? `0${hours}` : hours;
        minutes = (minutes < 10) ? `0${minutes}` : minutes;
        seconds = (seconds < 10) ? `0${seconds}` : seconds;

        return (
            <div>
               <h1>Clock</h1> 
               <div className ='clock'>
                   <p><span>
                        Time:
                   </span>
                   <span>
                       {hours}:{minutes}:{seconds} PDT
                   </span>
                   </p>
                  <p><span>
                      Date:
                  </span>
                  <span>
                      {time.toDateString()}
                  </span>
                  </p>
               </div>
            </div>
        );
    }
};


export default Clock;