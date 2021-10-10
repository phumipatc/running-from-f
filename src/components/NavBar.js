import SearchBar from "./SearchBar";

function NavBar(props) {
  return (
    <div>
      <SearchBar className="SearchBar" OnSearchChange={props.OnSearchChange} />
    </div>
  );
}

export default NavBar;
