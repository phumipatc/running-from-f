import SearchBar from "./SearchBar";
import classes from "./NavBar.module.css";
import { useHistory } from "react-router";

function NavBar(props) {
  return (
    <div className={classes.background}>
      <p className={classes.topic}>รวมโจทย์หนี F</p>
      <SearchBar className="SearchBar" onSearchChange={props.onSearchChange} />
    </div>
  );
}

export default NavBar;
