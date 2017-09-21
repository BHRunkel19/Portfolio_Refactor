import React, {Component} from 'react';
import '../styles/App.css';
import Coding from '../styles/images/Love-Coding.mp4';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="landing_title">Brandon Runkel</h1>
        <h3 className="landing_subtitle">
          Designer | Coder | Entrepreneur
        </h3>
        <div className="fullscreen-bg">
          <video src={Coding} loop muted autoPlay className="fullscreen-bg__video">
        </video>
      </div>
    </div>
    );
  }
}

export default App;
