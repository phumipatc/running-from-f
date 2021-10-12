import { useHistory } from "react-router";
import classes from "./Card.module.css";

function Card(props) {
  const history = useHistory();

  function Click_Handler() {
    console.log(props.id);
    if (props.add == true) {
      history.push({
        pathname: "/add_link",
        id: props.id,
      });
    } else if (props.id !== undefined) {
      history.push({
        pathname: "/files",
        id: props.id,
      });
    } else {
      history.push({
        pathname: "/showfile",
        url: props.url,
      });
    }
  }

  return (
    <div className={classes.background}>
      <button onClick={Click_Handler} className={classes.button}>
        <p className={classes.title}>{props.title}</p>
      </button>
    </div>
  );
}

export default Card;
