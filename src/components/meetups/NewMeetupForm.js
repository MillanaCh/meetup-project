import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label>Meetup Title</label>
          <input />
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
