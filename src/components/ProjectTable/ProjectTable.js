import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectTable extends Component {

  render() {
    let projects = this.props.projects;
    let currentUser = this.props.currentUser;

    return (
      <div className="ProjectTable">

        <div className="filters">
          <div className="left">
            <h3>Filters</h3>
            <input className="search" type="text" placeholder="Search" />
            <input type="checkbox" id="only-my-projects" />
            <label htmlFor="only-my-projects">Show only my projects</label>
          </div>

          { /*<div className="right">
            <h3>Order</h3>
            <select>
              <option>Newest first</option>
              <option>Oldest first</option>
              <option>Name A-Z</option>
              <option>Name Z-A</option>
              <option>Bookmarks</option>
              <option>Owner</option>
              <option>Access</option>
            </select>
          </div> */ }


        </div>

        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th><i className="bookmark-icon"/></th>
              <th>Owner</th>
              <th>Access</th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>

              {projects.map((project)=>(
                <tr key={project.id}>
                  <td><input type="checkbox" /></td>
                  <td className="primary"><a href={"#projectDetails-" + project.id}>{project.title}</a></td>
                  <td className="number">{project.getBookmarkCount()}</td>
                  <td>{project.owner} {project.getCollaboratorCount() ? <span className="collaborators">{project.getCollaboratorCount()} Collaborator{project.getCollaboratorCount() !== 1 ? 's' : ''}</span> : ''}</td>
                  <td className="access">{project.getAccess(currentUser)}</td>
                  <td>{project.canDelete(currentUser) ? <a href={"#deleteProject-" + project.id} className="btn blank warning">Delete</a> : ''}</td>
                  <td>{project.canExport(currentUser) ? <a href={"#exportProject-" + project.id} className="btn blank">Export</a> : ''}</td>
                  <td>{project.canOpen(currentUser) ? <a href={"#projectDetails-" + project.id} className="btn">Open</a> : ''}</td>
                </tr>
              ))}

          </tbody>
        </table>
      </div>
    );
  }
}

ProjectTable.propTypes = {

  // list of projects
  projects: PropTypes.array,

  // current user id, used for defining access roles per project
  currentUser: PropTypes.string,
}

export default ProjectTable;
