import React, { Component } from 'react';
import { Page, Header } from '../';
import classNames from 'classnames';

/* Images */
import bigiconTools from '../../images/bigicon-tools.png';
import bigiconDevelopment from '../../images/bigicon-development.png';
import placeholder from '../../images/placeholder.svg';

class Tools extends Component {
  
  constructor() {
    super();
    this.state = {contentVisible: true};
  }

  render() {
    let {contentVisible} = this.state;
    const tools = [
      {
        name: 'Collection inspector',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior.',
        detailsUrl: '#toolDetails',
        url: '#',
      },
      {
        name: 'Exploratory browser',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior.',
        detailsUrl: '#toolDetails',
        url: '#',
      },
      {
        name: 'Basic faceted search',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior.',
        detailsUrl: '#toolDetails',
        url: '#',
      },
      {
        name: 'Comparative search',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et quidem Arcesilas tuus, etsi fuit in disserendo pertinacior.',
        detailsUrl: '#toolDetails',
        url: '#',
      },
    ];
    
    return (
      <Page header={<Header.Examples.NotLoggedIn active="tools" />} className="page Tools">
      
        <div className={classNames('content', {hidden: !contentVisible})}>
          <img src={bigiconTools} alt="Media Suite Tools"/>
          <div className="info">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, nec te atqui scribentur. Diam molestie posidonium te sit, ea sea expetenda suscipiantur contentiones, vix ex maiorum denique. Quo detracto recusabo lobortis ei, ne labores sapientem pri, ex zril option aperiri mea. Ad magna utamur molestiae cum. Et dicam antiopam vel, ludus graeco recusabo quo in, per in quod soleat. Cetero praesent recteque vim te, ut vix decore partem appellantur, et vim dico ancillae. Idque deleniti maluisset eu per. 
              </p>
            </div>
            
            <div className="actions">
              <a 
                className="btn blank"
                onClick={() => this.setState({contentVisible: !contentVisible})}
              >
                  Hide
              </a>
              <a href="http://rdbg.tuxic.nl/clariahwp5/wordpress/" className="btn" target="_blank" rel="noopener noreferrer">View tutorials</a>
            </div>
          </div>
        </div>
        
        <div className="list">
          {tools.map((tool,index) =>
            <div className="tool" key={index}>
              <div className="image-wrap">
                <img src={placeholder} alt={tool.name} />
              </div>
              <h3>{tool.name}</h3>
              <div className="description">{tool.description}</div>
              <div className="actions">
                <a href={tool.detailsUrl} className="btn blank">Details</a>
                <a href={tool.url} className="btn">Open</a>
              </div>
            </div>
          )}
        </div>
        
        <div className="development">
          <img src={bigiconDevelopment} alt="Tool development"/>
          
          <h2>Tool development</h2>
          
          <div className="description">
            Lorem ipsum dolor sit amet, nec te atqui scribentur. Diam molestie posidonium te sit, ea sea expetenda suscipiantur contentiones, vix ex maiorum denique. Quo detracto recusabo lobortis ei, ne labores sapientem pri, ex zril option aperiri mea. Ad magna utamur molestiae cum.
            Et dicam antiopam vel, ludus graeco recusabo quo in, per in quod soleat. Cetero praesent recteque vim te, ut vix decore partem appellantur, et vim dico ancillae. Idque deleniti maluisset eu per. 
          </div>
          
          <div className="actions">
            <a href="" className="btn primary">More information</a>
          </div>
        </div>
      </Page>
    );
  }
}

export default Tools;


