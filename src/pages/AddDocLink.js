import { useHistory } from "react-router";
import AddFileForm from "../components/AddFileForm";
import classes from "./AddDocLink.module.css";

function AddDocLink(props) {
  const history = useHistory();
  if (props.location.id === undefined) {
    history.replace("/");
  }
  return (
    <div className={classes.center}>
      <AddFileForm id={props.location.id} />
    </div>
  );
}
export default AddDocLink;
