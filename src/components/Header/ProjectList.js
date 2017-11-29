import React, { Component } from 'react';

class ProjectList extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: props.recent
    }
  }

  search(keyword){
    if (!keyword){
      // no keyword: show recents
      this.setState({list: this.props.recent});
    } else{
      // search
      this.props.search(keyword, (projects)=>{
        this.setState({list: projects});
      });
    }
  }

  render(){    

    return(
      <div className="projects">
        <input placeholder="Search project" ref={(elem)=>{this.searchInput = elem; }} onChange={()=>{ this.search(this.searchInput.value); }}/>
        <div className="list">
          {this.state.list.slice(0,6).map((p)=>(<a key={p.id} href={'#project-' + p.id}>{p.name}</a>))}
        </div>
      </div>
    )
  }
}

export default ProjectList;