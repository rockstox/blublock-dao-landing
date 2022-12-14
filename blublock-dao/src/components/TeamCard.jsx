import { twitter, linkedin } from "../assets";

const TeamCard = ({ name, title, img, twitter_url, linkedin_url }) => (
  <div className="flex flex-col shadow-md shadow-slate-900 text-center justify-center items-center px-4 py-4 rounded-[8px] w-[30%] min-w-[240px] border-dashed border border-blue-400 my-5 m-2">
    <img src={img} alt={name} className="w-full h-auto max-w-[200px] rounded-[6px] mb-2" />
    <div className="flex flex-col text-">
      <h4 className="font-poppins font-semibold text-[18px] text-white">
        {name}
      </h4>
      <p className="font-poppins font-normal text-[14px] text-dimWhite">
        {title}
      </p>
      <div className="flex flex-row justify-center items-center mt-4">
          {twitter_url.length ? <a href={twitter_url} className="mr-3"><img src={twitter}/></a> : "" }
          {linkedin_url.length ? <a href={linkedin_url}><img src={linkedin}/></a> : "" }
      </div>
    </div>
  </div>
);


export default TeamCard;
