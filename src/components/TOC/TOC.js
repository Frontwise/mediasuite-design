import React, { Component } from 'react';
import classNames from 'classnames';

export default class TOC extends Component {

  constructor() {
    super();
    this.state = {activeIndex: 0};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this), {passive: true});
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
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
              onClick={() => this.setState({activeIndex: i})}
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
