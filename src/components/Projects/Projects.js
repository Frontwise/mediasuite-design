import React, { Component } from 'react';
import { Header, Page, ProjectTable } from '../';
import { users } from '../../data/Users';
import ProjectAPI from './ProjectAPI';


class Projects extends Component {

  render() {
    return (
      <Page header={<Header.Examples.LoggedIn active="userProjects" />} className="page Projects">
          <div className="content">

            <div className="info-bar">
                <a href="#createProject" className="btn primary add">Create User Project</a>
                <h2>User Projects</h2>
                <p>Store and share Bookmarks & annotations and Tool Sessions</p>
            </div>

            <ProjectTable api={ProjectAPI} user={users[0]} />

          </div>
      </Page>
    );
  }
}

export default Projects;
