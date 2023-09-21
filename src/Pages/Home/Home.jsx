import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import ProductCard from '../../Components/ProductCard/ProductCard'
import SearchCard from '../../Components/Search/SearchCard'
import { Link } from 'react-router-dom'
const Home = () => {
  const [product,setProduct]=useState([])
  const [filterdArray,setFilteredArray]=useState([])

  useEffect(() => {
    getPhones()
  }, [])
  
  const getPhones=()=>{
    fetch(`http://localhost:4000/api/v1/getProduct`, {
      method: 'GET',
    }).then(res => res.json()
      .then(data => {
        if(data.success){
          setProduct(data.products)
          setFilteredArray(data.products)
        }
       console.log(data)
      })
  
    ).catch(err => {
     console.log(err)
    })
  }
  const gettingFilterData=(data)=>{
   setFilteredArray(data)
  }
  return (
    <>
    <Navbar/>
 <div className='mt-2 container-fluid'>
 <div className='row'>
    <div className='col-md-6'>
    <Link to={`/category/Oppo`}>
       <div className='leftGridHero'>
        <img className='myHeromainImage'  src="https://static.vecteezy.com/system/resources/previews/020/336/425/original/oppo-logo-oppo-icon-free-free-vector.jpg" alt='image'/>
        <div className='myContent'>
         {/* <h3>Oppo A58 5G</h3>
         <p>Dimensions 163.8 x 75 x 8 mm, 188g, IP54 Protection, available in Black, Blue, & Violet, with memory options of 128GB ROM/6GB RAM, 128GB ROM/8GB RAM, and 256GB ROM/8GB RAM, featuring UFS 2.2 storage</p> */}
         <button>Purchase Now!</button>
        </div>
        <div className='overly'>
        </div>
       </div>
       </Link>

    </div>
    <div className='col-md-6'>
      <div className='row'>
      <div className='col-md-6'>
        <Link to={`/category/Apple`}>
        <div className='rightGridHero'>
        <img className='' src="https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png" alt='image'/>
        <div className='myContent2'>
         {/* <h3>Oppo Reno 8 </h3> */}
         <button>Purchase Now!</button>
        </div>
        <div className='overly2'></div>
       </div>
         </Link>
    
    </div>
    <div className='col-md-6'>
    <Link to={`/category/Xiaomi`}>
       <div className='rightGridHero'>
        <img className='' src="https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png" alt='image'/>
        <div className='myContent2'>
         {/* <h3>Oppo F15</h3> */}
         <button>Purchase Now!</button>
        </div>
        <div className='overly2'></div>
       </div>
       </Link>

    </div>
    <div className='col-md-6'>
    <Link to={`/category/TecnoMobile`}>
       <div className='rightGridHero mt-lg-3'>
        <img className='' src="https://seeklogo.com/images/T/tecno-mobile-logo-E0ECE39872-seeklogo.com.png" alt='image'/>
        <div className='myContent2'>
         {/* <h3>Oppo A31</h3> */}
         <button>Purchase Now!</button>
        </div>
        <div className='overly2'></div>
       </div>
       </Link>

    </div>
    <div className='col-md-6'>
    <Link to={`/category/infinix`}>
       <div className='rightGridHero mt-lg-3'>
        <img className='' src="https://i.pinimg.com/originals/98/a3/2e/98a32e0ef25e6148b8a08954956eb0e4.png" alt='image'/>
        <div className='myContent2'>
         {/* <h3>Oppo F15</h3> */}
         <button>Purchase Now!</button>
        </div>
        <div className='overly2'></div>
       </div>
       </Link>
    </div>
      </div>
    </div>

  </div>
 </div>
 <div className='container'>
   <SearchCard products={product} filArray={gettingFilterData}/>
 </div>
 <div className='headingContainerSearch mt-5'>
        <h2 className='headingSearch'>Popular Phones</h2>
        
        <div className='liner'></div>
    </div>
<div className='container-fluid mt-3'>
<div className="row">
 {filterdArray?.map((item)=>(
   <div className="col-md-3" style={{display:"flex",justifyContent:"center"}}>
  <ProductCard data={item}/>
  </div>
 ))} 
 </div>
</div>
    </>
  )
}

export default Home