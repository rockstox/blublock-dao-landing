import styles from '../styles';
import Button from './Button';
import HeroAnimation from './HeroAnimation';
import { star, arrowUp, robot } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={arrowUp} alt="heads up" className="w-[24px] h-[24px]" />
          <p className="text-[14px] text-orange-200 ml-2">
          {" "}
            <span className="text-white mr-1">Largest NFT Licensing Deal Ever Done</span>
            {" "}Announcing Soon {" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold text-[72px] text-white">
            <span className="text-gradient">Your Favorite IP</span> {" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold text-[42px] text-white w-full">
        In the Palm of Your Hand
        </h1>
        <Button styles="mt-5 mb-5" />
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Using an innovative new DAO configuration, BluBlock is offering its community the opportunity to buy into the royalties and perks generated from the world's top media IP.</p>

      </div>

      <div className="relative">
        <HeroAnimation />
      </div>
    </section>
  )
}

export default Hero