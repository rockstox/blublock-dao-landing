import styles from './styles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Phase01 from './components/Phase01';
import Phase02 from './components/Phase02';
import Phase03 from './components/Phase03';
import Business from './components/Business';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    // Navbar
    <div className="bg-primary font-poppins w-full overflow-hidden">
      <Navbar />
      <Hero />
      <div className={`bg-stone-900 py-[150px] ${styles.flexStart} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Membership />
          <Phase01 />
          <Phase02 />
          <Phase03 />
          <Team />
          <Business />
          <Footer />  
        </div>
      </div>
    </div>
  )
}

export default App
