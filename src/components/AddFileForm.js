import classes from "./AddFileForm.module.css";
import DocInput from "./DocInput";
import { useRef } from "react";
import { useHistory } from "react-router";
function AddFileForm(props) {
  const history = useHistory();
  const LinkInputRef = useRef();
  function Click_Handler() {
    const LinkName = LinkInputRef.current.value;
    if (LinkName != "") {
      history.push({
        pathname: "/add_file_name",
        link: LinkName,
        id: props.id,
      });
    }
  }
  return (
    <form>
      <div>
        <DocInput
          label="Insert Link Here"
          type="text"
          id="DocLink"
          required={true}
          refer={LinkInputRef}
        />
        <p></p>
      </div>
      <div className={classes.buttonfield}>
        <button onClick={Click_Handler} className={classes.button}>
          select
        </button>
      </div>
    </form>
  );
}
export default AddFileForm;
