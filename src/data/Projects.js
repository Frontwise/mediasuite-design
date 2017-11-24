/** 
* Project
*/
class Project{
  constructor (id, title, description, isPublic, owner, collaborators=[], bookmarks = []){
    this.id = id;
    this.title = title;
    this.description = description;
    this.isPublic = isPublic;
    this.owner = owner;
    this.collaborators = collaborators;
    this.bookmarks = bookmarks;
    
  }

  getAccess(user){   
    if (this.owner === user){
      return 'admin';
    }
    if (this.collaborators.includes(user)){
      return 'collaborator';
    }
    if (this.isPublic){
      return 'public';
    }
    return false;
  }

  getBookmarkCount(){
    return this.bookmarks ? this.bookmarks.length : 0;
  }

  getCollaboratorCount(){
    return this.collaborators ? this.collaborators.length : 0;
  }

  canDelete(user){
    return this.getAccess(user) === 'admin';
  }

  canExport(user){
    return true;
  }

  canOpen(user){
    return true;
  }

  isOwner(user){
    return this.owner === user;
  }
}

let currentUser = 'jan_janssen';
let user1 = 'piet_pietsen';
let user2 = 'hans_hanssen';
let exampleDescription = 'Lorem ipsum dolor sit amet, nec te atqui scribentur.';

/**
* Some example projects with different kind of configurations/owners
*/
export const projects = [
  new Project(1, "Watersnoodramp", exampleDescription, true, currentUser, [user1, user2]),
  new Project(2, "Pim Fortuyn", exampleDescription, true, currentUser, [user1]),
  new Project(3, "Immigratie", exampleDescription, true, currentUser),
  new Project(4, "Paars kabinet", exampleDescription, true, user1),
  new Project(5, "Nationale rampen", exampleDescription, true, user1, [currentUser]),
  new Project(6, "Rol van Radio bij nationale rampen gedurende de nadagen van de Tweede Wereldoorlog", exampleDescription, true, user1),
  new Project(7, "Het leven van Koningin Beatrix", exampleDescription, true, currentUser, [user1, user2]),
  new Project(8, "Voedselveiligheid in het nieuws", exampleDescription, true, currentUser, [user1, user2]),
  new Project(9, "Censuur op de buis", exampleDescription, true, currentUser, [user1, user2]),
  new Project(10, "Spoorwegen op glad ijs", exampleDescription, true, user2),
];
