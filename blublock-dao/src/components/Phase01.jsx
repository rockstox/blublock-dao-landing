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
          <div className="text-center md:text-left my-5 pr-4 relative">
            <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">
              A Community of Media Pioneers
            </h1>
            <h6 className="text-lg text-stone-200 font-light my-4">Members will receive tokens based on NFT asset contribution and/or participation that entitle them to 5% of BluBlock's largest licensing deal between Franklinisbored + Public company</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">Our world class licensing team will source and negotiate licensing deals on behalf of member blue-chip NFTs, generating ongoing revenue for both the holder and the BluBlock community tokens.</h6>
          </div>
        </div>

        <div className="relative md:basis-2/5">
          <img className="rounded" src={community} />
        </div>
      </div>
      
    </section>
  )
}

export default Phase01