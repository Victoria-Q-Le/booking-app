import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from './pages/home/HomePage';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<HomePage />} />
        <Route path='/hotels' element = {<List />} />
        <Route path='/hotels/:id' element = {<Hotel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
