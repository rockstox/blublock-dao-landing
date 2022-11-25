import { valueProps } from "../../constants";
import { star, shield, arrowUp } from "../../assets";

const ValueProps = () => (
    
  <div className="flex justify-center items-center w-full max-w-[530px]">
    <div className="flex flex-col">
      {valueProps.map((vp) => (
      <div key={vp.id} className="flex flex-row items-start justify-start mb-8">
        <img src={vp.icon} className="w-[30px] mr-4" />
        <div className="flex flex-col">
          <h2 className="font-semibold text-lg mt-1 mb-4">{vp.tagline}</h2>
          {vp.subpoints.map((subpoint, i) => (
            
          <div key={i} className="flex flex-row items-center justify-start mb-4">
              <div className="w-[20px] h-[20px] rounded-full bg-green-200 flex items-center justify-center">
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.2796 5.26667C3.2796 5.26667 6 1.5 10 0C5.87855 3.12191 3.69179 6.58095 3.69179 6.58095C3.46525 6.81126 3.09395 6.81126 2.86741 6.58095L0.38712 3.94476C0.169626 3.71359 0.169626 3.35308 0.38712 3.12191C0.624194 2.86994 1.02461 2.86994 1.26169 3.12191L3.2796 5.26667Z" fill="#12AC77"></path></svg>
              </div>
              <div className="ml-2 font-light text-sm">{subpoint}</div>
          </div>
          ))}
        </div>
      </div>
      ))}
    </div>
  </div>
);

export default ValueProps;