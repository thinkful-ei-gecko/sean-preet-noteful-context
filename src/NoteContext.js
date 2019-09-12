import React from 'react';

const NoteContext = React.createContext({
    //create values, will be grabbed by other components w/o passing props 
    //set values in parent (App.js)
    //easy way: to implement context: use static contextType = NoteContext;
    //then define const {name, setName} = this.context
    //hard way - see below 
    folders:[],
    notes: [],
    addNote : () => {},
    deleteNote : () => {},
    
})

export default NoteContext; 

//cannot access more than one context type in any one component - at least not the easy way 
//will have to use the hard way to do this - for this assignment there is no need to do this
//hard way: set the context values in the return block - inline component within a component 
//{{destructure}} - pass as prop drilling 

