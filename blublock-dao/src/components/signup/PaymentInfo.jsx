import React from 'react'

const PaymentInfo = () => {
  return (
    <div>
        <h2 className="font-semibold text-lg">Payment Process</h2>
        <hr></hr>
        <div className="flex flex-col mb-4">
            <div className="py-4 text-center">
                <p className="text-md">Payment is made either by ETH/USDC/$USD</p>
                <p className="text-xs text-stone-400 my-2">Our Wallet Address for ETH</p>
                <p className="text-sm p-2 border border-stone-500 hover:bg-stone-100 hover:border-black my-2">BLUBLOCK.ETH</p>
                <p className="text-xs text-stone-400 my-2">Add this code to ETH txn</p>
                <p className="text-sm p-2 border border-stone-500 hover:bg-stone-100 hover:border-black">E@$H3342</p>
            </div>
        </div>
    </div>
  )
}

export default PaymentInfo