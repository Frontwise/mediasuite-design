import React, { Component } from 'react';
import { Page, Header } from '../';
import TOC from '../TOC/TOC';

class Docs extends Component {
  
  render() {
    
    return (
      <Page header={<Header.Examples.NotLoggedIn active="docs" />} className="page Docs">
      
        <TOC children={[
          {
            title: <span>Introduction</span>,
            indentation: 0,
            elem: <div>
              <h1>Introduction</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
            </div>,
          },
          {
            title: <b>1. Context</b>,
            indentation: 0,
            elem: <div>
              <h1>1. Context</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
            </div>,
          },
          {
            title: <b>2. Data</b>,
            indentation: 0,
            elem: <div>
              <h1>2. Data</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
            </div>,
          },
          {
            title: <span>4.1 User Projects</span>,
            indentation: 1,
            elem: <div>
              <h3>4.1 User Projects</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, aut id, consequatur ipsam quam dolorem magni laborum asperiores assumenda quos voluptatum? Quo dignissimos, possimus voluptatem odio odit fugit ea accusantium.</p>
            </div>,
          },
        ]} />
        
      </Page>
    );
  }
}

export default Docs;


