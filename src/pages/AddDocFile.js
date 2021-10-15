import { useHistory } from "react-router";
import AddNameForm from "../components/AddNameForm";
import classes from "./AddDocFile.module.css";

function AddDocFile(props) {
  const LinkData = props.location.link;
  const history = useHistory();
  console.log(LinkData);
  if (LinkData === undefined) {
    history.replace("/");
  }
  return (
    <div className={classes.center}>
      <AddNameForm link={LinkData} id={props.location.id} />
    </div>
  );
}
export default AddDocFile;
