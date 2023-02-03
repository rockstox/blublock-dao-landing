import { membershipRequirements, membershipBenefits } from '../constants';
import Button from './Button';

const Membership = () => {
    return (
        <div id="membership" className="text-center mb-[100px]">
            <h1 className="text-3xl md:text-4xl text-bold">Product Details</h1>
            <div className="my-10 mx-auto max-w-[700px]">
                <h2 className="text-lg md:text-xl leading-loose text-stone-800 md:leading-loose">BluBlock is offering the first ever legally compliant infrastructure to decentralize equity and profit sharing ownership in an NFT collection to its holders. With BluBlock, an NFT can now represent more than just a tradeable asset, it can entitle its holders to recurring income.</h2>
                <h2 className="text-lg md:text-xl leading-loose mt-8 md:leading-loose text-sky-900">And no it's not a security.</h2>
            </div>
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


