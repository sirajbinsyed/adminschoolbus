
import React  from 'react';
import './App.css';
import Header from './header/Header';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Components/Home';
import TrackBus from './Components/TrackBus';
import MngStaff from './Components/MngStaff';
import Mngstd from './Components/Mngstd';
import AddBusRoute from './Components/AddBusRoute';
import MngPayment from './Components/MngPayment';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <>
     <Header/>
       <BrowserRouter>
       
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route exact path="/TrackBus" element={<TrackBus/>}/>
                    <Route exact path="/MngStaff" element={<MngStaff/>}/>
                    <Route exact path="/Mngstd" element={<Mngstd/>}/>
                    <Route exact path="/AddBusRoute" element={<AddBusRoute />}/>
                    <Route exact path="/MngPayment" element={<MngPayment />}/>
                </Routes>
            </BrowserRouter>
     
            </>
    </div>
    
  );
}

export default App;
