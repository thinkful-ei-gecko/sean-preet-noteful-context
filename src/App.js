import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
//import DummyStore from './dummy-store';
import Header from './Header';
import HomePage from './HomePage';
import Folder from './Folder';
import Note from './Note';
import NoteContext from './NoteContext';

class App extends Component {
  //update to reflect API request
  state = {
    folders: [],
    notes: [],
  }

  fetchApi(){

  }

  componentDidMount(){
    this.fetchApi('folders', 'folders');
    this.fetchApi('notes', 'notes');

  }
    //#2: implement two fetch requests to two endpoints
    // /folders and /notes - store in setStaate in app.js


  //#3: implement handleDelete button here (for each note in main and folder route)
  //handleDeleteNote(id){}

  //#4: implement delete on note page, if successful redirect to /path

  //update code below to refelct context <NoteContext.Provider value ...>
  render() {
    return (
      <NoteContext.Provider value ={{
        folders: this.state.folders,
        notes: this.state.notes,
        //handleDeleteNote()
      }}>
        <>
          <Header />
          <Route exact path="/" { ...HomePage } />
          <Route exact path="/folder/:folderId" { ...Folder } />
          <Route exact path="/notes/:noteId" { ...Note } />
        </>
      </NoteContext.Provider>
    )}
}

export default App;

