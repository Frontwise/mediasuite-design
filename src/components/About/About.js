import React, { Component } from 'react';
import { Page, Header } from '../';

/* Images */
import bigiconClariah from '../../images/bigicon-clariah.png';
import bigiconData from '../../images/bigicon-data.png';
import bigiconTools from '../../images/bigicon-tools.png';
import bigiconWorkspace from '../../images/bigicon-workspace.png';

class About extends Component {
  
  render() {
    
    return (
      <Page header={<Header.Examples.NotLoggedIn active="about" />} className="page About">
      
        <div className="content">
          <img src={bigiconClariah} alt="Clariah"/>
          <div className="info">
            <div className="description">
              <p>
                Lorem ipsum dolor sit amet, nec te atqui scribentur. Diam molestie posidonium te sit, ea sea expetenda suscipiantur contentiones, vix ex maiorum denique. Quo detracto recusabo lobortis ei, ne labores sapientem pri, ex zril option aperiri mea. Ad magna utamur molestiae cum. Et dicam antiopam vel, ludus graeco recusabo quo in, per in quod soleat. Cetero praesent recteque vim te, ut vix decore partem appellantur, et vim dico ancillae. Idque deleniti maluisset eu per. 
              </p>
            </div>
            
            <div className="actions">
              <a href="" className="btn">View showcases</a>
              <a href="" className="btn">Visit our blog</a>
            </div>
          </div>
        </div>
        
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam natus quas recusandae, voluptas accusamus nihil maxime voluptates. Id fugiat numquam, est error iusto eos. Nostrum pariatur illum recusandae totam laudantium!</p>
          <p>Qualisque signiferumque per an. Qui ei tota honestatis, repudiandae liberavisse reprehendunt ad per. Mel ei aeque sonet, eruditi minimum nostrum vel in, mei et hinc vulputate. Ius populo equidem graecis ad, harum alienum contentiones no mea. </p>
          <p>Ne dolore iracundia sea, est omnis molestiae in. Sit ad mundi aliquam molestiae, eam cu erat posse referrentur, cum te quodsi adipisci interpretaris. Mei soluta euismod ut, mel ex meis mnesarchum. Habeo ubique senserit vel ei, no porro consulatu est.</p>
          <p>Diam molestie posidonium te sit, ea sea expetenda suscipiantur contentiones, vix ex maiorum denique. Quo detracto recusabo lobortis ei, ne labores sapientem pri, ex zril option aperiri mea. Ad magna utamur molestiae cum. Et dicam antiopam vel, ludus graeco recusabo quo in, per in quod soleat. Cetero praesent recteque vim te, ut vix decore partem appellantur, et vim dico ancillae. Idque deleniti maluisset eu per. </p>
          <p>Qualisque signiferumque per an. Qui ei tota honestatis, repudiandae liberavisse reprehendunt ad per. Mel ei aeque sonet, eruditi minimum nostrum vel in, mei et hinc vulputate. Ius populo equidem graecis ad, harum alienum contentiones no mea. </p>
          <p>Ne dolore iracundia sea, est omnis molestiae in. Sit ad mundi aliquam molestiae, eam cu erat posse referrentur, cum te quodsi adipisci interpretaris. Mei soluta euismod ut, mel ex meis mnesarchum. Habeo ubique senserit vel ei, no porro consulatu est.</p>
        </div>
        
        <div className="suite">
          <h2>Media Suite</h2>
          <div className="block">
            <div>
              <img src={bigiconData} alt="Media Suite Data"/>
              <h3>Data</h3>
            </div>
            <div>
              <img src={bigiconTools} alt="Media Suite Tools"/>
              <h3>Tools</h3>
            </div>
            <div>
              <img src={bigiconWorkspace} alt="Media Suite Workspace"/>
              <h3>Workspace</h3>
            </div>
          </div>
        </div>
        
        <div className="text">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam natus quas recusandae, voluptas accusamus nihil maxime voluptates. Id fugiat numquam, est error iusto eos. Nostrum pariatur illum recusandae totam laudantium!</p>
          <p>Qualisque signiferumque per an. Qui ei tota honestatis, repudiandae liberavisse reprehendunt ad per. Mel ei aeque sonet, eruditi minimum nostrum vel in, mei et hinc vulputate. Ius populo equidem graecis ad, harum alienum contentiones no mea. </p>
          <p>Ne dolore iracundia sea, est omnis molestiae in. Sit ad mundi aliquam molestiae, eam cu erat posse referrentur, cum te quodsi adipisci interpretaris. Mei soluta euismod ut, mel ex meis mnesarchum. Habeo ubique senserit vel ei, no porro consulatu est.</p>
          <p>Diam molestie posidonium te sit, ea sea expetenda suscipiantur contentiones, vix ex maiorum denique. Quo detracto recusabo lobortis ei, ne labores sapientem pri, ex zril option aperiri mea. Ad magna utamur molestiae cum. Et dicam antiopam vel, ludus graeco recusabo quo in, per in quod soleat. Cetero praesent recteque vim te, ut vix decore partem appellantur, et vim dico ancillae. Idque deleniti maluisset eu per. </p>
          <p>Qualisque signiferumque per an. Qui ei tota honestatis, repudiandae liberavisse reprehendunt ad per. Mel ei aeque sonet, eruditi minimum nostrum vel in, mei et hinc vulputate. Ius populo equidem graecis ad, harum alienum contentiones no mea. </p>
          <p>Ne dolore iracundia sea, est omnis molestiae in. Sit ad mundi aliquam molestiae, eam cu erat posse referrentur, cum te quodsi adipisci interpretaris. Mei soluta euismod ut, mel ex meis mnesarchum. Habeo ubique senserit vel ei, no porro consulatu est.</p>
        </div>
        
      </Page>
    );
  }
}

export default About;


