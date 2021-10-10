import classes from "./LabeledInput.module.css";

function LabeledInput(props) {
  return (
    <div className={classes.background}>
      <p className={classes.label}>{props.label}</p>
      <input
        className={classes.input}
        type={props.type}
        required={props.required}
        id={props.id}
        ref={props.refer}
      />
    </div>
  );
}

export default LabeledInput;
