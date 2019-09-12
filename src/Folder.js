import React, { Component } from 'react';
import FolderList from './FolderList';
import NoteList from './NoteList';
import NoteContext from './NoteContext';

class Folder extends Component {
  static contextType = NoteContext;

  render() {
    const { folders, notes } = this.context;
    const folderId = this.props.match.params.folderId;
    
    return (
      <main role="main" className="App">
        <section className="main-layout">
            <div className="left-menu">
                <FolderList folders={folders} selected={folderId}/>
            </div>
            <div className="right-content">
                <NoteList notes={notes.filter(note => note.folderId === folderId)} />
            </div>
        </section>
      </main>
    )

  }
}

export default Folder;