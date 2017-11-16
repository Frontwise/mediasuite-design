import React, { Component } from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pages } from '../../data/Pages';
import HeaderExamples from './HeaderExamples';

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: props.active,
      transparent: props.transparent || props.active === pages.home
    }
  }

  /**
  * Navigate to a page, make it active and call the navigate callback
  */
  navigate(page, e){
    this.setState({
        active:page,
        transparent: this.props.transparent || page === pages.home
      });

    this.props.navigate(page);

    e.stopPropagation();
  }

  /**
  * Build workspace menu button
  */
  getWorkSpace(workspace){
    if (!workspace){
      return null;
    }

    // menu item for user projects (with counter)
    let userProjects = this.getMenuItem(pages.userProjects, (<span className="count">{this.props.workspace.projects.count}</span>));

    return (
      <div className={classNames("workspace",{active: [pages.workspace, pages.userProjects].includes(this.state.active)})}>
        <i className="icon-workspace"/>Workspace
        
        <ul className="dropdown">
          {userProjects}
          <li className="projects">
            <ProjectList {...this.props.workspace.projects} navigate={this.navigate.bind(this)}/>
          </li>
        </ul>
      </div>
    );
  }

  /**
  * Build account menu button
  */
  getAccount(user){

    if (user){

      // Account button
      return (
        <div className={["account loggedin", [pages.login, pages.myprofile, pages.signout].indexOf(this.state.active) > -1 ? 'active' : ''].join(" ")}
           onClick={this.navigate.bind(this,pages.myprofile)}
           >
           <i className="icon-person"/>Account <span className="username">{user.name}</span>

           <ul className="dropdown">
              {this.getMenuItem(pages.myprofile)}
              {this.getMenuItem(pages.signout)}
            </ul>

        </div>
      );
    }

    // login button
    return (
      <div className={["account login",this.state.active === pages.login ? 'active' : ''].join(" ")}
           onClick={this.navigate.bind(this,pages.login)}>
           <i className="icon-person"/>Login
       </div>
     );
  }

  /**
  * Get a menu <li> item for the given title with active-state indication and navigation callback
  */
  getMenuItem(title, children){
    return(
      <li
        className={this.state.active === title ? 'active': ''}
        onClick={this.navigate.bind(this,title)}
        >
        {title}{children}
      </li>
    );
  }

  /**
  * Render the component
  */
  render() {
    return (
      <div className={classNames('header', {transparent: this.state.transparent } ) } >
        <div
          className="logo"
          onClick={this.navigate.bind(this,pages.home)}
          />

        <ul className="menu main">
          {this.getMenuItem(pages.data)}
          {this.getMenuItem(pages.tools)}
        </ul>

        {this.getWorkSpace(this.props.workspace)}

        {/* right side of the header */}
        <div className="right">

          <ul className="menu sub">
            {this.getMenuItem(pages.about)}
            {this.getMenuItem(pages.documentation)}
            {this.getMenuItem(pages.contact)}
          </ul>

          {this.getAccount(this.props.user)}
        </div>

      </div>
    );
  }
}


Header.propTypes = {
  // active page
  active: PropTypes.string.isRequired,

  // transparent header (automatically when active == 'home')
  transparent: PropTypes.bool,

  // workspace object
  workspace: PropTypes.shape({
    projects : PropTypes.shape({
      count: PropTypes.number,
      recent: PropTypes.array,
      search: PropTypes.func,
    })
  }),

  // user object
  user: PropTypes.shape({
    name: PropTypes.string
  }),

  // navigation callback
  navigate: PropTypes.func.isRequired,
}

Header.Examples = HeaderExamples;


export default Header;
