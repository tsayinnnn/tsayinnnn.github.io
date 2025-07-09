
import Header from './components/Header.jsx';
import Projects from './components/Projects.jsx';
import CV from './components/CV.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import AnimateOnScroll from './components/AnimateOnScroll'; 

function App() {
  return (
    <>
      <Header />
      <main>
        <AnimateOnScroll>
          <Home />
        </AnimateOnScroll>
        <AnimateOnScroll><Projects /></AnimateOnScroll>
          
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


