import React, { Component } from 'react';

import { pages } from  '../../data/Pages';

class BreadCrumbs extends Component {


  getPath(page){
    let path = [];
    console.log(page);
    console.log(pages[page]);
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



    return (
      <ul className="BreadCrumbs">      
        <li><a href="#home" className="home"></a>/</li>
        {this.getPath(this.props.activePage).map((path) => ((<li key={path}><a href={path.url}>{path.title}</a>/</li>)))}
      </ul>
    );
  }
}

export default BreadCrumbs;
