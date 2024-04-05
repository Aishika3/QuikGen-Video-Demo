import React from 'react';
import "./twittermodal.css"


const TwitterModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close-twitter" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default TwitterModal;
