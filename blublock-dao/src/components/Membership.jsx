import {membershipRequirements, membershipBenefits } from '../constants';
import Button from './Button';

const Membership = () => {
  return (
    <div id="membership" className="text-center">
        <h1 className="text-4xl text-bold mb-[50px]">Membership Details</h1>
        {/* <p className="text-md font-light mx-auto leading-7 mt-8 mb-10 max-w-[800px]">BluBlock is a members-only club for NFT enthusiasts who own blue chips NFTs with commercial licensing rights. We are currently only accepting applications from Bored Ape, CryptoPunk, and Meebit holders. As a co-op, we seek active participants to bring licensing income to NFTs. Members who contribute sought-after NFTs or participate in the community earn more tokens and greater financial upside in collective deals. Membership is proved by a BluBlock NFT.</p> */}
        <div className="flex flex-col text-center">
            <p className="font-merriweather font-semibold text-sm text-stone-800 mb-8">BENEFITS</p>
            <div className="flex flex-row mx-auto gap-6 flex-wrap items-center justify-center">
                {membershipBenefits.map((benefit) => (
                    <div className="w-[275px] flex flex-col rounded justify-center items-center border-stone-200 border-2 hover:border-blue-500 hover:border-2">
                        <img className="max-w-full" src={benefit.img} />
                        <p key={benefit.id} className="text-md font-lato font-light text-stone-800 p-6">{benefit.text}</p>
                    </div>
                ))}
            </div>
            <p className="font-semibold text-sm text-stone-800 my-8">REQUIREMENTS</p>
            <div className="flex flex-row mx-auto gap-4 flex-wrap items-center justify-center mb-8">
                {membershipRequirements.map((benefit) => (
                    <div className="w-[275px] flex justify-center p-4 items-center rounded border-stone-200 border-2 hover:border-blue-500 hover:border-2 hover:border-blue-700 hover:border-2 ">
                    <p key={benefit.id} className="text-md font-light">{benefit.text}</p>
                    </div>
                ))}
            </div>
            <Button buttonText="Apply Now" />
        </div>
    </div>
  )
}

export default Membership