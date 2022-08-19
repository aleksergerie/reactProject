import ContactForm from "./ContactForm.js";
import Map from "./Map.js";
import classes from "./ContactLayout.module.css";

function ContactLayout() {
  return (
    <div className={classes.content}>
      <div className={classes.leftContainer}>
        <ContactForm />
        <ul>
          <li className={classes.schedule}>Weekly Schedule</li>
          <li>Monday: 8h00-10h00</li>
          <li>Tuesday: 18h30-20h00</li>
          <li>Wednesday: 8h00-10h00</li>
          <li>Thurdays: 18h30-20h00</li>
          <li>Friday: 19h00-21h00</li>
          <li>Saturday: No class</li>
          <li>Sunday: 11h00-12h30</li>
        </ul>
      </div>

      <Map className={classes.map} />
    </div>
  );
}
export default ContactLayout;
