import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/home/HomePage';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Landing from './pages/landing/Landing';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Landing />}/>
        <Route path='/home' element = {<HomePage />} />
        <Route path='/hotels' element = {<List />} />
        <Route path='/hotels/:id' element = {<Hotel />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
