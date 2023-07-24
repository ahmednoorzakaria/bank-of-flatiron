import React from "react";

function Table({ data }) {
  const tableheader = (
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Date</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Amount</th>
      </tr>
    </thead>
  );
  return (
    <div className="table-responsive container">
      <table className="table">
        {tableheader}
        <tbody>
          {data?.map((transactions) => (
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
