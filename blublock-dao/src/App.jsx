import styles from './styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Phase01 from './components/Phase01';
import Phase02 from './components/Phase02';
import Phase03 from './components/Phase03';
// import Business from './components/Business';
// import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    // Navbar
    <div className="bg-primary font-merriweather w-full overflow-hidden">
      <Navbar />
      <Hero />
      <div className={`bg-stone-900 pt-[150px] pb-10 ${styles.flexStart} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Membership />
          {/* <Phase01 />
          <Phase02 />
          <Phase03 /> */}
          <Faq />
          <Footer />  
        </div>
      </div>
    </div>
  )
}

export default App