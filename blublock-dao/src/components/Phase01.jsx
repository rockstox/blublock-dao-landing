import styles from '../styles';
import Button from './Button';
import HeroAnimation from './HeroAnimation';
import { community } from '../assets';

const Phase01 = () => {
  return (
    <section id="overview" className={`${styles.paddingY} mb-10 border-solid border-stone-800 border-2 rounded-[16px] p-10`}>
      <div className="flex md:flex-row flex-col">
        <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
          <div className="text-center md:text-left my-5 pr-4">
            <p className="text-lg font-light text-stone-500 mb-8">Phase 01 - Community</p>
            <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">
              A Community of Media Pioneers
            </h1>
            <h6 className="text-lg text-stone-200 font-light my-4">Members will receive tokens based on NFT asset contribution and/or participation that entitle them to 5% of BluBlock's largest licensing deal between Franklinisbored + Public company</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">Our world class licensing team will source and negotiate licensing deals on behalf of member blue-chip NFTs, generating ongoing revenue for both the holder and the BluBlock community tokens.</h6>
          </div>
        </div>

        <div className="relative md:basis-2/5">
          <img src={community} />
        </div>
      </div>
      
    </section>
  )
}

export default Phase01