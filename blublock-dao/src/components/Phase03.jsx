import styles from '../styles';
import { traditional } from '../assets';

const Phase03 = () => {
  return (
    <section id="overview" className={`${styles.paddingY} border-solid border-stone-700 border-2 rounded-[16px] p-10`}>
        <div className="flex md:flex-row flex-col">
        <div className={`flex-1 ${styles.flexStart} flex-col xl:p-0 sm:px-16 px-6`}>
          <div className="text-center md:text-left my-5 pr-4">
            <p className="text-lg font-light text-stone-500 mb-8">Phase 03 - Legacy IP</p>
            <h1 className="flex-1 font-poppins font-semibold text-2xl lg:text-4xl text-white mb-8">Tokenize &amp; Communitize Legacy IP Properties</h1>
            <h6 className="text-lg text-stone-200 font-light my-4">Ingest high yield media IP properties into our club where members can share in financial upside</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">Target properties include Red Sonja, Naomi Campbell archival collection, Judge Dredd</h6>
            <h6 className="text-lg text-stone-200 font-light my-4">World Class licensing team will source and negotiate licensing deals</h6>
          </div>
        </div>

        <div className="relative md:basis-2/5">
          <img src={traditional} />
        </div>
      </div>
      
    </section>
  )
}

export default Phase03