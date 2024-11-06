// SearchBar.js
import React from "react";
import { IoSearch } from "react-icons/io5";
const SearchBar = ({ setSearchQuery }) => {
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex items-center justify-center gap-3 mt-4">
      <form action="">
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Search Service"
            className=" rounded px-8 py-3 w-72 bg-[#F7F7F7] outline-none"
            onChange={handleSearchChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
