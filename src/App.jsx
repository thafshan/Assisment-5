import React from "react";
import Products from "./components/Products";
import "./index.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Products (useFetch demo)</h1>
        <h2>Git hub link :- </h2> <a href="https://github.com/thafshan/Assisment-5">Click</a>
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
}

export default App;
