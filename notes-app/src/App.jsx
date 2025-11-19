import NoteForm from './components/NoteForm';
import { useState, useEffect } from 'react';
import NoteList from './components/NoteList';

const App = () => {
  //global notes state will go here later
  const [notes, setNotes] = useState(() =>
    JSON.parse(localStorage.getItem('notes'))
  );

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const deleteNote = (id) => {
    const confirmDelete = window.confirm(
      'Do you really want to delete?. Think twice'
    );

    if (confirmDelete) {
      setNotes(notes.filter((note) => note.id !== id));
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl mb-4 font-bold text-center">Notes App</h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
