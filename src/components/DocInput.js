import classes from "./DocInput.module.css";
function DocInput(props) {
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
export default DocInput;
