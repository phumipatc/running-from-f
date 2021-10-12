import { useHistory } from "react-router";
import classes from "./Card.module.css";

function Card(props) {
  const history = useHistory();

  function Click_Handler() {
    history.push({
      pathname: "/files",
      id: props.id,
    });
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
