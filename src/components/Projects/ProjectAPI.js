/**
 * This is a placeholder API, inspired by
 * https://github.com/beeldengeluid/labo-components/blob/master/app/api/UserSpaceAPI.js
 */
import { projects, deleteProject } from '../../data/Projects';

const ProjectAPI = {

  /**
   * userId should be handled by the API (* removed *)
   */
  save : function (project, callback) {
    callback({success:'Saved succesfully *dummy message*'});
  },

  /**
   * userId should be handled by the API (* removed *)
   */
  delete : function(projectId, callback) {
    deleteProject(projectId);
    callback({success:'Deleted succesfully *dummy message*'});
  },

  /**
   * List projects
   * @param  int    userId   current user id
   * @param  object filter   contains filter config (*added*)
   */
  list : function(userId, filter, callback) {
    let result = projects.filter((project)=>(project.getAccess(userId)));

    // example filters (should be processed by the API)
    if (filter.keywords){
      let keywords = filter.keywords.split(" ");
      keywords.forEach((k)=>{
        k = k.toLowerCase();
        result = result.filter((project)=>(project.name.toLowerCase().includes(k) || project.description.toLowerCase().includes(k)))
      });
    }
    if (filter.currentUser){
      result = result.filter((project)=>(project.owner.id === userId))
    }


    // give it some timeout, to simulate api responses
    setTimeout(callback.bind(this,result), 400);
  }

}

export default ProjectAPI;