import React, { Component } from 'react';

import { pages } from  '../../data/Pages';

class Help extends Component {

  render() {    
    return (
        <div className="Help">
          {this.props.id ? <a href="#help" className="help" ></a> : null}
          {/*this.props.id == 'hide' ? 
          <div className="help-body">
            Help for id: {this.props.id}
          </div>
          : null*/}
        </div>
    );
  }
}

export default Help;
