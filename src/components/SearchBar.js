function SearchBar(props) {
  return (
    <div>
      <input
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
