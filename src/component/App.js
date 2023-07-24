import React from "react";
import Page from "./Page";
import Search from "./Search";
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.css';


import "./App.css"; // Import the CSS file for styling

function App() {
  return (
    <div className="App">
      <Page />
      <Search />
    </div>
  );
}

export default App;
