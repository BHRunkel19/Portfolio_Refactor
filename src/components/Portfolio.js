import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <h1>The Latest & Greatest</h1>
        <div className="image_grid_flip" ontouchstart="this.classList.toggle('hover')">
          <div id="image1" className="images">
          </div>
          <div id="image2" className="images">
          </div>
          <div id="image3" className="images">
          </div>
          <div id="image4" className="images">
          </div>
          <div id="image5" className="images">
          </div>
          <div id="image6" className="images">
          </div>
          <div id="image7" className="images">
          </div>
          <div id="image8" className="images">
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
