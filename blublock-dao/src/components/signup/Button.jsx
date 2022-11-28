import React from 'react'
import {loader} from '../../assets';

const Button = ({ loading }) => {
  return (
    <a className="rounded cursor-pointer font-poppins p-5 text-center w-full text-white bg-blue-700 flex flex-row justify-center items-center">
        { loading ? <img src={loader} className="max-w-[25px]" /> : "Next"}
    </a>
  )
}

export default Button