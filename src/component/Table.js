import React, { useState, useEffect } from "react";

function Table() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions") 
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [data]);

  return (
    <div className="table-responsive container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Category</th>
            <th scope="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transactions) => (
            <tr key={transactions.id}>
              <td>{transactions.id}</td>
              <td>{transactions.date}</td>
              <td>{transactions.description}</td>
              <td>{transactions.category}</td>
              <td>{transactions.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
