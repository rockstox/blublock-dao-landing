import styles from '../styles';
import Button from './Button';
import HeroAnimation from './HeroAnimation';
import { arrowUp} from '../assets';

const Phase02 = () => {
  return (
    <section id="overview" className={`${styles.paddingY} mb-10 border-solid border-stone-700 border-2 rounded-[16px] p-10`}>
      <div className="flex md:flex-row flex-col">
        <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
            <div className="text-center md:text-left my-5 pr-4">
                <p className="text-lg font-light text-stone-500 mb-8">Phase 02 - DAO Facilitated Licensing</p>
                <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">Crypto Native Licensing Deals</h1>
                <h6 className="text-lg text-stone-200 font-light my-4">We will launch DAO licensing solution for members that allows for web3 licensing at scale</h6>
                <h6 className="text-lg text-stone-200 font-light my-4">Members will earn additional tokens through community participation</h6>
                <h6 className="text-lg text-stone-200 font-light my-4">World Class licensing team will source and negotiate licensing deals on behalf of member blue-chip NFTs</h6>
          </div>
        </div>

        <div className="relative">
          <HeroAnimation />
        </div>
      </div>
      
    </section>
  )
}

export default Phase02