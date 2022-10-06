import React, { useState, useEffect, useReducer, useContext } from 'react'
import notesReducer from "../../shared/store/notes"
import NoteList from './NoteList'
import AddNoteForm from './AddNoteForm'
import NotesContext from "../../shared/store/notes-context"

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, [])
  { console.log("rendering note") }

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'))

    if (notes) {
      dispatch({ type: 'POPULATE_NOTES', notes })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  return (
    <>
      <h1>Notes</h1>
      <NoteList />
      <AddNoteForm />
    </>


  )
}

export { NoteApp as default }
