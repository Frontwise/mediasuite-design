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
            <li><a href="">Tools</a></li>
            <li><a href="">Data</a></li>
          </ul>

          <ul>
            <li><a href="">About</a></li>
            <li><a href="">Documentation</a></li>
            <li><a href="">Contact</a></li>
          </ul>

          <ul>
            <li><a href="">Login</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
