import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: saturate(5%) blur(5px);
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer
          width: 100%;
          height: 100vh;
        }

        .modal-content {
          background: var(--text-color);
          color:var(--background-color);
          padding: 20px;
          border-radius: 10px;
          max-width: 450px;
          width: 100%;
          overflow-y: scroll;
        }

        .close-btn {
          position: relative;
          top: 0;
          left: 190px;
          background: transparent;
          border: none;
          cursor: pointer;
          color:var(--background-color)
          cursor:pointer;
        }

        .close-btn:hover {
          color: red;
        }
      `}</style>
    </div>
  );
};

export default Modal;
