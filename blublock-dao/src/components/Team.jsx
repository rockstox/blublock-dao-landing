import { team } from "../constants";
import styles from "../styles";
import TeamCard from "./TeamCard";
import Stats from "./Stats";

const Team = () => (
  <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <h2 className={`${styles.heading2} w-full text-center`}>Meet the Team</h2>
      {/* <Stats /> */}
      <h2 className="my-7 font-poppins text-center text-white text-xl max-w-[600px]">BluBlock is a blend of media, engineering, and Web3 experts that are revolutionizing media licensing.</h2> 
    <div className="flex flex-wrap justify-around w-full feedback-container relative z-[1]">
      {team.map((card) => <TeamCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Team;