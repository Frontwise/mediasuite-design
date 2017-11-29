import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SortTable } from '../';

class ProjectTable extends Component {
  constructor(props){
    super(props);

    this.state={
      projects: [],
      loading: true,
      filter:{
        keywords: '',
        currentUser: false,
      }      
    }
  }


  /**
   * Call filter callback
   */
  update(){

    this.setState({
      loading: true
    });

    this.props.api.list(this.props.user.id, this.state.filter, this.setProjects.bind(this));
  }


 
  /**
   * Set new list of projects to state
   * @param {array} projects List of projects
   */
  setProjects(projects){
    this.setState({
      projects,      
      loading: false,
    });
  }


  /**
   * Keywords filter changes
   * @param {SyntheticEvent} e Event
   */
  keywordsChange(e){
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        keywords: e.target.value
      })
    });
  }

  /**
   * Keywords filter changes
   * @param {SyntheticEvent} e Event
   */
  currentUserChange(e){
    this.setState({
      filter: Object.assign({}, this.state.filter, {
        currentUser: e.target.checked
      })
    });
  }

  /**
   * After mounting, retrieve project data
   */
  componentDidMount(){
    this.update();
  }
  /**
   * Listen for updates, request new data if filter has been changed
   */
  componentDidUpdate(){
    if (this.lastFilter !== this.state.filter){
      this.lastFilter = this.state.filter;
      this.update();
    }
  }



  /**
   * Delete project if confirmed
   * @param {object} project Project to delete
   */
  deleteProject(project){
    if (window.confirm('Are you sure you want to delete project ' + project.name)){
      this.props.api.delete(project.id, (status)=>{
        if (status && status.success){

          // just retrieve the latest data
          this.update();
        }
      });
    }
  }

  /**
   * Export project
   * @param {object} project Project to export
   */
  exportProject(project){
    window.open("data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(project, null, 4)));
  }


   /**
   * Sort projects based on sort
   */
   sortProjects(projects, sort){
     let sorted = projects;
     switch(sort.field){
      case 'name':
        sorted.sort((a,b)=>(a.name > b.name));
      break;
      case 'bookmarks':
        sorted.sort((a,b)=>(a.bookmarks.length - b.bookmarks.length));
      break;
      case 'owner':
        sorted.sort((a,b)=>(a.owner.name > b.owner.name));
      break;
      case 'access':
        sorted.sort((a,b)=>(a.getAccess(this.props.user.id) > b.getAccess(this.props.user.id)));
      break;
      default:
        // no sorting,just return
        return sorted;
     }

     return sort.order === 'desc' ? sorted.reverse() : sorted;

   }



  render() {
    let projects = this.state.projects;
    let currentUser = this.props.user;
    let currentUserId = currentUser.id;

    return (
      <div className="ProjectTable">

        <div className="filters">
          <div className="left">
            <h3>Filters</h3>
            <input className="search"
                   type="text"
                   placeholder="Search"
                   value={this.state.filter.keywords}
                   onChange={this.keywordsChange.bind(this)}
                   />
            <input type="checkbox"
                   id="current-user"
                   checked={this.state.filter.currentUser}
                   onChange={this.currentUserChange.bind(this)}
                   />
            <label htmlFor="current-user">Show only my projects</label>
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

        <SortTable
            items={projects}
            head={[                
                {field: 'name', content: 'Name', sortable: true},
                {field: 'bookmarks', content: <i className="bookmark-icon"/>, sortable: true},
                {field: 'owner', content: 'Owner', sortable: true},
                {field: 'access', content: 'Access', sortable: true},
                {field: '', content: '', sortable: false},
                {field: '', content: '', sortable: false},
                {field: '', content: '', sortable: false},
              ]}
            row={(project)=>(
                    [
                      { props:{className:"primary"}, content: <a href={"#projectDetails-" + project.id}>{project.name}</a> },
                      { props:{className:"number"}, content: project.getBookmarkCount()},
                      { content: <span>{project.owner.name} {project.getCollaboratorCount() ? <span className="collaborators">{project.getCollaboratorCount()} Collaborator{project.getCollaboratorCount() !== 1 ? 's' : ''}</span> : ''}</span> },
                      { props: { className: "access"}, content: project.getAccess(currentUserId) },
                      { content: project.canDelete(currentUserId) ? <a className="btn blank warning" onClick={this.deleteProject.bind(this,project)}>Delete</a> : ''},
                      { content: project.canExport(currentUserId) ? <a className="btn blank" onClick={this.exportProject.bind(this,project)}>Export</a> : ''},
                      { content: project.canOpen(currentUserId) ? <a href={"#projectDetails-" + project.id} className="btn">Open</a> : ''}
                    ]
                )}
            sort={this.sortProjects.bind(this)}
            loading={this.state.loading}
           />
      </div>
    );
  }
}

ProjectTable.propTypes = {

  // project api
  api: PropTypes.shape({
    list: PropTypes.func.isRequired
  }),

  // current user object used for defining access roles per project
  user: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
}

export default ProjectTable;
