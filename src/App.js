
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Add from './Components/Pages/Add';
import Show from './Components/Pages/Show';
import NavBar from './Components/Layout/NavBar';
import Update from './Components/Pages/Update';
import Delete from './Components/Pages/Delete';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/add" element={<Add/>}></Route>
            <Route path="/show" element={<Show/>}></Route>
            <Route path='/update/:userId' element={<Update/>}/>
            <Route path='/delete/:userId' element={<Delete/>}/>

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
