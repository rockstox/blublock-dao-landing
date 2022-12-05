import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonText }) => (
  <div>
    <Link to="/signup" className="mx-auto py-2 px-6 font-poppins text-[18px] bg-white text-black w-[200px] rounded outline-none block">
      <span className="mr-4">{ buttonText }</span><span>→</span>
    </Link>
  </div>
);

export default Button;
