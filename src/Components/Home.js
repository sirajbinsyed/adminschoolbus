import React from 'react'
import './Style.css'
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();
  return (
    <>
    <div className='body'>
      <div className='container1'>
        <div className='container2'>
        <button onClick={() => navigate("/TrackBus")}>
        <p1>Track bus</p1>
            </button>
         
          {/* <img  alt='loading' src="./trackbus.png"/>  */}
          </div>
        <div className='container2'>
        <button onClick={() => navigate("/MngStaff")}>
        <p1>Manage Staff & Bus</p1>
            </button>
        
        </div>
        <div className='container2'>
        <button onClick={() => navigate("/Mngstd")}>
        <p1>Manage Student</p1>
            </button>
         
          </div>
        <div className='container2'>
        <button onClick={() => navigate("/AddBusRoute")}>
        <p1>Add Bus Routes</p1>
            </button>
       
        </div>
        <div className='container2'>
        <button onClick={() => navigate("/MngPayment")}>
        <p1>Manage payment</p1>
            </button>
        
        </div>
        <div className='container2'>
        <p1>Checkout Payments</p1>
        </div>



       
      </div>
     
    </div>
    </>
  )
}

export default Home