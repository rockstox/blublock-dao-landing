import { stats } from "../constants";
import styles from "../styles";

const Stats = () => (
    
  <section className={`${styles.flexCenter} flex-row flex-wrap mb-5`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex justify-start items-center flex-row m-3`} >
        <h4 className="font-poppins font-semibold xs:text-[20px] text-[20px] xs:leading-[20px] leading-[20px] text-white">
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[18px] text-[18px] xs:leading-[18px] leading-[18px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;