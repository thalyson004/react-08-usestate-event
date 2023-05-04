import React, { useState } from "react";

function Footer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  setInterval(() => setTime(new Date().toLocaleTimeString()), 1);

  return <footer>{time}</footer>;
}

export default Footer;
