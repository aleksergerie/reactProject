import classes from "./CoachesItem.module.css";

function CoachesItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.name} />
      </div>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </li>
  );
}

export default CoachesItem;
