import './App.css'
import Header from './components/Header/Header';
import About  from './components/About/About';
import Project from './components/Projects/Project';
import Skill from './components/Skills/Skills';
function App() {
  return (
    <>
        <Header />
        <div className="main-div">
          <About />
          <Project />
          <Skill />
        </div>
    </>
  )
}

export default App
