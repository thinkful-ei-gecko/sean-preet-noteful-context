import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';

export default class HomePage extends Component {
  //update context 

  render(){
    //context
    return (
      <main role="main" className="App">
        <section className="main-layout">
          <div className="left-menu">
            <FolderList folders={this.props.folders} />
          </div>
          <div className="right-content">
            <NoteList notes={this.props.notes} />
          </div>
        </section>
      </main>
    )
  }
  
}