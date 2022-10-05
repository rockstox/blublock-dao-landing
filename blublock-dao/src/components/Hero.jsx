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
            <span className="text-white mr-1">BluBlock secures single largest NFT licensing deal licensing a set of Bored Apes to a public company</span>
            {" "}Official Announcement Soon {" "}
          </p>
        </div>

        <div className="w-full text-center sm:text-left my-5">
          <h1 className="flex-1 font-poppins font-semibold text-[34px] sm:text-[48px] lg:text-[68px] text-white">
            <span className="text-gradient">Your favorite IP</span> {" "}
          </h1>
          <h1 className="font-poppins font-semibold text-[32px] lg:text-[48px] text-white w-full mb-10">
          in the palm of your hand
          </h1>
          <Button styles="block w-[180px] mx-auto sm:mx-0 mt-5 mb-10" />
          <p className={`${styles.paragraph} text-sm sm:text-lg max-w-[570px] mt-5 mx-auto sm:mx-0`}>Using an innovative multi-DAO configuration, BluBlock is offering its community the opportunity to buy into the royalties and perks generated from the world's top media IP.</p>
        </div>
      </div>

      <div className="relative">
        <HeroAnimation />
      </div>
    </section>
  )
}

export default Hero