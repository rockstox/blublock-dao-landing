import {useState} from 'react';
import Button from './Button';
import { bayc, cryptoPunk, meeBits} from '../assets';

const Hero = () => {
    const [collection, setCollection] = useState(false);

    function setCollectionName(collection_name) {
        setCollection( (collection == collection_name) ? false : collection_name);
    }
  return (
    <section id="home" className="my-[150px]">
        <div className="w-full text-center my-5 font-poppins text-white">
            <h1 className="font-poppins font-bold text-[34px] sm:text-[48px] lg:text-[68px] text-white">Make Your NFT License Ready</h1>
            <h1 className="font-poppins font-semibold text-[32px] lg:text-[48px] text-white w-full mb-10">
            Choose Your NFT's Collection and Get Started
            </h1>
            <div className="flex flex-row align-center justify-center my-10">
                <div className={`border-solid cursor-pointer ${(collection == 'bayc') ? "border-green-400 bg-green-900" : "border-white"} border-2 rounded p-3 text-center flex flex-col align-center justify-center font-bold mx-5`} onClick={() => setCollectionName("bayc")}>
                    <img className="block max-w-[150px] mb-2" src={`${bayc}`} />
                    <p>BAYC</p>
                </div>
                <div className={`border-solid cursor-pointer ${(collection == 'cryptoPunks') ? "border-green-400 bg-green-900" : "border-white"} border-2 rounded p-3 text-center flex flex-col align-center justify-center font-bold mx-5`} onClick={() => setCollectionName("cryptoPunks")}>
                    <img className="block max-w-[150px] mb-2" src={`${cryptoPunk}`} />
                    <p>Crypto Punks</p>
                </div>
                <div className={`border-solid cursor-pointer ${(collection == 'meeBits') ? "border-green-400 bg-green-900" : "border-white"} border-2 rounded p-3 text-center flex flex-col align-center justify-center font-bold mx-5`} onClick={() => setCollectionName("meeBits")}>
                    <img className="block max-w-[150px] mb-2" src={`${meeBits}`} />
                    <p>Meebits</p>
                </div>
            </div>
            <Button buttonText="Get Started" styles={`${collection ? 'bg-green-500 border-green-400 cursor-pointer':'border-stone-700 text-stone-700'}`} />
        </div>
    </section>
  )
}

export default Hero