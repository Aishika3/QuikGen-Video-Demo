import React from "react";
import "./GmailModal.css";

const GmailModal = ({ isOpen, onClose, children }) => {
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

export default GmailModal;
