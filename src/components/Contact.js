import React, { Component } from 'react';
import Twitter from '../styles/images/twitter-logo.jpg';
import Instagram from '../styles/images/Instagram-icon.png';
import GitHub from '../styles/images/github_logo.png';


class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h1 className="contact_title">Let's Keep In Touch</h1>
        <div className="social_links">

          <div className="social_link_box">
            <a href="https://twitter.com/bhrunkel">
              <img id="twitter" className="social_img" src={Twitter} alt="twitter icon" />
            </a>
            <p>Twitter</p>
          </div>

          <div className="social_link_box">
            <a href="https://twitter.com/bhrunkel">
              <img id="instagram" className="social_img" src={Instagram} alt="instagram icon" />
            </a>
            <p>Instagram</p>
          </div>

          <div className="social_link_box">
            <a href="https://github.com/BubbaBean">
              <img id="github" className="social_img" src={GitHub} alt="github icon" />
            </a>
            <p>GitHub</p>
          </div>
        </div>

        <div className="more_contact_info">
          <p>For direct inquiries or employment opportunities, please email me at <span>brandon.runkel@gmail.com</span></p>
        </div>
      </div>
    );
  }
}

export default Contact;
