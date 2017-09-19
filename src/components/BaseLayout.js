import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class BaseLayout extends Component {
  render() {
    return (

      <div className="base_layout">
      <div className="header">
        <div className="brandon">
          <NavLink activeClassName="selected" exact to="/"><div className="link_box">Brandon</div></NavLink>
          </div>

        <nav className="navigation">
          <NavLink activeClassName="selected" to="/about">
            <div className="link_box">About</div>
          </NavLink>

          <NavLink activeClassName="selected" to="/portfolio">
            <div className="link_box">Portfolio</div>
          </NavLink>

          <NavLink activeClassName="selected" to="/contact">
            <div className="link_box">Contact</div>
          </NavLink>
        </nav>
        </div>

        {this.props.children}

        <footer className="footer">
          <div className="side_bar">
            <p>© Copyright Brandon Runkel, 2017</p>
          </div>
          </footer>
        </div>
      )
    }
  }
