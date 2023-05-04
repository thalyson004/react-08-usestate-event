import React, { useState } from "react";

import Button from "./Button";
import Footer from "./Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>{count}</h1>
      <Button text="+" action={() => setCount(count + 1)} />
      <Button text="-" action={() => setCount(count - 1)} />
      <Footer />
    </div>
  );
}

export default App;
