import SearchBar from "./SearchBar";
import classes from "./NavBar.module.css";
import { useHistory } from "react-router";

function NavBar(props) {
  const history = useHistory();
  function logout_handler() {
    history.replace("/login");
  }
  return (
    <div className={classes.background}>
      <button
        className={classes.topic}
        onClick={() => {
          history.replace("/");
        }}
      >
        รวมโจทย์หนี F
      </button>
      <div className={classes.components}>
        {props.searchable && (
          <SearchBar
            className={classes.searchbar}
            onSearchChange={props.onSearchChange}
          />
        )}
        <button className={classes.button} onClick={logout_handler}>
          logout
        </button>
      </div>
    </div>
  );
}

export default NavBar;
