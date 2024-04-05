import React from 'react';
import './instamodal.css';

const InstaModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay-insta">
      <div className="modal-content-insta modal-content">
        <button className="modal-close-insta" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default InstaModal;
