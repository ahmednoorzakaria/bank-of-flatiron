import React from "react";

function Adddata() {
  return (
    <div>
      <label>
        Date
        <input type="date" />
      </label>
      <label>
        Category
        <input type="text" />
      </label>
      <label>
        Description
        <input type="text" />
      </label>
      <label>
        Amount
        <input type="text" />
      </label>
    </div>
  );
}

export default Adddata;
