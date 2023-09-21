import React from 'react'
import './Shipping.css'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Shipping = () => {
  const navigate=useNavigate()

  const [userDetails,setUserDetails]=useState({name:'',email:'',phone:'',province:'',city:'',zip:'',address:''})
  const { state } = useLocation();
console.log(state)

const handleChange = (event) => {
  const { name, value } = event.target;
  setUserDetails({
    ...userDetails,
    [name]: value,
  });
};
const handlePlace=()=>{
  if(userDetails.address=='' || userDetails.zip=='' || userDetails.city=='' || userDetails.province=='' || userDetails.phone=='' || userDetails.email=='' || userDetails.name==''){
    toast.error("Please Enter All Fields")
  }else{
    console.log("chala?")
    state['userDetails']=userDetails
    console.log(state)
    navigate('/confirmation', { state:state })
  }

}

  return (
    <>
    <Navbar/>
   <div className='container'>
   <div className='ShippingCard'>
   <div className='container'>
   {/* <ArrowLeftOutlined className='backArrow'/> */}
   <div className='headingContainerSearch '>
        <h2 className='headingSearch'>Shipping Information</h2>
        <div className='liner'></div>
    </div>
    <div className='row'>
      <div className='col-md-6'>
      <div className='hereTheForm container'>
        <div className='row'>
         <div className='col-md-6 mt-3'>
          <label><b>Enter Name</b></label>
          <input
          name="name"
        value={userDetails.name}
        onChange={handleChange}
          placeholder='Please Enter The Name' className='form-control'/>
         </div>
         <div className='col-md-6 mt-3'>
          <label><b>Enter Email</b></label>
          <input
          type='email'
          name="email"
        value={userDetails.email}
        onChange={handleChange}
          placeholder='Please Enter The Email' className='form-control'/>
         </div>
         <div className='col-md-6 mt-3'>
          <label><b>Enter Phone Number</b></label>
          <input
          name="phone"
        value={userDetails.phone}
        onChange={handleChange}
          placeholder='Please Enter The Email' className='form-control'/>
         </div>
         <div className='col-md-6 mt-3'>
          <label><b>Enter Province</b></label>
          <input
          name="province"
        value={userDetails.province}
        onChange={handleChange}
          placeholder='Please Enter The Province' className='form-control'/>
         </div>
         <div className='col-md-6 mt-3'>
          <label><b>Enter City</b></label>
          <input
          name="city"
        value={userDetails.city}
        onChange={handleChange}
          placeholder='Please Enter The City' className='form-control'/>
         </div>
         <div className='col-md-6 mt-3'>
          <label><b>Enter Zip Code</b></label>
          <input
          name="zip"
        value={userDetails.zip}
        onChange={handleChange}
          placeholder='Please Enter The Zip' className='form-control'/>
         </div>
         <div className='col-md-12 mt-3'>
          <label><b>Enter Complete Address</b></label>
          <div>
          <textarea
          name="address"
        value={userDetails.address}
        onChange={handleChange}
          placeholder='Write.....' className='myTextArea'>
            
            </textarea>
          </div>
         </div>
        </div>
      </div>
      </div>
      <div className='col-md-6 imageshipcont'>
        <img className='shippingimg' height={350} src="https://img.freepik.com/premium-vector/x9tiny-man-ordering-product-online-via-smartphone-app-phone-order-illustration-fast-delivery-service_566886-1773.jpg?w=2000"/>
      </div>
    </div>
     
      <div className='placeOrderButton'>
        <button onClick={handlePlace}>Place Order</button>
      </div>
   </div>
     </div>
   </div>
    </>
  )
}

export default Shipping