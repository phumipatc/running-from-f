import classes from "./DocInput.module.css";
function DocInput(props) {
  return (
    <div className={classes.parent}>
      <p className={classes.topic}>{props.label}</p>
      <input
        className={classes.background}
        type={props.type}
        required={props.required}
        id={props.id}
        ref={props.refer}
      />
    </div>
  );
}
export default DocInput;
