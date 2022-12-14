import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonText }) => (
  <div>
    <a href="https://uinxq3fcctl.typeform.com/to/cd3u6bsP" target="_blank" className="mx-auto py-2 px-6 font-poppins text-[18px] bg-white text-black w-[200px] rounded outline-none block">
      <span className="mr-4">{ buttonText }</span><span>→</span>
    </a>
  </div>
);

export default Button;
