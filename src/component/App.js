import React from "react";
import Page from "./Page";
import Search from "./Search";
import Table from "./Table";
import Adddata from "./Adddata";
import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <Page />
      <Search />
      <Adddata />
      <Table />
    </div>
  );
}

export default App;
