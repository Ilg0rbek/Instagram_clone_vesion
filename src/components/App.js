import React from "react";
import Navigation from "./Navigation";
import Cards from "./Cards"
import Seidbar from "./Seidbar"
import "../styles/App.scss"

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <div className="container">
          <Cards />
          <Seidbar />
        </div>
      </main>
    </div>
  );
}

export default App;
