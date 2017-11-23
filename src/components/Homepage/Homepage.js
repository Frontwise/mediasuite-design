import React, { Component } from 'react';
import { Page, Header } from '../';

/* Images */
import banner1 from '../../images/mediasuite-banner1.jpg';
import bigiconData from '../../images/bigicon-data.png';
import bigiconTools from '../../images/bigicon-tools.png';
import bigiconWorkspace from '../../images/bigicon-workspace.png';
import bannerMask1 from '../../images/banner-mask1.jpg';
import logoClariah from '../../images/logo-clariah.png';


class Homepage extends Component {

  /**
  * Build the homepage header
  */
  getHeader(){
      return(
      <div>        
        <div className="banner" style={{backgroundImage:'url('+banner1+')'}}>         
          
          <Header.Examples.NotLoggedIn active="home" help="" />

          <div className="content">
            <div className="intro">
              <p>The Media Suite is a research environment of the Dutch infrastructure for digital humanities and social sciences (CLARIAH) which aims to serve the needs of media scholars (and other scholars who use audiovisual media) by providing access to audiovisual collections and their contextual data.</p>
              <a href="#about" className="btn primary">Read more</a>
            </div>
          </div>

          <div className="author">Photo by William Bout on Unsplash</div>
        </div>
        
      </div>
    );
  }

  render() {
    
    return (
      <Page header={this.getHeader()} className="Homepage">
      
        <div className="content">

          {/* Offer: Data / Tools */}

          <ul className="cards offer">

            <li>
              <img src={bigiconData} alt="Media Suite Data"/>
              <h1>Data</h1>
              <p>
                Collections are registered in a common inventory which describes their metadata and are available in Elasticsearch and RDF format.
              </p>
              <a href="#data" className="btn primary">Check out the data</a>
            </li>            

            <li>
              <img src={bigiconTools} alt="Media Suite Tools"/>
              <h1>Tools</h1>
              <p>
                Recipes are built based on the knowledge and experience of the scholarly community. They integrate components into tools for media studies research.
              </p>
              <a href="#tools" className="btn primary">Discover the tools</a>
            </li>

          </ul>

        </div>

        {/* Workspace */}
          
        <ul className="cards workspace" style={{backgroundImage:'url('+bannerMask1+')'}}>

          <li>
            <img src={bigiconWorkspace} alt="Media Suite Workspace"/>
            <h1>Workspace</h1>
            <p>
              In the workspace, you can create and share projects that store research projects. Use your university account to login the Clariah User Space and unlock the full potential of the Media Suite!
            </p>
            <a href="" className="btn white" target="_blank" rel="noopener noreferrer">More Information</a>
            <a href="#login" className="btn primary">Login</a>
          </li>            

        </ul>
        
        {/* Context */}  
        <ul className="cards context">

          <li>
            <img src={logoClariah} alt="Clariah logo"/>
            <p>
              The Media Suite is part of CLARIAH Work Package 5. CLARIAH is a project funded by the NWO and KNAW that aims at the realisation of a distributed infrastructure for the humanities and social sciences.
            </p>
            <a href="" className="btn default" target="_blank" rel="noopener noreferrer">More Information</a>
          </li>            

        </ul>
          

      </Page>
    );
  }
}

export default Homepage;


