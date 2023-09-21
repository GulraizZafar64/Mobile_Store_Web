import React from 'react'
import './Detail.css'
import Slider from "react-slick";
import { Divider } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import { useState } from 'react';
const Details = () => {
  const { state } = useLocation();
  const [quantity,setQuantity]=useState(1)
  const [selectedColor,setSelectedColor]=useState(state.colors[0])
  console.log(state)
  const navigate=useNavigate()

    let arr=[
        {
            src:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9iaWxlfGVufDB8fDB8fHww&w=1000&q=80"
        },
        {
            src:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80"
        },
    ]
    const settings = {
        customPaging: function(i) {
          return (
            <a>
              <img style={{height:"100%"}} src={state.images[i].url} />
            </a>
          );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const addQuantity=()=>{
        if(quantity==state.stock){

        }else{
          setQuantity(quantity+1)
        }
      }
      const subtractQuantity=()=>{
        if(quantity==1){

        }else{
          setQuantity(quantity-1)
        }
      }
  return (
    <>
    <Navbar/>
		<div class="container">
        <div className='headingContainerSearch mt-3'>
        <h2 className='headingSearch'>Product Details</h2>
        
        <div className='liner'></div>
    </div>
         <div className='row mt-5'>
         <div className='col-md-6'>
        <Slider {...settings} className='productDetailSlider '>
         {state.images.map((item)=>(
          <div>
            <img className='iamgeProduct' src={item.url} />
          </div>
         )) }
          {/* <div>
            <img className='iamgeProduct' src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vYmlsZSUyMHBob25lfGVufDB8fDB8fHww&w=1000&q=80" />
          </div> */}
        </Slider>
        </div>
        <div className='col-md-6 contentDetails'>
          <h4>{state.name}</h4>
          <p>{state.description}</p>
         <div className='row'>
             <div className='col-md-6'>
             <h5>Price: {state.price}Rs</h5>
             </div>
             <div className='col-md-6'>
             <h5>Stock: {state.stock}</h5>
             </div>
         </div>
          <Divider/>
          <div className='d-flex'>

               {state.colors.map((col)=>(
                <div onClick={()=>setSelectedColor(col)} className={col==selectedColor?'colorBalls addShadow':'colorBalls'} style={{backgroundColor:col}}>

</div>
               ))  }
              
          </div>
          <Divider/>

         <div className='d-flex'>
         <div className='qunatityContainer d-flex'>
             <p>Qty</p>
             <button onClick={subtractQuantity}>-</button>
             <p>{quantity}</p>
             <button onClick={addQuantity}>+</button>
          </div>
          <div className='byNowbutton'>
            <button onClick={()=>navigate('/shipping', { state: {
              id:state._id,
              name:state.name,
              quantity:quantity,
              description:state.description,
              totalAmount:parseInt(quantity)*parseInt(state.price),
              selectedColor:selectedColor,
              images:state.images
            } })}>Buy Now</button>
          </div>
         </div>
        </div>
         </div>
           </div>

    </>
  )
}

export default Details