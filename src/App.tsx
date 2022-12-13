import styles from "./App.module.scss";
import Header from "./components/Header";
import IntroSection from "./components/IntroSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.Home}>
      <Header />
      <IntroSection />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
}

export default App;
