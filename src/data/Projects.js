import {users} from './Users';

/**
* Project
*/
class Project{
  constructor (id, name, description, isPrivate, owner, collaborators=[], bookmarks = []){
    this.id = id;
    this.name = name;
    this.description = description;
    this.isPrivate = isPrivate;
    this.owner = owner;
    this.created = new Date();
    this.updated = new Date();

    this.collaborators = collaborators;
    this.bookmarks = bookmarks;
    this.subjects = [];
  }

  getAccess(userId){
    if (this.owner.id === userId){
      return 'admin';
    }
    if (this.collaborators.includes(userId)){
      return 'collaborator';
    }
    if (this.isPublic()){
      return 'public';
    }
    return false;
  }

  isPublic(){
    return !this.isPrivate;
  }

  getBookmarkCount(){
    return this.bookmarks ? this.bookmarks.length : 0;
  }

  getCollaboratorCount(){
    return this.collaborators ? this.collaborators.length : 0;
  }

  canDelete(userId){
    return this.getAccess(userId) === 'admin';
  }

  canExport(userId){
    return this.getAccess(userId);
  }

  canOpen(userId){
    return this.getAccess(userId);
  }

  isOwner(userId){
    return this.owner.id === userId;
  }
}

let currentUser = users[0];
let user1 = users[1];
let user2 = users[2];
let exampleDescription = 'Lorem ipsum dolor sit amet, nec te atqui scribentur.';

/**
* Some example projects with different kind of configurations/owners
*/
export let projects = [
  new Project(1, "Watersnoodramp", exampleDescription, true, currentUser, [user1, user2]),
  new Project(2, "Pim Fortuyn", exampleDescription, true, currentUser, [user1]),
  new Project(3, "Immigratie", exampleDescription, true, currentUser),
  new Project(4, "Paars kabinet", exampleDescription, false, user1),
  new Project(5, "Nationale rampen", exampleDescription, false, user1, [currentUser]),
  new Project(6, "Rol van Radio bij nationale rampen gedurende de nadagen van de Tweede Wereldoorlog", exampleDescription, false, user1),
  new Project(7, "Het leven van Koningin Beatrix", exampleDescription, false, currentUser, [user1, user2]),
  new Project(8, "Voedselveiligheid in het nieuws", exampleDescription, false, currentUser, [user1, user2]),
  new Project(9, "Censuur op de buis", exampleDescription, false, currentUser, [user1, user2]),
  new Project(10, "Spoorwegen op glad ijs", exampleDescription, false, user2),
  new Project(11, "Mijn privé project", exampleDescription, true, user2),
];

/**
* Delete project
*/

export const deleteProject = (id) =>{
  projects = projects.filter((project)=>(project.id!== id));
}