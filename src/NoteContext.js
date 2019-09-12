import React from 'react';

const NoteContext = React.createContext({
    folders:[],
    notes: [],
    handleDeleteNote: () => {},
    //deleteHandle();
})

export default NoteContext; 




