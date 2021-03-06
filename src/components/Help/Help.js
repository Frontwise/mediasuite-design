import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { text } from  '../../data/Text';
import classNames from 'classnames';

class Help extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: props.show === true
    }
  }

  /**
  * Hide the help container
  */
  hide(){
    this.setState({active: false});
  }

/**
  * Show the help container
  */
  show(){
    this.setState({active: true});
  }


  render() {
    // don't render when no id is given
    if (!this.props.id){
      return null;
    }

    return (
        <div className="Help">
          <div className="button" onClick={this.show.bind(this)}/>

          <div className={classNames('container',{active: this.state.active})}>

            <div className="header">
              Help for id: <i>{this.props.id}</i>
              <div className="close" onClick={this.hide.bind(this)}/>
            </div>

            <div className="scroll">

              <p>{text}</p>
              <p>{text}</p>
              <a href="" className="link">(External) link example</a>
            </div>
          </div>
        </div>
    );
  }
}


Help.propTypes = {
  
  // identifier for the documentation content block that should be loaded here
  // e.g. 'mediasuite-page-data' > should return a block of text from the docs
  // that shows the help about that specfic page, based on the given id
  // this component for now only shows placeholder content.
  id: PropTypes.string,

  // show the Help on component load/mount directly
  show: PropTypes.bool,
}


export default Help;
