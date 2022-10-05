import styles from './styles';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Business from './components/Business';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  return (
    // Navbar
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
          <Hero />
        </div>
      </div>

      {/* Hero */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>

        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Team />
          <Business />
          <Footer />  
        </div>
      </div>
    </div>
  )
}

export default App
