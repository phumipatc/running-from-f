import { useEffect } from "react";
import SearchBar from "./SearchBar";

function NavBar() {
  useEffect(() => {
    localStorage.removeItem("SearchTerm");
  }, []);

  return (
    <div>
      <SearchBar className="SearchBar" />
    </div>
  );
}

export default NavBar;
