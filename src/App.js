import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import Cleaning from './components/Cleaning';
import Understanding from './components/Understanding';
import Blasting from './components/Blasting';
import Behind from './components/Behind';
import Talk from './components/Talk';
import Latest from './components/Latest';
import Team from './components/Team';
import Faq from './components/Faq';
import Prime from './components/Prime';
import News from './components/News';
import List from './components/List';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000, });
  }, []);
  return (
    <>
      <Header />
      <Cleaning />
      <Understanding />
      <Blasting />
      <Behind />
      <Talk />
      <Latest />
      <Team />
      <Faq />
      <Prime />
      <News />
      <List />
      <Footer />
    </>
  );
}

export default App;
