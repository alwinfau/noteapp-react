// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';

// // eslint-disable-next-line react/prop-types
// function NoteForm({ onAddNote }) {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');

//   const handleAddNote = () => {
//     if (title.trim() === '' || body.trim() === '') return;
//     onAddNote({ title, body });
//     setTitle('');
//     setBody('');
//   };

//   return (
//       <div className="note-form">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <textarea
//           placeholder="Note body"
//           value={body}
//           onChange={(e) => setBody(e.target.value)}>
//         </textarea>
//         <button className='submit' onClick={handleAddNote}>
//           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
//               stroke="currentColor" className="size-6" strokeWidth="1.5">
//               <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
//           </svg>
//           Save Notes
//         </button>
//       </div>
//   );
// }

// export default NoteForm;



// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
function NoteForm({ onAddNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [errors, setErrors] = useState({}); // State untuk menyimpan pesan error

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validasi input
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!body.trim()) newErrors.body = 'Body is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Jika validasi lolos, tambahkan catatan
    onAddNote({ title, body });
    
    // Reset form
    setTitle('');
    setBody('');
    setErrors({});
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, title: '' }));
    }
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    if (e.target.value.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, body: '' }));
    }
  };

  return (
    <form className="note-form" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
          className={errors.title ? 'input-error' : ''}
        />
        {errors.title && <p className="error-message">{errors.title}</p>}
      </div>
      <div>
        <textarea
          value={body}
          onChange={handleBodyChange}
          placeholder="Note body"
          className={errors.body ? 'input-error' : ''}
        />
        {errors.body && <p className="error-message">{errors.body}</p>}
      </div>
        <button className='submit' type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" className="size-6" strokeWidth="1.5">
              <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
          </svg>
        Save Notes
        </button>      
    </form>
  );
}

export default NoteForm;
