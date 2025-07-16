
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import CV from './components/CV.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import AnimateOnScroll from './components/AnimateOnScroll'; 
import Proj2 from './components/Proj2.jsx';

function App() {
  return (
    <>
      <Header />
      <main>
        <AnimateOnScroll>
          <Home />
        </AnimateOnScroll>
        <AnimateOnScroll><Projects /></AnimateOnScroll>
        <AnimateOnScroll><Proj2 /></AnimateOnScroll>
          
        <AnimateOnScroll>
          <CV />
        </AnimateOnScroll>
        <AnimateOnScroll>
          <Contact />
        </AnimateOnScroll>
      </main>
    </>
  );
}

export default App;


