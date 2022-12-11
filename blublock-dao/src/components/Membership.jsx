import {membershipRequirements, membershipBenefits } from '../constants';
import Button from './Button';

const Membership = () => {
  return (
    <div className="text-white text-center pb-[150px]">
        <h1 className="text-5xl text-bold">Membership Details</h1>
        <p className="text-md font-light mx-auto leading-7 mt-8 mb-10 max-w-[800px]">BluBlock is a members-only club for NFT enthusiasts who own blue chips NFTs with commercial licensing rights. We are currently only accepting applications from Bored Ape, CryptoPunk, and Meebit holders. As a co-op, we seek active participants to bring licensing income to NFTs. Members who contribute sought-after NFTs or participate in the community earn more tokens and greater financial upside in collective deals. Membership is proved by a BluBlock NFT.</p>
        <div className="flex flex-col text-center">
            <p className="font-semibold text-sm text-stone-200 mb-8">MEMBERSHIP BENEFITS</p>
            <div className="flex flex-row mx-auto gap-4 flex-wrap items-center justify-center">
                {membershipBenefits.map((benefit) => (
                    <p key={benefit.id} className="text-md w-[275px] self-stretch flex justify-center items-center font-light text-white p-6 bg-stone-800 border-stone-900 border-2 hover:border-blue-700 hover:border-2">{benefit.text}</p>
                ))}
            </div>
            <p className="font-semibold text-sm text-stone-200 my-8">MEMBERSHIP REQUIREMENTS</p>
            <div className="flex flex-row mx-auto gap-4 flex-wrap items-center justify-center mb-8">
                {membershipRequirements.map((benefit) => (
                    <p key={benefit.id} className="text-md w-[275px] h-[115px] flex justify-center items-center font-light text-white p-4 bg-stone-800 hover:border-blue-700 hover:border-2">{benefit.text}</p>
                ))}
            </div>
            <Button buttonText="Apply Now" />
        </div>
    </div>
  )
}

export default Membership