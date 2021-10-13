import classes from "./AddNameForm.module.css";
import DocInput from "./DocInput";
import { useRef } from "react";
import { Redirect, history, useHistory, location } from "react-router";
function AddNameForm(props) {
  const NameInputRef = useRef();
  const history = useHistory();
  function Click_Handler(event) {
    event.preventDefault();
    const NameInputValue = NameInputRef.current.value;
    const DocData = {
      DocLink: props.link,
      DocName: NameInputValue,
    };
    console.log(DocData);
    history.push({
      pathname: "/files",
      id: props.id,
    });
  }
  return (
    <form>
      <div>
        <DocInput
          label="File name"
          type="text"
          id="DocName"
          required={true}
          refer={NameInputRef}
        />
        <p></p>
      </div>
      <div className={classes.buttonfield}>
        <button onClick={Click_Handler} className={classes.button}>
          choose the selected file
        </button>
      </div>
    </form>
  );
}
export default AddNameForm;
