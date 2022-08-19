import CoachesItem from "./CoachesItem";
import classes from "./CoachesList.module.css";

function CoachesList(props) {
  return (
    <ul className={classes.list}>
      {props.coaches.map((coaches) => (
        <CoachesItem
          key={coaches.id}
          id={coaches.id}
          image={coaches.image}
          name={coaches.name}
          description={coaches.description}
        />
      ))}
    </ul>
  );
}

export default CoachesList;
