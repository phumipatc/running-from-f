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
      <div>
        {props.searchable && (
          <SearchBar
            className="SearchBar"
            onSearchChange={props.onSearchChange}
          />
        )}
        <button onClick={logout_handler}>logout</button>
      </div>
    </div>
  );
}

export default NavBar;
