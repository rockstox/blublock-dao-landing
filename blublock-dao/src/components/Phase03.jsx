import styles from '../styles';
import { traditional } from '../assets';

const Phase03 = () => {
  return (
    <section id="overview" className={`${styles.paddingY} border-solid border-stone-800 border-2 rounded-[16px] p-10 relative`}>
      
      <div className="flex md:flex-row md:basis-3/5 flex-col">
        <div className={`${styles.flexStart} md:basis-3/5 flex-col`}>
          <p style={{ textShadow:'rgb(159 159 159 / 40%) 15px 10px 50px' }} className="text-6xl w-full my-10 font-black text-center md:text-left text-stone-900">PHASE 03</p>
          <div className="text-center md:text-left my-5 md:pr-8 relative">
            <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">Tokenize &amp; Communitize Legacy IP Properties</h1>
            <h6 className="text-lg text-stone-200 font-light my-4">A fund will be setup to purchase traditional IP properties. The community will propose IP to be purchased and actively participate as the new stewards of legacy IP.</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">For the first time in history, members and fans of an IP property such as Judge Dredd or Akira will be able to share in the financial upside of licensing deals.</h6>
          </div>
        </div>
        <div className="relative md:basis-2/5 flex justify-center items-center">
          <img className="rounded block" src={traditional} />
        </div>
      </div>
      
    </section>
  )
}

export default Phase03