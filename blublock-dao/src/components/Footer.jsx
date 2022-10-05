import { logo } from '../assets'

const Footer = () => {
  return (
    <div className="pt-20 pb-10">
      <hr></hr>
      <div className="py-10 flex justify-center items-center text-white">
      <img src={logo} alt="BluBlock" className="w-[154px] h-[29px]"/>
      </div>
    </div>
  )
}

export default Footer