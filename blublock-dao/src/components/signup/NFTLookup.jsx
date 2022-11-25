import React from 'react'
import Button from './button';

const NFTLookup = () => {
  return (
    <div>
        <div className="grid grid-cols-1 gap-6">
            <h2 className="font-semibold text-lg text-left">Let's get to know you and your NFT</h2>
            <hr></hr>
            <label className="block">
                <span className="text-gray-700">Name</span>
                <input type="text" className="mt-1 block w-full border-stone-300 rounded" placeholder="" />
            </label>
            <label className="block">
                <span className="text-gray-700">Email</span>
                <input type="email" className="mt-1 block w-full border-stone-300 rounded" placeholder="Enter Your Email" />
            </label>
            <label className="block">
                <span className="text-gray-700">Has your NFT been licensed before?</span>
                <select className="block w-full mt-1 border-stone-300 rounded">
                    <option>Yes</option>
                    <option>No</option>
                    <option>Currently in negotations</option>
                </select>
            </label>
            <hr></hr>
            <label className="block">
                <span className="text-gray-700">BAYC Token Number</span>
                <input type="text" className="mt-1 block w-full border-stone-300 rounded" placeholder="1234" />
            </label>
            <hr></hr>
            <Button />
        </div>
    </div>
  )
}

export default NFTLookup