import './App.css'
import {Routes,BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <Router>
      {/* Navbar */}
      {/* <Navbar/> */}
      <Header/>

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
