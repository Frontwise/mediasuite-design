import React, { Component } from 'react';

import { pages } from  '../../data/Pages';

class BreadCrumbs extends Component {


  getPath(page){
    let path = [];
    let index = path.push(Object.assign({}, pages[page], {url: '#' + page} ));    
    while(path[index - 1].parent ){
      index = path.push(Object.assign({}, pages[path[index - 1].parent], {url: '#' + path[index - 1].parent} ));      
    }
    return path.reverse();
  }

  render() {
    // hide on homepage
    if (this.props.activePage === 'home'){
      return null;
    }

    let path = this.getPath(this.props.activePage);
    let pathLen = path.length;

    return (
      <ul className="BreadCrumbs">      
        <li><a href="#home" className="home"> </a>/</li>
        {path.map((path,index) => ((<li key={index}><a href={path.url}>{path.title}</a>{index < pathLen - 1  ? '/' : ''}</li>)))}
      </ul>
    );
  }
}

export default BreadCrumbs;
