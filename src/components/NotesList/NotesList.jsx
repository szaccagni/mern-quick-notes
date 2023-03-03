import NoteCard from '../NoteCard/NoteCard'

export default function NotesList({notes}) {
    return (
        <>
        { notes.length ?
            <div>{notes.map((note,idx) => (<NoteCard note={note} key={idx}/>))}</div>
            :
            <div>No Notes Yet!</div>
        }
        </>
    )
}