import { quotes } from "../assets";

const TeamCard = ({ name, title, img }) => (
  <div className="flex flex-col shadow-md shadow-slate-900 text-center justify-center items-center px-4 py-4 rounded-[8px] w-[30%] min-w-[240px] border-dashed border border-blue-400 my-5 m-2">
    <img src={img} alt={name} className="w-[80px] h-[80px] rounded-[6px] mb-2" />
    <div className="flex flex-col text-">
      <h4 className="font-poppins font-semibold text-[18px] text-white">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[14px] text-dimWhite">
        {title}
      </p>
    </div>
  </div>
);


export default TeamCard;
