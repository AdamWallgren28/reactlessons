import React, { Component } from 'react';

// Räknare
export class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
    incrementCount = () => {  
      this.setState({ count: this.state.count + 1 });
    }
  
    render() {  
      return (  
        <div>  
          <h1>{this.props.title}</h1>  
          <p>Antal klick: {this.state.count}</p>  
          <button onClick={this.incrementCount}>Öka</button>  
        </div>  
      );  
    }
}

// Timer 
  export class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        seconds: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      seconds: this.state.seconds + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <p>Tid sedan sidan laddades: {this.state.seconds} sekunder</p>
      </div>
    );
  }
}

// Användare
export function UserProfile(props){
      return (  
        <div>  
          <h1>{props.title}</h1>  
          <p>Användarnamn: {props.name}</p>
          <p>email: {props.email}</p>
          <p>Bio: {props.bio}</p>
        </div>  
      );  
}
  