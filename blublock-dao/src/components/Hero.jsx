import {useState} from 'react';
import Button from './Button';
import { heroBg, cube } from '../assets';

const Hero = () => {
    const heroStyling = {
        backgroundImage: "url("+heroBg+")"
    }
  return (
    <section id="home" style={heroStyling} className="py-10 md:py-[100px] bg-center bg-cover">
        <div className="container px-8 mx-auto max-w-[1280px]">
            <div className="flex flex-row items-center justify-center p-4 mx-auto text-center max-w-[700px] px-4 bg-primary rounded-full border-2 border-white mb-2">
                <p className="text-sm font-lato text-stone-900">BluBlock secures largest NFT licensing deal of the year with 50+ BAYC assets and a public company</p>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-center">
                <div className="flex-col md:basis-1/2">
                    <div className="text-center md:text-left my-5 md:pr-8 relative">
                        <p className="text-lg font-merriweather animate-fadeInSecond font-semibold text-blue-900 mb-2">100 Members</p>
                        <h1 className="font-merriweather animate-fadeInFirst font-bold tracking-wide text-stone-800 text-2xl sm:text-4xl lg:text-5xl mb-4">NFT Licensing Club</h1>
                        <h4 className="text-md sm:text-lg font-lato font-normal my-4 mb-8">We secure licensing and sponsorship deals for NFTs and everyone gets a share of the revenue</h4>
                        <Button buttonText="Apply Now" />
                        <p className="text-xs font-lato font-light mx-auto md:mx-0 block mt-8 text-stone-500 max-w-[300px]">Membership confirmations will be sent out on a rolling basis starting in February 2023</p>
                    </div>
                </div>
                <div className="relative md:basis-1/2 flex justify-center items-center">
                    <img className="rounded block animate-fadeInThird max-w-full md:max-w-[415px] mx-auto" src={cube} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero