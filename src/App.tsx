import './App.css'
import Header from './components/Header/Header';
import About  from './components/About/About';
import Project from './components/Projects/Project';
import Skill from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
        <Header />
        <div className="main-div">
          <About />
          <Project />
          <Skill />
          <Contact />
          <Footer />
        </div>
    </>
  )
}

export default App
