import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NoteContext from './NoteContext';

export default class NoteList extends Component {
  static contextType = NoteContext;

  render() {
    //will need to add in our handeDelete below and update event handler line 25
    const { notes } = this.context;
    console.log(notes);
    return (
      <div>
        <ul className="notes-list">
          {notes.map(note =>
            <li key={note.id}>
              <Link to={`/notes/${note.id}`}>
                {note.name}
              </Link>
              <p>Date modified: {note.modified}</p>
              <input 
                className="favorite styled"
                type="button"
                value="Delete note" /> 
                {/* handle delete button */}
            </li>  
          )}
        </ul>
      </div>
    );
  }
}