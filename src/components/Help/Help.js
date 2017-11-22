import React, { Component } from 'react';

import { pages } from  '../../data/Pages';

class Help extends Component {

  render() {    
    // don't render when no id is given
    if (!this.props.id){
      return null;
    }

    return (
        <div className="Help">
          <div className="button"/>
          
          <div className="container">
            <div className="header">
              <div className="close"/>
            </div>
            <p>
              Help for id: {this.props.id}
            </p>
          </div>          
        </div>
    );
  }
}

export default Help;
