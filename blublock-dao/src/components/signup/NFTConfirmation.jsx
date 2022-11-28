import React from 'react'

const NFTConfirmation = () => {

    const metaData = {
        ownerAddr: "0xb794f5ea0ba39494ce839613fffba74279579268",
        imgSrc: "https://ik.imagekit.io/bayc/assets/ape3.png"
        
    }
  return (
    <div>
        <h2 className="font-semibold text-lg">Confirm Your NFT</h2>
        <hr></hr>
        <div className="flex flex-col mb-4">
            <div className="py-4 text-center">
                <img src={metaData.imgSrc} className="border border-stone-400 rounded-[15px] mx-auto max-w-[200px]" />
                <p className="text-md text-center">BAYC #2442</p>
                <p className="text-xs text-stone-400 mt-2">Owner Wallet Address</p>
                <p className="text-xs p-2 border border-stone-500 hover:bg-stone-100 hover:border-black">{metaData.ownerAddr}</p>
                <p className="text-sm mt-4">*Please confirm the above is your wallet address before continuing</p>
            </div>
            <hr></hr>
        </div>
    </div>
  )
}

export default NFTConfirmation