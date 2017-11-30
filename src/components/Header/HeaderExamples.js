import React, { Component } from 'react';
import { Header } from '../';
import { projects } from '../../data/Projects';

/**
* Example of Header in logged in user state
*/
class LoggedIn extends Component {
  render(){
    return (
      <Header 
        active="about"
        workspace={
          {
            projects: {
              recent: projects,
              count: 25,
              search: (keyword, callback) =>{
                // we want to match only lowercase
                keyword = keyword.toLowerCase();

                // the callback enables you to do an async fetch to get the data
                // now we use just the list of example projects
                callback(projects.filter((p)=>(p.name.toLowerCase().indexOf(keyword) > -1)));
              }
            }
          }
        } 
        user={{
          name:"Jan Janssen"
        }}
        navigate={(page)=>{
          // link to router here
          window.location.hash="#" + page    }
        }
        {...this.props}
      />
    );
  }
}
/**
* Example of Header in logged in user state, without projects
*/
class LoggedInNoProjects extends Component {
  render(){
    return (
      <Header 
        active="about"
        workspace={
          {
            projects: {
              recent: [],
              count: 0,
              search: (keyword, callback) =>{
                // we want to match only lowercase
                keyword = keyword.toLowerCase();

                // the callback enables you to do an async fetch to get the data
                // now we use just the list of example projects
                callback(projects.filter((p)=>(p.name.toLowerCase().indexOf(keyword) > -1)));
              }
            }
          }
        } 
        user={{
          name:"Jan Janssen"
        }}
        navigate={(page)=>{
          // link to router here
          window.location.hash="#" + page    }
        }
        {...this.props}
      />
    );
  }
}

/**
* Example of Header in not logged in state
*/
class NotLoggedIn extends Component {
  render(){
    return (
      <Header 
        active="tools"
        workspace={null} 
        user={null}
        help="example-help"
        navigate={(page)=>{
          // link to router here
          window.location.hash="#" + page    }
        }
        {...this.props}
      />
    );
  }
}

export default {
  LoggedIn, 
  NotLoggedIn,
  LoggedInNoProjects
}