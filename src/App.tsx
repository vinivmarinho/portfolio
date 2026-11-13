import './App.css'
import Header from './components/Header/Header';
import { About } from './components/About/About';
function App() {
  return (
    <>
        <Header />
        <div className="main-div">
          <About />
        </div>
    </>
  )
}

export default App
