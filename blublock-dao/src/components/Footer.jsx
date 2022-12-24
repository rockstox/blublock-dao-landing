import { logoH } from '../assets'

const Footer = () => {
  return (
    <div className="py-10 w-full bg-sky-900">
      <div className="py-10 flex justify-center items-center text-white">
        <img src={logoH} alt="BluBlock" className="w-full max-w-[150px] bg-primary p-4 rounded" />
      </div>
    </div>
  )
}

export default Footer