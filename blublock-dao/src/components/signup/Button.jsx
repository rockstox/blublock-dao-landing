import React from 'react'
import {loader} from '../../assets';

const Button = () => {
  return (
    <div className="rounded cursor-pointer font-poppins p-5 text-center w-full text-white bg-blue-700 flex flex-row justify-center items-center">
        <span>Next</span><img src={loader} className="w-[25px]" />
    </div>
  )
}

export default Button