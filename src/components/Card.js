import { useHistory } from "react-router";

function Card(props) {
  const history = useHistory();

  function Click_Handler() {
    history.push({
      pathname: "/files",
      id: props.id,
    });
  }

  return (
    <div>
      <button onClick={Click_Handler}>
        <p>{props.title}</p>
        <p>{props.description}</p>
      </button>
    </div>
  );
}

export default Card;
