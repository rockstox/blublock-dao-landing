import {useState} from 'react';
import Button from './Button';
import { heroImg, arrowUp } from '../assets';

const Hero = () => {
    const heroStyling = {
        backgroundImage: "url("+heroImg+")"
    }
  return (
    <section id="home" style={heroStyling} className="py-[150px] bg-center bg-cover px-4">
        <div className="flex flex-row items-center justify-center py-[6px] mx-auto max-w-[700px] px-4 bg-slate-900 rounded-[10px] mb-2">
            <img src={arrowUp} alt="heads up" className="w-[24px] h-[24px]" />
            <p className="text-[14px] text-orange-200 ml-2">
            {" "}
            <span className="text-white mr-1">BluBlock Inc. secures single largest NFT licensing deal ever done</span>
            {" "}Announcement Soon {" "}
            </p>
        </div>
        <div className="w-full text-center my-5 font-poppins text-white mx-auto max-w-[800px]">
            <h1 className="font-poppins font-bold leading-10 text-2xl sm:text-4xl lg:text-6xl mb-4 text-white">A Members Only NFT Licensing Club</h1>
            <h1 className="font-poppins font-normal text-lg sm:text-xl text-white w-full mb-10">
            We are a team of experts in media, technology, finance, and law that provide blue chip NFT holders with licensing opportunities and income</h1>
            <Button buttonText="Apply Now" />
        </div>
    </section>
  )
}

export default Hero