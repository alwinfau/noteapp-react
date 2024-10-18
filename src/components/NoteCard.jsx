// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types'; // Optional for prop type validation

function NoteCard({ title, body, createdAt, onEdit, onDelete }) {
  return (
    <div className="note-card">
      <div className="card">
        <div className="icons">
          <i className="fas fa-edit" onClick={onEdit}></i>
          <i className="fas fa-trash-alt" onClick={onDelete}></i>
        </div>
        <h2>{title}</h2>
        <p>{body}</p>
        <small>Created At: {new Date(createdAt).toLocaleString()}</small>
      </div>
    </div>
  );
}

// Prop types for validation (optional)
NoteCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
};

export default NoteCard;
