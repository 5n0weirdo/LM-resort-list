import React, { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [resorts, setResorts] = useState(data);

  return (
    <main>
      <section>
        <h1 className="heading">Top {resorts.length} resorts</h1>
        <br />
      </section>
      <section className="container">
        <List resorts={resorts} />
      </section>
    </main>
  );
}

export default App;
