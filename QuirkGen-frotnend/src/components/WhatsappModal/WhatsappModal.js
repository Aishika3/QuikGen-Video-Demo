import React from 'react';
import "./wpmodal.css"


const WhatsappModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content-wp  modal-content">
        <button className="modal-close-wp" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default WhatsappModal;
