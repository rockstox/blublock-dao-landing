import styles from './styles';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Billboard from './components/Billboard';
// import Business from './components/Business';
// import Team from './components/Team';
import Faq from './components/Faq';
import Footer from './components/Footer';

function App() {
  return (
    // Navbar
    <div className="bg-primary font-merriweather antialiased w-full overflow-hidden">
      <Hero />
      <div className={`pt-[150px] pb-10 ${styles.flexStart} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Billboard />
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