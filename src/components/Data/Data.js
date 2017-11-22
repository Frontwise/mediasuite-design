import React, { Component } from 'react';
import { Page, Header } from '../';
import classNames from 'classnames';

/* Images */
import bigiconData from '../../images/bigicon-data.png';

class Data extends Component {
  
  constructor() {
    super();
    this.state = {contentVisible: true};
  }

  render() {
    let {contentVisible} = this.state;
    
    return (
      <Page header={<Header.Examples.NotLoggedIn active="data" />} className="page Data">
      
        <div className={classNames('content', {hidden: !contentVisible})}>
          <img src={bigiconData} alt="Media Suite Data"/>
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
              <a href="" className="btn">Visit CKAN</a>
            </div>
          </div>
        </div>
        
        <div className="collection-selector-component">
          <h2>[Collection selector component]</h2>
        </div>
          
      </Page>
    );
  }
}

export default Data;


