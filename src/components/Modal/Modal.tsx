import { useState } from "react";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* page nico */}
      <button
        className="mod-button"
        type="button"
        onClick={() => SetIsOpen(true)}
      >
        {" "}
        TRAVEL
      </button>

      {/* Modal + Overlay */}
      {isOpen && (
        <>
          <div className="mod-overlay" onClick={() => setIsOpen(false)}></div>
          <div className="mod-modal">
            <p>Contenu de la modale</p>
            <button type="button" onClick={() => setIsOpen(false)}>
              Fermer
            </button>
          </div>
        </>
      )}
    </>
  );
}

export default Modal;
