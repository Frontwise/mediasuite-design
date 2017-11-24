/**
* Constant pagenames/titles for all pages
*/
export const pages = {
  home: {title: 'Home'},
  
  data: {title: 'Data'},
  
  tools: {title: 'Tools'},
    toolDetails: {title: 'Tooldetails', parent: 'tools'},
  
  workspace: {title: 'Workspace'},
    userProjects: {title: 'User Projects', parent: 'workspace'},
      'newProject': {title: 'Create', parent: 'userProjects'},
      'project-1': {title: 'Watersnoodramp', parent: 'userProjects'},
      'project-2': {title: 'Pim Fortuyn', parent: 'userProjects'},
      'project-3': {title: 'Immigratie', parent: 'userProjects'},
      'project-4': {title: 'Paars kabinet', parent: 'userProjects'},
      'project-5': {title: 'Nationale rampen', parent: 'userProjects'},
      // etc
  
  about: {title: 'About'},
  
  documentation: {title: 'Documentation'},
  
  contact: {title: 'Contact'},

  login: {title: 'Login'},

  account: {title: 'Account'},
    myprofile: {title: 'My profile', parent: 'account'},
    signout: {title: 'Sign out', parent: 'account'}
}

export const getPageRoot = (page) =>{
  if (!(page in pages)){
    return  '';
  }
  console.log(page, pages);
  while(pages[page].parent ){
    page = pages[page].parent;
  }
  return page;
}
