import './App.css'
import {Routes,BrowserRouter as Router, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';

function App() {

  return (
    <Router>
      {/* Navbar */}
      <Navbar/>

      {/* routes */}
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>

      {/* footer */}
      <Footer/>

    </Router>
  )
}

export default App
