import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between p-4 items-center">
      <Link to="/">
        <h1 className="text-3xl">GymRat</h1>
      </Link>
      <nav className="flex gap-8 items-center">
        <Link to="results">Results</Link>
        <Link to="about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
