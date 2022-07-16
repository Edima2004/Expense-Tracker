import React from "react";
import AddTransaction from "./Components/AddTransaction";
import Header from "./Components/Header";
import History from "./Components/History";

import Pagination from "./Components/Pagination/Pagination";
import "./css/index.css";

function App() {
  return (
    <>
      <Header />
      <History />

      <AddTransaction />

      <Pagination />
    </>
  );
}

export default App;
