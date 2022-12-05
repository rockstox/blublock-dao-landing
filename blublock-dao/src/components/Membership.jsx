import {membershipRequirements, membershipBenefits } from '../constants';
import Button from './Button';

const Membership = () => {
  return (
    <div className="text-white text-center pb-[150px]">
        <h1 className="text-5xl text-bold">Membership Details</h1>
        <p className="text-lg mx-auto my-8 max-w-[600px]">For the creators, the believers and the adventurers. An open invitation to co-create. To build a new community. To help design Porsche's future in the virtual world.</p>
        <div className="flex flex-col">
            <p className="font-semibold text-sm text-stone-200 mb-8">MEMBERSHIP BENEFITS</p>
            <div className="flex flex-row mx-auto gap-4 flex-wrap items-center justify-center">
                {membershipBenefits.map((benefit) => (
                    <p key={benefit.id} className="text-md w-[300px] h-[115px] flex justify-center items-center font-light text-white p-4 bg-stone-800 hover:border-blue-700 hover:border-2">{benefit.text}</p>
                ))}
            </div>
            <p className="font-semibold text-sm text-stone-200 my-8">MEMBERSHIP REQUIREMENTS</p>
            <div className="flex flex-row mx-auto gap-4 flex-wrap items-center justify-center mb-8">
                {membershipRequirements.map((benefit) => (
                    <p key={benefit.id} className="text-md w-[300px] h-[115px] flex justify-center items-center font-light text-white p-4 bg-stone-800 hover:border-blue-700 hover:border-2">{benefit.text}</p>
                ))}
            </div>
            <Button buttonText="Apply Now" />
        </div>
    </div>
  )
}

export default Membership