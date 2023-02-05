import { useState } from 'react';
import Button from './Button';
import { heroBg, cube } from '../assets';
import { IKImage } from 'imagekitio-react';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

const Hero = () => {
    const heroStyling = {
        backgroundImage: "url(" + heroBg + ")"
    }
    const IKEndpoint = 'https://ik.imagekit.io/blublock/';
    return (
        <section id="home" style={heroStyling} className="bg-center bg-cover">
            <Navbar />
            <div className="container px-8 mx-auto max-w-[1280px] py-8 md:py-[75px] md:pb-[150px]">
                <a className="group flex flex-col items-center justify-center relative animate-fadeInFourth mb-8" href="https://www.linkedin.com/pulse/new-licensing-frontier-blublockxyz" target="_blank" >
                    <div className="flex flex-col items-center justify-center p-4 mx-auto text-center text-white mb-2 max-w-[700px] px-4 md:px-8 bg-sky-900 rounded-full border-2 border-white opacity-90 group-hover:opacity-100 group-hover:border-blue-300">
                        <p className="text-sm font-lato">BluBlock secures the year's largest NFT licensing deal with 50+ BAYC assets and a public company</p>
                    </div>
                    <p className="absolute -bottom-5 animate-fadeInFast mx-auto block hidden group-hover:inline-block text-sm font-lato text-stone-900 underline"><span className="underline">Learn More    </span><span className="no-underline">→</span></p>
                </a>

                <div className="flex md:flex-row flex-col items-center justify-center">
                    <div className="flex-col md:w-[60%]">
                        <div className="text-center md:text-left my-5 relative">
                            <p className="text-xl font-merriweather animate-fadeInSecond font-semibold text-sky-900 mb-2">Private Beta Opening Soon</p>
                            <h1 className="font-merriweather animate-fadeInFirst font-bold tracking-wide text-stone-800 text-2xl sm:text-5xl lg:text-6xl mb-4">NFT utility is here</h1>
                            <h4 className="text-md sm:text-xl font-lato animate-fadeInSecond font-normal max-w-[580px] my-4 mb-8">BluBlock provides NFT collections a legally compliant ownership framework to enable its holders to share in licensing royalties, equity, and more.</h4>
                            <div className="flex items-center justify-center w-full md:items-start md:justify-start">
                                <Button buttonText="Apply Now" />
                            </div>
                            <p className="text-sm font-lato font-light mx-auto md:mx-0 block mt-4 text-stone-600 max-w-[300px]">Membership confirmations will be sent out on a rolling basis starting in February 2023</p>
                        </div>
                    </div>
                    <div className="relative md:w-[40%] flex justify-center items-center">
                        <IKImage
                            urlEndpoint={IKEndpoint}
                            path="cube.png"
                            lqip={{ active: true }}
                            className="rounded block animate-fadeInThird max-w-[415px] mx-auto"
                        />
                    </div>
                </div>
            </div>
            <Newsletter />
        </section>
    )
}

export default Hero