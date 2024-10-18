// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App.css';
import notesData from './data/notes';
import NoteCard from './components/NoteCard'; // Import NoteCard
import NoteForm from './components/NoteForm'; // Import NoteForm
import SearchBar from './components/SearchBar'; // Import SearchBar

function App() {
  const [notes, setNotes] = useState(notesData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddNote = ({ title, body }) => {
    const newNote = {
      id: `note-${Math.random().toString(36).substr(2, 9)}`,
      title,
      body,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const filteredNotes = notes
    .filter(note =>
        note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.body.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <h1>Notes App</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NoteForm onAddNote={handleAddNote} />

      {filteredNotes.length > 0 ? (
        <div className="notes-grid">
          {filteredNotes.map(note => (
            <NoteCard
              key={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              onEdit={() => console.log('Edit note', note.id)}
              onDelete={() => console.log('Delete note', note.id)}
            />
          ))}
        </div>
      ) : (
          <div className="no-results">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="size-6">
              <path d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z" />
            </svg>
            Search result not found.
          </div>
      )}
    </div>
  );
}

export default App;
