import React from "react";

const SearchBar = () => {
  return (
    <div className="from-wrapper">
      <input
        type="text"
        //   onChange={}
        placeholder="Search Title"
        className="form-control search"
      />
    </div>
  );
};

export default SearchBar;
