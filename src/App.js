import './App.css';
import { Routes, Route } from "react-router-dom";
import About from './Pages/About/About';
import Header from './Pages/Home/Header/Header';
import Home from './Pages/Home/Home/Home';
import Lunch from './Pages/Home/AvailableFoods/Lunch/Lunch';
import Dinner from './Pages/Home/AvailableFoods/Dinner/Dinner';
import Breakfast from './Pages/Home/AvailableFoods/Breakfast/Breakfast';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}>
          <Route path='breakfast' element={<Breakfast></Breakfast>}></Route>
          <Route path='lunch' element={<Lunch></Lunch>}></Route>
          <Route path='dinner' element={<Dinner></Dinner>}></Route>
        </Route>
        <Route path="/about" element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
