import React from "react";
import Products from "./components/Products";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Products (useFetch demo)</h1>
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
