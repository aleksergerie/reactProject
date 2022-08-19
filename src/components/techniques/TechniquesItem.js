import classes from "./TechniquesItem.module.css";

function TechniquesItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.text}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.video}>
        <iframe
          height="95%"
          width="100%"
          src={props.link}
          allowFullScreen
        ></iframe>
      </div>
    </li>
  );
}

export default TechniquesItem;
