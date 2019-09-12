import React, { Component } from 'react';
import FolderList from './FolderList';
//import NoteList from '../notelist/notelist';

class Note extends Component {
  //implement context here

  render() {
    //update context below
    const noteId = this.props.match.params.noteId;
    const note = this.props.notes.find(note => note.id === noteId);

    return (
      <main role="main" className="App">
        <section className="main-layout">
          <div className="left-menu">
            <FolderList goBack folders={this.props.folders.filter(folder => folder.id === note.folderId)} selected={note.folderId}/>
          </div>

          <div className="right-content">
            <ul className="notes-list">
              <li key={note.id}>
                <h3>{note.name}</h3>
                <p>Date modified: {note.modified}</p>
                  <input 
                    className="favorite styled"
                    type="button"
                    value="Delete note" /> 
                    {/* Add in event handler for delete button */}
                </li>  
                <li>
                  <p>
                    {note.content}
                  </p>
                </li>
            </ul>
          </div>
        </section>
      </main>
    )
  }
}

export default Note;