import TechniquesItem from "./TechniquesItem";
import classes from "./TechniquesList.module.css";

function TechniquesList(props) {
  return (
    <div>
      <h3 className={classes.title}>Techniques requested</h3>
      <ul className={classes.list}>
        {props.techniques.map((technique) => (
          <TechniquesItem
            key={technique.id}
            id={technique.id}
            name={technique.technique}
            link={technique.link}
          />
        ))}
      </ul>
    </div>
  );
}
export default TechniquesList;
