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
      <p className={classes.topic}>รวมโจทย์หนี F</p>
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
