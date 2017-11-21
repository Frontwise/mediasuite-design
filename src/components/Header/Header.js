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
      transparent: props.transparent || props.active === 'home'
    }

    // Listne to hash change
    window.onhashchange = this.onHashChange.bind(this);
  }


  /**
  * OnHashChange listener: if a menu item is clicked, make it active in the state.
  * This component had to be implemented using 'a href' instead of onClick
  * because for now not the component, but the resulting html is used and served
  * as a static HTML file.
  *
  * This listener is intended to demonstrate the active states of the menu buttons
  */
  onHashChange(){
    let page = window.location.hash.slice(1);
    this.navigate(page);
    console.log(page);
  }

  /**
  * Navigate to a page, make it active and call the navigate callback
  */
  navigate(page){
    this.setState({
        active:page,
        transparent: this.props.transparent || page === 'home'
      });

    this.props.navigate(page);
  }

  /**
  * Build workspace menu button
  */
  getWorkSpace(workspace){
    if (!workspace){
      return null;
    }

    // menu item for user projects (with counter)
    let userProjects = this.getMenuItem('userProjects', (<span className="count">{this.props.workspace.projects.count}</span>), );

    return (
      <div className={classNames("workspace",{ active: ['workspace', 'userProjects'].includes(this.state.active) || this.state.active.startsWith('project-') } )  }>
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
        <div className="account">
          <a className={classNames("account loggedin", {active: ['login', 'myprofile', 'signout'].includes(this.state.active)})} 
           href={"#myprofile"}>
           <i className="icon-person"/>Account
           <span className="username">{user.name}</span>
          </a>

          <ul className="dropdown">
            {this.getMenuItem('myprofile')}
            {this.getMenuItem('signout')}
          </ul>

        </div>
      );
    }

    // login button
    return (
      <div className="account">
        <a className={classNames("account login",{active: this.state.active === 'login'})} 
           href="#login">
           <i className="icon-person"/>{pages.login}
        </a>
      </div>
     );
  }

  /**
  * Get a menu <li> item for the given title with active-state indication and navigation callback
  */
  getMenuItem(page, children){
    let title = pages[page] || page;
    return(
      <li>
        <a className={classNames({active : this.state.active === page})}  href={"#"+page}>{title}{children}</a>
      </li>
    );
  }

  /**
  * Render the component
  */
  render() {
    return (
      <div className={classNames('header', {transparent: this.state.transparent } ) } >
        <a href="#home">
          <div className="logo" />
        </a>

        <ul className="menu main">
          {this.getMenuItem('data')}
          {this.getMenuItem('tools')}
        </ul>

        {this.getWorkSpace(this.props.workspace)}

        {/* right side of the header */}
        <div className="right">

          <ul className="menu sub">
            {this.getMenuItem('about')}
            {this.getMenuItem('documentation')}
            {this.getMenuItem('contact')}
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
