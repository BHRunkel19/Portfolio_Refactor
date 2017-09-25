import React, { Component } from 'react';
import RunksBunks from '../styles/images/runks_bunks_screenshot.png';
import GameWords from '../styles/images/Game of Words.png';
import DD from '../styles/images/Dumbbells_Donuts.png';
import MarsRover from '../styles/images/Mars_Rover.png';
import PlayWhat from '../styles/images/music-sharing-app-react.png';
import BeatBot from '../styles/images/BeatBot.png';
import JSCalc from '../styles/images/javascript_calculator.png';
import ScrumMonkey from '../styles/images/scrum-monkey.png';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>The Latest and Greatest</h1>
        <div className="image_grid">

        <div className="container">
          <img src={RunksBunks} alt="Avatar" className="image"/>
        <div className="overlay">
            <div className="text">Runks Bunks</div>
        </div>
        </div>

        <div className="container">
          <img src={GameWords} alt="Avatar" className="image"/>
        <div className="overlay">
            <div  className="text">Game of Words</div>
          </div>
        </div>

        <div className="container">
          <img src={DD} alt="DumbbellsDonuts" className="image"/>
        <div className="overlay">
            <div className="text">Dumbbells & Donuts</div>
          </div>
        </div>

        <div className="container">
          <img src={MarsRover} alt="Mars Rover" className="image"/>
        <div className="overlay">
            <div className="text">Mars Rover</div>
          </div>
        </div>

        <div className="container">
          <img src={PlayWhat} alt="PlayWhat" className="image"/>
        <div className="overlay">
            <div className="text">Play What!?</div>
          </div>
        </div>

        <div className="container">
          <img src={BeatBot} alt="BeatBot" className="image"/>
        <div className="overlay">
            <div className="text">BeatBot</div>
          </div>
        </div>

        <div className="container">
          <img src={JSCalc} alt="javascript calculator" className="image"/>
        <div className="overlay">
            <div className="text">Javascript Calculator</div>
          </div>
        </div>

        <div className="container">
          <img src={ScrumMonkey} alt="scrum monkey app" className="image"/>
        <div className="overlay">
            <div className="text">Scrum Monkey</div>
          </div>
        </div>

        </div>
      </div>
    );
  }
}

export default Portfolio;
