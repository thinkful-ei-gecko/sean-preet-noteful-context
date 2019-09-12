import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NoteList extends Component {

  //context here 

  render() {
    //update context here
    return (
      <div>
        <ul className="notes-list">
          {this.props.notes.map(note =>
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