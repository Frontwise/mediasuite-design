import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Footer, Header } from '../';

class Page extends Component {

  render() {
    return (
      <div className={"Page " + (this.props.className ? this.props.className : '') }>
        
        {typeof this.props.header !== 'undefined' ? this.props.header : <Header.Examples.NotLoggedIn /> }

        {this.props.children}
        
        <Footer />

      </div>
    );
  }
}


Page.propTypes = {
  
  // optional custom header component
  header: PropTypes.node
}

export default Page;
