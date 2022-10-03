import { team } from "../constants";
import styles from "../styles";
import TeamCard from "./TeamCard";
import Stats from "./Stats";

const Team = () => (
  <section id="team" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <h2 className={`${styles.heading2} w-full text-center mb-5`}>Meet the Team</h2>
      <Stats />
    <div className="flex flex-wrap justify-around w-full feedback-container relative z-[1]">
      {team.map((card) => <TeamCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Team;