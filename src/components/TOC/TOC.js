import React, { Component } from 'react';
import classNames from 'classnames';

export default class TOC extends Component {
  
  constructor() {
    super();
    this.state = {activeIndex: 0};
  }
  
  componentDidMount() {
    document.documentElement.addEventListener('scroll', this.handleScroll, {passive: true});
  }

  componentWillUnmount() {
    document.documentElement.removeEventListener('scroll', this.handleScroll);
  }


  handleScroll() {
    console.log('hoi');
    var scrollTop = document.documentElement.scrollTop;
    this.refs.nav.getDOMNode()
    
    var minTop = 999999;
    var activeIndex = this.state.activeIndex;
    this.props.children.forEach((_, i) => {
      let top = this.refs[i].getDOMNode().getBoundingClientRect().top;
      if (top > 0 && top < minTop) {
        minTop = top;
        activeIndex = i;
      }
    });
    
    this.setState({activeIndex});
  }
  
  render() {
    const {children} = this.props;
    const {activeIndex} = this.state;
    
    return (
      <div className="TOC">
        <ul className="toc">
          {children.map((child, i) =>
            <li key={i} className={classNames('indent-' + child.indentation, {active: i == activeIndex})} >
              {child.title}
            </li>
          )}
        </ul>
        
        <div className="children">
          {children.map((child, i) =>
            <div 
              className="child"
              key={i}
              ref={i}
            >
              {child.elem}
            </div>
          )}
        </div>
      </div>
    );
  }
}
    