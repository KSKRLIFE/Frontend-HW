import React from "react";
import "./Navbar.css"; // import your custom CSS

export default function Navbar() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Search">Search</a>
        </li>
        <li>
          <a href="/Charts">Charts</a>
        </li>
      </ul>
    </nav>
  );
}
