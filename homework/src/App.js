import React, { Component } from 
"react";
import "./style.css";

class App extends Component {
  state = {
    show: false,
    person: {
      fullName: "Fanta Sy-savane",
      bio: "I am a software engineer",
      imgSrc: './assets/profile.png',
      profession: "Engineer"
    },
    timeSinceMounted: 0
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        timeSinceMounted: this.state.timeSinceMounted + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Show</button>
        {this.state.show && (
          <div>
            <img src={this.state.person.imgSrc} alt="profile" />
            <h1>{this.state.person.fullName}</h1>
            <p>{this.state.person.bio}</p>
            <p>{this.state.person.profession}</p>
          </div>
        )}
        <p>Time since last mount: {this.state.timeSinceMounted} seconds</p>
      </div>
    );
  }
}

export default App;

