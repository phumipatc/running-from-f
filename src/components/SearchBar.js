import classes from "./SearchBar.module.css";
function SearchBar(props) {
  return (
    <div className={classes.background}>
      <input
        className={classes.input}
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          props.onSearchChange(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
