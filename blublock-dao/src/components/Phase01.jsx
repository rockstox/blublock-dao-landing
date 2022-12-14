import styles from '../styles';
import Button from './Button';
import HeroAnimation from './HeroAnimation';
import { community } from '../assets';

const Phase01 = () => {
  return (
    <section id="overview" className={`${styles.paddingY} mb-10 border-solid border-stone-800 border-2 rounded-[16px] p-10 relative`}>
      <div className="flex md:flex-row flex-col">
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
          <p style={{ textShadow:'rgb(159 159 159 / 40%) 15px 10px 50px' }} className="text-6xl w-full my-10 font-black text-center md:text-left text-stone-900">PHASE 01</p>  
          <div className="text-center md:text-left my-5 md:pr-8 relative">
            <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">
              A Community of Media Pioneers
            </h1>
            <h6 className="text-lg text-stone-200 font-light my-4">Membership confirmations will be sent out beginning in February 2023.</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">Members will receive tokens entitling them to a share of the profits from BluBlock's historic NFT licensing deal between Franklinisbored + Public company.</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">Our team will source and negotiate NFT licensing deals.</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">We will offer exclusive NFT sponsorship packages to our members negotiated by our team (Formula 1, PGA Tour, NY Fashion Week, US Open, Times Square).</h6>
          </div>
        </div>

        <div className="relative md:basis-2/5 flex justify-center items-center">
          <img className="rounded" src={community} />
        </div>
      </div>
      
    </section>
  )
}

export default Phase01