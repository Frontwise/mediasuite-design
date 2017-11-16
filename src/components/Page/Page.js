import React, { Component } from 'react';
import HeaderExamples from '../Header/HeaderExamples';
import { Footer } from '../';

class Page extends Component {

  render() {
    return (
      <div className={"Page " + (this.props.className ? this.props.className : '') }>
        
        {typeof this.props.header !== 'undefined' ? this.props.header : <HeaderExamples.NotLoggedIn /> }

        {this.props.children}
        
        <Footer />

      </div>
    );
  }
}

export default Page;
