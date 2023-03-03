import { useState } from "react"

export default function NewNoteForm({addNote, user}) {
    const [newNoteData, setNewNoteData] = useState('')

    function handleClick(e) {
        const newNote = {
            text: newNoteData,
            user: user
        }
        addNote(newNote)
        setNewNoteData('')
    }

    return (
        <div>
            <input value={newNoteData} type="text" onChange={(e) => setNewNoteData(e.target.value)}></input>
            <button onClick={handleClick} type="submit">Add Note</button>
        </div>
    )
}