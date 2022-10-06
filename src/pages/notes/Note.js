import React, { useContext } from 'react'
import NotesContext from "../../shared/store/notes-context"
const Note = ({ note }) => {
  const { dispatch } = useContext(NotesContext)
  return (
    <div>

      <button
        onClick={() => dispatch({ type: 'REMOVE_NOTE', title: note.title })}
      >
        x
      </button>
    </div>
  )
}

export { Note as default }
