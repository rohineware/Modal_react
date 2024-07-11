import { useState } from "react";
import Modal from "./Modal";

export default function Todo({ addTodo }) {
  const [modal, setModal] = useState(false);

  const handleAddClick = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  return (
    <>
      <nav className="nav">
        <div className="btn-container">
          <button className="btn" onClick={handleAddClick}>
            Open Modal
          </button>
        </div>
      </nav>
      {modal && <Modal addTodo={addTodo} closeModal={handleModalClose} />}
    </>
  );
}
