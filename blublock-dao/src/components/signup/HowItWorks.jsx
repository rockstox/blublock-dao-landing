import Button from '../Button';
import { useState } from "react"
import { bayc, cryptoPunk, meeBits} from '../../assets';

const HowItWorks = () => {
  const [collection, setCollection] = useState(false);

  function setCollectionName(collection_name) {
      setCollection( (collection == collection_name) ? false : collection_name);
  }
  return (
    
    <div className="w-full pt-20 pb-10">
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
            <Button buttonText="Apply Now" />
    </div>
  )
}

export default HowItWorks;