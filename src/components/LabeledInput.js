import classes from "./LabeledInput.module.css";

function LabeledInput(props) {
  return (
    <div>
      <p>{props.label}</p>
      <input
        type={props.type}
        required={props.required}
        id={props.id}
        ref={props.refer}
      />
    </div>
  );
}

export default LabeledInput;
