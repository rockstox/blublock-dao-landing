import styles from '../styles';
import { contract } from '../assets';

const Phase02 = () => {
  return (
    <section id="overview" className={`${styles.paddingY} mb-10 border-solid border-stone-800 border-2 rounded-[16px] p-10 relative`}>
      <div className="flex md:flex-row flex-col">
        <div className={`flex-1 ${styles.flexStart} flex-col`}>
          <p style={{ textShadow:'rgb(159 159 159 / 40%) 15px 10px 50px'}} className="text-6xl w-full my-10 text-center md:text-left font-black text-stone-900">PHASE 02</p>
            <div className="text-center md:text-left my-5 md:pr-8pwd relative">
                <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">Crypto Native Licensing Deals</h1>
                <h6 className="text-lg text-stone-200 font-light my-4">We will launch a DAO licensing solution for members that allows for web3 licensing at scale.</h6>
                <h6 className="text-lg text-stone-200 font-light my-4">Smart contracts executed royalties make licensing more efficient and more communal</h6>
                <h6 className="text-lg text-stone-200 font-light my-4">Onchain licensing data will make deal discovery easier and more transparent for all stakeholders</h6>
            </div>
        </div>
        <div className="relative md:basis-2/5 flex justify-center items-center">
          <img className="rounded" src={contract} />
        </div>
      </div>
      
    </section>
  )
}

export default Phase02