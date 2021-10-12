import AddFileForm from "../components/AddFileForm";
import classes from "./AddDocLink.module.css";

function AddDocLink(props) {
  return (
    <div className={classes.center}>
      <AddFileForm id={props.location.id} />
    </div>
  );
}
export default AddDocLink;
