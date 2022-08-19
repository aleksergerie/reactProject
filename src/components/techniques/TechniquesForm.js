import { useRef, useState } from "react";

import KeyValidation from "./keyValidationAction/KeyValidation";
import Backdrop from "./keyValidationAction/Backdrop";
import classes from "./TechniquesForm.module.css";

function TechniquesForm(props) {
  const keyValue = "VoltBJJ";
  const keyInputRef = useRef();
  const techniqueInputRef = useRef();
  const linkInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredKey = keyInputRef.current.value;
    const enteredTechnique = techniqueInputRef.current.value;
    const enteredLink = linkInputRef.current.value;

    const techniqueData = {
      technique: enteredTechnique,
      link: enteredLink,
    };
    if (keyValue == enteredKey) {
      props.onAddTechnique(techniqueData);
    }
  }
  const [showModal, setShowModal] = useState();

  function showModalHandler() {
    if (keyValue != keyInputRef.current.value) {
      setShowModal(true);
    }
  }

  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <form className={classes.card} onSubmit={submitHandler}>
      <div className={classes.label}>
        <label>Access key</label>
        <input type="password" ref={keyInputRef} />
      </div>

      <div className={classes.label}>
        <label>Technique</label>
        <input type="text" required id="technique" ref={techniqueInputRef} />
      </div>
      <div className={classes.label}>
        <label>Link to video</label>
        <input type="url" ref={linkInputRef} />
      </div>
      <div className={classes.action}>
        <button onClick={showModalHandler}>Add</button>
      </div>
      {showModal && <Backdrop onClick={closeModalHandler} />}
      {showModal && <KeyValidation onClose={closeModalHandler} />}
    </form>
  );
}

export default TechniquesForm;
