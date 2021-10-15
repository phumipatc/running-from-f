import classes from "./AddNameForm.module.css";
import DocInput from "./DocInput";
import { useRef } from "react";
import { useHistory } from "react-router";
function AddNameForm(props) {
  const NameInputRef = useRef();
  const history = useHistory();
  const API_Link = "https://fescape-backend.herokuapp.com/pdf/create";

  function Click_Handler(event) {
    event.preventDefault();
    const NameInputValue = NameInputRef.current.value;
    const DocData = {
      link: props.link,
      file_name: NameInputValue,
      file_type: "Link",
      description: "",
      tag: [props.id],
    };
    console.log(DocData);
    fetch(API_Link, {
      method: "POST",
      headers: {
        "x-access-tokens": localStorage.getItem("user"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(DocData),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        history.push({
          pathname: "/files",
          id: props.id,
        });
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
          Confirm
        </button>
      </div>
    </form>
  );
}
export default AddNameForm;
