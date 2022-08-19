import classes from "./ContactForm.module.css";

function ContactForm() {
  return (
    <form className={classes.card}>
      <div className={classes.identification}>
        <div className={classes.labelName}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={classes.labelName}>
          <label>Surname</label>
          <input type="text" />
        </div>
      </div>

      <div className={classes.label}>
        <label>Email address</label>
        <input type="email" />
      </div>
      <div className={classes.label}>
        <label>Message</label>
        <textarea required rows="10"></textarea>
      </div>
      <div className={classes.action}>
        <button>Send</button>
      </div>
    </form>
  );
}

export default ContactForm;
