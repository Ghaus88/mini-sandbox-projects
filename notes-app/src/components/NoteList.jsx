import Note from './Note';
const NoteList = ({ notes, deleteNote }) => {
  if (notes.length === 0) {
    return (
      <p className="text-sm text-gray-500 text-center">
        No notes available. Please add a note.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <Note key={note.id} id={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
