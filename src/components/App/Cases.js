import React from 'react';
import Header from '../Header/Header';
import Page from '../Page/Page';
import Elements from '../Elements/Elements';
import Homepage from '../Homepage/Homepage';
import Data from '../Data/Data';
import Tools from '../Tools/Tools';
import About from '../About/About';
import {text} from '../../data/Text';

/** 
* Cases show of the componnents
*/
class Case{
  constructor (title, component){
    this.title = title;
    this.component = component;
  }
}

/**
* Create a new Case with given title and component
*/
const newCase = (title, component) => (new Case(title, component));

export default [
  newCase('Elements', (<Elements /> )),
  newCase('Header (logged in)', (<Header.Examples.LoggedIn /> )),
  newCase('Header (not logged in)', (<Header.Examples.NotLoggedIn /> )),
  newCase('Default Page', (
    <Page>
      <div className="content">
        <div className="text-body">
          <h1>Default page</h1>
          <h2>Subject</h2>
          <p>{text}</p>
        </div>
      </div>
    </Page>
  )),
  newCase('Homepage', (<Homepage /> )),
  newCase('Data', (<Data />)),
  newCase('Tools', (<Tools />)),
  newCase('About', (<About />)),
]