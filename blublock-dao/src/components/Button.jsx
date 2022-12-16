import React from "react";
import { Link } from "react-router-dom";

const Button = ({ buttonText }) => (
  <div>
    <a href="https://uinxq3fcctl.typeform.com/to/cd3u6bsP" target="_blank" className="py-3 px-8 font-poppins text-white text-sm bg-stone-800 text-primary rounded-full outline-none">
      <span className="mr-4">{ buttonText }</span><span>→</span>
    </a>
  </div>
);

export default Button;
