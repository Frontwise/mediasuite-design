import React, { Component } from 'react';
import classNames from 'classnames';
import Cases from './Cases.js';


class App extends Component {

  constructor(props){
    super(props);

    let caseIndex = Cases.length - 1;

    // retrieve case index from hash
    if (window.location.hash.startsWith('#case-')){
      caseIndex = Math.min(caseIndex, parseInt(window.location.hash.slice(6), 10));
    }

    this.state = {
      caseIndex: caseIndex
    }
  }

  setCase(index){
    this.setState({caseIndex: index});
    window.location.hash = '#case-' + index;
  }

  render() {
    return (
      <div className="App">
          <ul className="cases">
            {Cases.map((c, index)=>(<li key={index} className={classNames({active: index===this.state.caseIndex} )} onClick={this.setCase.bind(this,index)}>{c.title}</li>))}
          </ul>
          <div className="case">
            {Cases[this.state.caseIndex].component}
          </div>
      </div>
    );
  }
}

export default App;
