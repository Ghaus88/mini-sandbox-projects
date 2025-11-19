const Note = ({ note, deleteNote }) => {
  return (
    <div
      className="p-4 border-l-4 rounded-lg bg-white shadow-md"
      style={{
        borderLeftColor:
          note.priority === 'High'
            ? 'red'
            : note.priority === 'Medium'
            ? 'orange'
            : 'green',
      }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {note.category}
      </p>
      <p className="text-sm text-gray-600">
        <strong>Priority:</strong> {note.priority}
      </p>
      <p className="mt-2 text-gray-800">{note.description}</p>
      <button
        onClick={() => deleteNote(note.id)}
        className="text-red-500 mt-3 cursor-pointer bg-gray-100 rounded-lg p-2 transition hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export default Note;
