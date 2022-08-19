import { useNavigate } from "react-router-dom";

import TechniquesList from "./TechniquesList";
import TechniquesForm from "./TechniquesForm";
import classes from "./TechniquesLayout.module.css";

function TechniquesLayout(props) {
  const navigate = useNavigate();
  function addTechniqueHandler(techniqueData) {
    fetch(
      "https://react-project-59273-default-rtdb.firebaseio.com/techniques.json",
      {
        method: "POST",
        body: JSON.stringify(techniqueData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate(0);
    });
  }

  return (
    <div className={classes.layout}>
      <div className={classes.leftContainer}>
        <p>
          At Volt BJJ we value the students' opinion and curiosity. This is why
          we encourage them to ask for techniques they want to learn or practice
          this week. Some techniques will be taken and used during the classes.
        </p>
        <TechniquesForm
          className={classes.form}
          onAddTechnique={addTechniqueHandler}
        />
      </div>

      <TechniquesList className={classes.list} techniques={props.techniques} />
    </div>
  );
}
export default TechniquesLayout;
