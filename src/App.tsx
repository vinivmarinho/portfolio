import './App.css'
import Header from './components/Header/Header';
import About  from './components/About/About';
import Project from './components/Projects/Project';
function App() {
  return (
    <>
        <Header />
        <div className="main-div">
          <About />
          <Project />
        </div>
    </>
  )
}

export default App
