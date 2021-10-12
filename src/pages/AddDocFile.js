import AddNameForm from "../components/AddNameForm";
import classes from "./AddDocFile.module.css";
import { Redirect, history, useHistory, location } from "react-router";
function AddDocFile(props) {
  const LinkData = props.location.link;
  console.log(LinkData);
  return (
    <div>
      <AddNameForm link={LinkData} id={props.location.id} />
    </div>
  );
}
export default AddDocFile;
