import './App.css';
import { useState, useEffect } from 'react'
import { getUser } from '../../utilities/users-service'
import * as notesAPI from '../../utilities/notes-api'
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import NotesList from '../../components/NotesList/NotesList'
import NewNoteForm from '../../components/NewNoteForm/NewNoteForm'

export default function App() {
  const [ user, setUser ] = useState(getUser())
  const [ notes, setNotes ] = useState([])

  useEffect(function() {
      async function getNotes() {
        const userNotes = await notesAPI.getUserNotes()
        setNotes(userNotes)
      }
      getNotes()
  }, [user])

  async function addNote(newNote) {
    await notesAPI.addNote(newNote)
    setNotes([...notes, newNote])
  }

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} setNotes={setNotes}/>
          <NewNoteForm user={user} addNote={addNote}/>
          <NotesList notes={notes}/>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


