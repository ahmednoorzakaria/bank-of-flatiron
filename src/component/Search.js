import React, { useEffect, useState } from "react";
import Table from "./Table";
import Adddata from "./Adddata";

function Search() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(" http://localhost:4000/transactions")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [data.id]);
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(e) => setData(e.target.value)}
      />
      <span className="input-group-text border-0" id="search-addon"></span>
      <Adddata />

      <Table data={data} />
    </div>
  );
}

export default Search;
