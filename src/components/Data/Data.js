import React, { Component } from 'react';
import { Page, Header } from '../';

/* Images */
import banner1 from '../../images/mediasuite-banner1.jpg';
import bigiconData from '../../images/bigicon-data.png';
import bigiconTools from '../../images/bigicon-tools.png';
import bigiconWorkspace from '../../images/bigicon-workspace.png';
import bannerMask1 from '../../images/banner-mask1.jpg';
import logoClariah from '../../images/logo-clariah.png';


class Data extends Component {

  render() {
    
    return (
      <Page header={<Header.Examples.NotLoggedIn active="data" />} className="page Data">
      
        <div className="content">
          <h1>Todo: data page</h1>

          <div className="collection-selector-component">
            <h2>[Collection selector component]</h2>
          </div>
        </div>
          
        


      </Page>
    );
  }
}

export default Data;


