import React, { useState } from "react";

function Adddata() {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3000/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount,
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Added successfully");
        } else {
          alert("Failed to add data");
        }
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            value={date}
            type="date"
            className="form-control"
            placeholder="Date"
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            value={description}
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            value={category}
            type="text"
            className="form-control"
            placeholder="Category"
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            value={amount}
            type="text"
            className="form-control"
            placeholder="Amount"
            onChange={(e) => setAmount(e.target.value)}
          />
          <div className="input-group-prepend">
            <button className="btn btn-primary" type="submit">
              Add Data
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Adddata;
