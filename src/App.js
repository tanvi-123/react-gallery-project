import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComponent from './Components/NavComponent';
import Photos from './Components/Photos';
import About from './Components/About'
import Contact from './Components/Contact';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Photo from './Components/Photo';

function App() {
  return (
    <>
    <NavComponent/>
    <BrowserRouter>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/' element={<Photos/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/photo/:id' element={<Photo/>}/>
      
    </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
