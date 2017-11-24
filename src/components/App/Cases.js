import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Complete from '../Complete/Complete';
import Data from '../Data/Data';
import Docs from '../Docs/Docs';
import Elements from '../Elements/Elements';
import Header from '../Header/Header';
import Homepage from '../Homepage/Homepage';
import Page from '../Page/Page';
import Projects from '../Projects/Projects';
import Tools from '../Tools/Tools';

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
  newCase('Header', (<Header.Examples.NotLoggedIn /> )),
  newCase('Header (logged in)', (<Header.Examples.LoggedIn /> )),
  newCase('Header (no projects)', (<Header.Examples.LoggedInNoProjects /> )),
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
  newCase('Docs', (<Docs />)),
  newCase('Contact', (<Contact />)),
  newCase('Projects', (<Projects />)),
  newCase('Complete', (<Complete />)),  
]