import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import './Confirmation.css'
import { Divider } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Confirmation = () => {
  const { state } = useLocation();
  const navigate=useNavigate()
  console.log(state)
   const getTodayDate=()=>{
  const date=  new Date();
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, '0'); // Add 1 to month since it's zero-based
        var day = date.getDate().toString().padStart(2, '0');
      
        return  day + '/' + month + '/'  + year;
   }

   const getCurrentTime=()=>{
    let date=new Date()
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var amOrPm = hours >= 12 ? "pm" : "am";
      
        if (hours > 12) {
          hours -= 12;
        } else if (hours === 0) {
          hours = 12;
        }
      
        var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes + ' ' + amOrPm;
        return formattedTime;
   }

   const handleSubmitOrder=()=>{
        const data = {
            shippingInfo:{
                address:state.userDetails.address,
                city:state.userDetails.city,
                province:state.userDetails.province,
                zip:state.userDetails.zip,
                phone:state.userDetails.phone,
                userName:state.userDetails.name,
            },
            orderItems:{
                quantity:state.quantity,
                product:state.id,
                totalPrice:state.totalAmount,
            },
         
        };
        fetch(`https://mobile-store-km17iiqc8-gulraizzafar64.vercel.app/api/v1/order/new`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.success){
                navigate('/thanks')
            }else{
                toast.error('SomeThing Went Wronge')
            }
          })
          .catch((err) => {
            console.log("err is re", err);
          });
   }
  return (
    <>
    <Navbar/>
    <div className='mainCardCon'>
      <div className='main-confirm-card'>
        <div className='titleContainerConfirm'>
        <div className='titleofconfirm'>
              <h5>
                Order Summary
              </h5>
        </div>
        </div>
        <div className='confirmContent mt-3'>
            <p><b>Date</b></p>
            <p>{getTodayDate()}</p>
        </div>
        <div className='confirmContent'>
            <p><b>Time</b></p>
            <p>{getCurrentTime()}</p>
        </div>
         <div className='mydivider'></div>
         <div className='headingContainerSearch mt-3'>
        <h5 className='headingSearch'>Phone Details</h5>
        
        <div className='liner'></div>
    </div>
    <div className='confirmContent'>
            <p><b>Name</b></p>
            <p>{state.name}</p>
        </div>
    <div className='confirmContent'>
            <p><b>Quantity</b></p>
            <p>{state.quantity}</p>
        </div>
    <div className='confirmContent'>
            <p><b>Color</b></p>
            <p>{state.selectedColor}</p>
        </div>
        <div className='mydivider'></div>
         <div className='headingContainerSearch mt-3'>
        <h5 className='headingSearch'>User Details</h5>
        
        <div className='liner'></div>
    </div>
    <div className='confirmContent'>
            <p><b>Name</b></p>
            <p>{state.userDetails.name}</p>
        </div>
        <div className='confirmContent'>
            <p><b>Email</b></p>
            <p>{state.userDetails.email}</p>
        </div>
        <div className='confirmContent'>
            <p><b>Phone</b></p>
            <p>{state.userDetails.phone}</p>
        </div>
        <div className='confirmContent'>
            <p><b>Addres</b></p>
            <p>{state.userDetails.address}</p>
        </div>
        <div className='mydivider'></div>

        <div className='headingContainerSearch mt-3'>
        <h5 className='headingSearch'>Total Price</h5>
        
        <div className='liner'></div>
    </div>
    <div className='confirmContent'>
            <p><b>Sub Total</b></p>
            <p>{state.totalAmount}Rs</p>
        </div>
        <div className='confirmContent'>
            <p><b>Shipping Charges</b></p>
            <p>200Rs</p>
        </div>
        <div className='mydivider'></div>

        <div className='confirmContent'>
            <p><b>Grand Total</b></p>
            <p><b style={{color:"green"}}>{parseInt(state.totalAmount+200)}Rs</b></p>
        </div>
      </div>
      <button onClick={handleSubmitOrder} className='confirm-button'>Confirm Order</button>
    </div>
    </>
  )
}

export default Confirmation