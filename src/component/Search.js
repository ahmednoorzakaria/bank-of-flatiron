import React from "react";

function Search({ handleSearch }) {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={handleSearch}
      />
      <span className="input-group-text border-0" id="search-addon">
      </span>
    </div>
  );
}

export default Search;
