import React from "react";

function Adddata() {
  return (
    <div>
      <div className="input-group">
        <input type="date" className="form-control" placeholder="Date" />
        <input type="text" className="form-control" placeholder="Description" />
        <input type="text" className="form-control" placeholder="Category" />
        <input type="text" className="form-control" placeholder="Amount" />
        <div className="input-group-prepend">
          <span className="input-group-text" id="nameLabel">
            Enter
          </span>
        </div>
      </div>
    </div>
  );
}

export default Adddata;
