export default function NoteCard({note}) {
    const createdDate = new Date(note.createdAt).toLocaleString('en-US')
    return (
        <div>
            {note.createdAt ? createdDate :  new Date().toLocaleString('en-US')} - {note.text}
        </div>
    )
}