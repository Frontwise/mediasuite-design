import React, { Component } from 'react';
import { pages } from '../../data/Pages';
import { Header, Homepage, Data, Tools, ToolDetails, About, Docs, Contact, Page } from '../';

class Complete extends Component {

  constructor(props){
    super(props);

    this.state = { active: 'home'}

    // Listen to hash change
    this.hashChangeListener = this.onHashChange.bind(this);
    window.addEventListener('hashchange', this.hashChangeListener);
  }

  /**
  * Listen to the hash change, so we can do some navigation
  */
  onHashChange(){
    let page = window.location.hash.slice(1);
    if (page in pages){
      this.navigate(page);
    }
  }

  /**
  * Navigate to given page
  */
  navigate(page){
    this.setState({page});
    window.scrollTo(0,0);
  }

  /**
  * Unmount component; remove listeners
  */
  componentWillUnmount(){
    window.removeEventListener('hashchange', this.hashChangeListener);
  }

  /**
  * Component mounted; always start at home
  */
  componentDidMount(){
    this.navigate('home');
  }

  /**
  * Get compoment for given page
  */
  getPage(page){
    switch(page){
      case 'home': return (<Homepage />);
      case 'data': return (<Data />);
      case 'tools': return (<Tools />);
      case 'toolDetails': return (<ToolDetails />);
      case 'about': return (<About />);
      case 'documentation': return (<Docs />);
      case 'contact': return (<Contact />);
      default:
        return ((
          <Page header={<Header.Examples.NotLoggedIn active={page in pages ? page : ''} />}>
            <div className="content">
              <div className="text-body">
                <h1>{page in pages ? pages[page].title : page}</h1>
                <p>This is a placeholder</p>
              </div>
            </div>
          </Page>
        ))
    }
  }

  render(){
    return (
      <div>
        {this.getPage(this.state.page)}
      </div>
    );
  }
}

export default Complete;