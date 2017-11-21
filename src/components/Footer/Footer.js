import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div className="Footer ">
        <div className="content">
          <ul>
            <li>
              <div className="logo"/>
              <h5>Version: 20171212</h5>
            </li>
          </ul>

          <ul>
            <li><a href="#tools">Tools</a></li>
            <li><a href="#data">Data</a></li>
          </ul>

          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <ul>
            <li><a href="#login">Login</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
