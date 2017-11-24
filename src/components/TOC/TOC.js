import React, { Component } from 'react';
import classNames from 'classnames';

export default class TOC extends Component {

  constructor() {
    super();
    this.state = {activeIndex: 0};
    this.handleScrollFunc = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.listenToScroll(true);
  }

  componentWillUnmount() {
    this.listenToScroll(false); 
  }

  listenToScroll(active){
    if (active){
      window.addEventListener('scroll', this.handleScrollFunc, {passive: true});
    } else{
      window.removeEventListener('scroll', this.handleScrollFunc);  
    }
  }

  handleScroll() {
    var minTop = Infinity;
    var activeIndex = this.state.activeIndex;
    var centerOfScreenY = window.innerHeight / 2;

    for (var i = 0; i < this.props.children.length; i++) {
      if (!this.refs[i]) { return; }

      let rect = this.refs[i].getBoundingClientRect();

      if (rect.top < centerOfScreenY && rect.bottom > centerOfScreenY) {
        activeIndex = i;
        break;
      }

      var top = Math.abs(top);
      if (top < minTop) {
        minTop = top;
        activeIndex = i;
      }
    }

    this.setState({activeIndex});
  }

  setActive(index){
    // disable scroll listener, so we keep the highlight state of the
    // clicked elements
    this.listenToScroll(false); 

    // update state
    this.setState({activeIndex: index}); 

    // wait 100ms before reenabling scroll listener, giving the browser
    // some time to scroll to the anchor
    // this is a little hacky, but it works! :)
    setTimeout(this.listenToScroll.bind(this,true), 100);
  }

  render() {
    const {children} = this.props;
    const {activeIndex} = this.state;

    return (
      <div className="TOC">
        <div className="toc">
          {children.map((child, i) =>
            <a
              href={'#' + child.anchor}
              key={i}
              className={classNames('indent-' + child.indentation, {active: i === activeIndex})}
              onClick={this.setActive.bind(this, i)}
            >
              {child.title}
            </a>
          )}
        </div>

        <div className="children">
          {children.map((child, i) =>
            <div
              className="child"
              id={child.anchor}
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
