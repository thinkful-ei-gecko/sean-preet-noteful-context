import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import DummyStore from './dummy-store';
import Header from './Header';
import HomePage from './HomePage';
import Folder from './Folder';
import Note from './Note';

class App extends Component {
  //update to reflect API request
  state = {
    folders: DummyStore.folders,
    notes: DummyStore.notes,
  }

  //componentDidMount()
    //fetch API request


  //implement handleDelete button here
  //handleDeleteNote(id){}

  //update code below to refelct context <NoteContext.Provider value ...>
  render() {
    return (
      <>
        <Header />
        <Route exact path="/" 
          render={
            () => <HomePage folders={this.state.folders} notes={this.state.notes} />
          }
        />
        <Route exact path="/folder/:folderId"
          render={ (props) => <Folder folders={this.state.folders} notes={this.state.notes} match={props.match} />
          } 
        />
        <Route exact path="/notes/:noteId"
          render={ (props) => <Note folders={this.state.folders} notes={this.state.notes} match={props.match} /> }
        />
      </>
    );
  }
}

export default App;

