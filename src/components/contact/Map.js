import classes from "./Map.module.css";

function Map() {
  return (
    <iframe
      className={classes.sizing}
      width="600"
      height="500"
      src="https://maps.google.com/maps?q=5245%20Cousineau%20&t=&z=15&ie=UTF8&iwloc=&output=embed"
    ></iframe>
  );
}
export default Map;
