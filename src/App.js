import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
//import DummyStore from './dummy-store';
import Header from './Header';
import HomePage from './HomePage';
import Folder from './Folder';
import Note from './Note';
import NoteContext from './NoteContext';
import { promised } from 'q';

class App extends Component {
  //update to reflect API request
  state = {
    folders: [],
    notes: [],
  }

  fetchApi(input, input2){
    const url=('http://localhost:9090/folders');
    const url2=('http://localhost:9090/notes');
    console.log(input);
    Promise.all([fetch(url), fetch(url2)])
    .then(([notesRes, folderRes]) => {
      if (!notesRes.ok)
        return notesRes.json().then(e=> promised.reject(e))
      if (!folderRes.ok)
        return folderRes.json().then(e=> promised.reject(e))
      return Promise.all([
        notesRes.json(),
        folderRes.json(),
      ])
    })
    .then (responseJson => console.log(responseJson))
    .catch(err => {
      console.log("There was an error");
    })
  }
   
//    fetch(url2)
//     .then(response =>{
//       if (response.ok){
//         return response.json();
//       }
//       throw new Error (response.statusText);
//     })
//     .then (responseJson => this.setState({notes:responseJson}))
//     .catch(err => {
//       console.log("There was an error");
//     ])
//  })



  // handleDeleteNote(id){
  //   this.
  // }


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
          <Route exact path="/" component={ HomePage } />
          <Route exact path="/folder/:folderId" { ...Folder } />
          <Route exact path="/notes/:noteId" { ...Note } />

        </>
      </NoteContext.Provider>
    )}
}

export default App;

