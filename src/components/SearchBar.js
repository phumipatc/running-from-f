function SearchBar() {
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          localStorage.setItem("SearchTerm", event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
