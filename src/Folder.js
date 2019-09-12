import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';

class Folder extends Component {
  render() {
    //pass in context here 
    
    const folderId = this.props.match.params.folderId;
    
    return (
      <main role="main" className="App">
        <section className="main-layout">
            <div className="left-menu">
                <FolderList folders={this.props.folders} selected={folderId}/>
            </div>
            <div className="right-content">
                <NoteList notes={this.props.notes.filter(note => note.folderId === folderId)} />
            </div>
        </section>
      </main>
    )

  }
}

export default Folder;