import React, { Component } from 'react';
import ProjectList from './ProjectList';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pages, getPageRoot } from '../../data/Pages';
import HeaderExamples from './HeaderExamples';
import { BreadCrumbs, Help } from '../';

class Header extends Component {

  constructor(props){
    super(props);

    this.state = {
      active: props.active,
      transparent: props.transparent || props.active === 'home'
    }

    // Listen to hash change
    this.hashChangeListener = this.onHashChange.bind(this);
    window.addEventListener('hashchange', this.hashChangeListener);
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
    if (page in pages){
      this.navigate(page);
    }
  }

  /**
  * Unmount component; remove listeners
  */
  componentWillUnmount(){
    window.removeEventListener('hashchange', this.hashChangeListener);
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
    console.log(getPageRoot(this.state.active), getPageRoot(this.state.active) === 'workspace');
    return (
      <div className="workspace">
        <a href="#workspace" className={classNames({ active: getPageRoot(this.state.active) === 'workspace' || this.state.active.startsWith('project-') } )}><i className="icon-workspace"/>Workspace</a>

        <ul className="dropdown">
          {userProjects}

          {this.props.workspace.projects.count ?

          <li className="projects">
            <ProjectList {...this.props.workspace.projects} navigate={this.navigate.bind(this)}/>
          </li>

          :
          <li className="new-project">
            <p>You don't have any projects yet.</p>

            <a href="#newProject" className="button-holder">
              <div className="btn primary plus">
                Create User Project
              </div>
            </a>
          </li>

          }


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
          <a className={classNames("account loggedin", {active: getPageRoot(this.state.active) === 'account'})}
           href={"#myprofile"}>
           <i className="icon-person"/>{pages.account.title}
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
           <i className="icon-person"/>{pages.login.title}
        </a>
      </div>
     );
  }

  /**
  * Get a menu <li> item for the given title with active-state indication and navigation callback
  */
  getMenuItem(page, children){

    let title = pages[page].title || page;
    return(
      <li>
        <a className={classNames({active : getPageRoot(this.state.active) === page})}  href={"#"+page}>{title}{children}</a>
      </li>
    );
  }

  /**
  * Render the component
  */
  render() {
    return (
      <div className="Header">
        <div className={classNames('top-bar', {transparent: this.state.transparent } ) } >
          <a href="#home" className="logo"></a>
          <div className="hamburger"/>

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

        <BreadCrumbs activePage={this.state.active}/>

        <Help id={this.props.help} />

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

  // help id
  help: PropTypes.string,

  // breadcrumb path, excluding home
  breadCrumb: PropTypes.arrayOf(PropTypes.shape({
     url: PropTypes.string.isRequired,
     title: PropTypes.string.isRequired,
   })),
}

Header.Examples = HeaderExamples;


export default Header;
