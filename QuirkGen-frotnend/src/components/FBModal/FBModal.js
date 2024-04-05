import React from 'react';
import "./facebookmodal.css"


const FBModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay-fb">
      <div className="modal-content-fb modal-content">
        <button className="modal-close-fb" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default FBModal;
