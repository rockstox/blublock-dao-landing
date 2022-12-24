import { membershipRequirements, membershipBenefits } from '../constants';
import Button from './Button';

const Membership = () => {
    return (
        <div id="membership" className="text-center mb-[100px]">
            <h1 className="text-3xl md:text-4xl text-bold mb-[50px]">Membership Details</h1>
            {/* <p className="text-md font-light mx-auto leading-7 mt-8 mb-10 max-w-[800px]">BluBlock is a members-only club for NFT enthusiasts who own blue chips NFTs with commercial licensing rights. We are currently only accepting applications from Bored Ape, CryptoPunk, and Meebit holders. As a co-op, we seek active participants to bring licensing income to NFTs. Members who contribute sought-after NFTs or participate in the community earn more tokens and greater financial upside in collective deals. Membership is proved by a BluBlock NFT.</p> */}
            <div className="flex flex-col text-center">
                <div className="flex flex-row mx-auto gap-6 flex-wrap items-center justify-center">
                    {membershipBenefits.map((benefit) => (
                        <div className="w-[300px] self-stretch flex flex-col drop-shadow rounded justify-center items-center bg-white p-6">
                            <img className="max-w-full h-[227px]" src={benefit.img} />
                            <h6 className="font-black mb-2">{benefit.title}</h6>
                            <p key={benefit.id} className="text-md font-lato font-normal text-stone-800">{benefit.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center mt-10">
                    <p className="mb-4 text-xs">*Bluechip NFT required</p>
                    <Button buttonText="Apply Now" />
                    <p className="text-sm font-lato font-light mx-auto md:mx-0 block mt-4 text-stone-600 max-w-[300px]">Membership confirmations will be sent out on a rolling basis starting in February 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Membership