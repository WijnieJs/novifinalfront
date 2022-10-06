import React, { useContext } from 'react'
import Note from './Note'
import NotesContext from "../../shared/store/notes-context"

const NoteList = () => {
    const { notes } = useContext(NotesContext)
    { console.log("rendering note") }

    return notes.map((note) => (
        <Note key={note.title} note={note} />
    ))
}

export { NoteList as default }