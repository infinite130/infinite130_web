// src/components/common/Modal.js

import React from "react";

function Modal({isOpen, closeModal, children}) {
  if (!isOpen) {
    return null;
  }

  return (
      <div className="modal-overlay">
        <div className="modal">
          <button onClick={closeModal}>Close</button>
          {children}
        </div>
      </div>
  );
}

export default Modal;