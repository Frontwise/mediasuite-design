import React, { Component } from 'react';
import { Page, Header } from '../';
import TOC from '../TOC/TOC';

export default class Contact extends Component {
  
  render() {
    
    return (
      <Page header={<Header.Examples.NotLoggedIn active="contact" />} className="page Contact">
      
        <TOC children={[
          {
            title: <span>Contact information</span>,
            indentation: 0,
            anchor: 'contact-info',
            elem: <div>
              <h1>Contact information</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>
                Qualisque 12<br/>
                123AB Signiferumque<br/>
                01 23 45 67 89<br/>
                mediasuite@clariah.nl
              </p>
            </div>,
          },
          {
            title: <span>Feedback form</span>,
            indentation: 0,
            anchor: 'contact-context',
            elem: <div>
              <h1>Feedback form</h1>
              <form>
                {['Name', 'Organization', 'E-mail address'].map((label, index) => <span key={index}>
                  <label className="label">{ label }</label>
                  <input type="text"/>
                </span> )}
                
                <label className="label">Your message</label>
                <textarea></textarea>
                <br />
                
                <input type="submit" className="btn primary"/>
              </form>
            </div>,
          },
          {
            title: <span>External links</span>,
            indentation: 0,
            anchor: 'contact-links',
            elem: <div>
              <h1>External links</h1>
              <div className="external-links">
                <a href="http://www.lorumipsum.nl/decore/partem.html" rel="noopener noreferrer" target="_blank">
                  http://www.lorumipsum.nl/decore/partem.html
                </a> 
                <a href="http://www.lorumipsum.nl/decore/partem.html" rel="noopener noreferrer" target="_blank">
                  http://www.lorumipsum.nl/decore/partem.html
                </a> 
                <a href="http://www.lorumipsum.nl/decore/partem.html" rel="noopener noreferrer" target="_blank">
                  http://www.lorumipsum.nl/decore/partem.html
                </a> 
                <a href="http://www.lorumipsum.nl/decore/partem.html" rel="noopener noreferrer" target="_blank">
                  http://www.lorumipsum.nl/decore/partem.html
                </a> 
              </div>
            </div>,
          },
        ]} />
        
      </Page>
    );
  }
}

