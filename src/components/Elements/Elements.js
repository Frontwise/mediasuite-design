import React, { Component } from 'react';

import { styledText } from  '../../data/Text';

class Elements extends Component {

  render() {
    return (
      <ul className="Elements">
        <li>
          <ul className="palette">
            {['primary','primary-alt','secondary','dark', 'dark-grey','grey-tint', 'grey', 'white'].map((c)=><li key={c} className={'background-color-'+c} title={c}></li>)}
          </ul>
        </li>

        <li>
          <h1>Heading 1</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
        </li>

        <li>
          <p>{styledText}</p>
        </li>

        <li>
          <a href="" className="link" >This is a hyperlink</a>
        </li>

        <li>
          <a href="" className="btn" onClick={(e)=>{e.preventDefault();}}>Default</a>
          <a href="" className="btn white" onClick={(e)=>{e.preventDefault();}}>White</a>
        </li>
        <li>
          <a href="" className="btn primary" onClick={(e)=>{e.preventDefault();}}>Primary</a>
          <a href="" className="btn primary plus" onClick={(e)=>{e.preventDefault();}}>Primary Plus</a>
        <li>
        </li>
          <a href="" className="btn blank" onClick={(e)=>{e.preventDefault();}}>Blank</a>
          <a href="" className="btn blank warning" onClick={(e)=>{e.preventDefault();}}>Blank Warning</a>
        </li>

        <li>
          <label className="label">Name</label>
          <input type="text" />
          <label className="label">Description</label>
          <textarea/>
        </li>
      </ul>
    );
  }
}

export default Elements;
