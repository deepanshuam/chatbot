import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  //handle logout

  return (
    <div className="w-full bg-gray-100 p-4 text-center shadow-md mb-4">
      <h1 className="text-4xl font-bold text-primary">AI GPT3 Clone</h1>

      <Link
        to="/"
        className="inline-block p-2 text-blue-500 hover:text-blue-700"
      >
        Home
      </Link>
    </div>
  );
};

export default Navbar;
