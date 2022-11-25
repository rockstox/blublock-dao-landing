import React from "react";

const Button = ({ buttonText, styles, disabled }) => (
  <a href="/signup" className={`py-2 px-6 font-poppins text-[18px] border-solid border border-white text-white rounded-[10px] outline-none ${styles}`}>
    <span className="mr-4">{ buttonText }</span><span>→</span>
  </a>
);

export default Button;
