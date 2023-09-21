import React from 'react'
import './thanku.css'
import {useNavigate} from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
const Thanku = () => {
  const navigate=useNavigate()
  const handleThanks=()=>{
    navigate('/')
  }
  return (
    <>
<Navbar/>
    <div className='mainthanks'>
         <div className="cards">
            <div className="card-data">
               <img src="https://static.thenounproject.com/png/854669-200.png" alt="" className='icon-image' />
               <h2 style={{marginTop:"10px"}} className='thanku'>Thank You</h2>
               <div className='container'>
               <p className='thanksscreentext'>Thank you for your submission<br/> 
our experts will contact you <br/>
shortly!</p>
               </div>
                <button onClick={handleThanks} className='btn'>OK</button>
         </div>
         </div>
    </div>
  
        
    </>
  )
}

export default Thanku