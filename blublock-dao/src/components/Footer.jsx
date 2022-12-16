import { logoH } from '../assets'

const Footer = () => {
  return (
    <div className="py-10">
      <hr></hr>
      <div className="py-10 flex justify-center items-center text-white">
      <img src={logoH} alt="BluBlock" className="w-full max-w-[250px]"/>
      </div>
    </div>
  )
}

export default Footer