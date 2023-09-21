import React, { useEffect, useState } from 'react'
import './cat.css'
import ProductCard from '../../Components/ProductCard/ProductCard'
import { useParams } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Loader from '../../Components/Loader/Loader'
const CatPage = () => {
  const [product,setProduct]=useState([])
  const {name}=useParams()
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    getPhones()
  }, [])
  
  const getPhones=()=>{
    setLoading(true)
    fetch(`http://localhost:4000/api/v1/getProduct`, {
      method: 'GET',
    }).then(res => res.json()
      .then(data => {
        if(data.success){
        let filter=data.products.filter((item)=>item.company.replace(" ","")==name)
          setProduct(filter)
        }
    setLoading(false)
       console.log(data)
      })
  
    ).catch(err => {
    setLoading(false)
     console.log(err)
    })
  }
  
  return (
    <>
    {
      loading?
      <Loader/>:
      <>
      <Navbar/>
        <div className='topbarOfcat'>
        <h1>{product.length>0 ? product[0].company:"No Phone Yet"}</h1>
      </div>
    <div className='container-fluid mt-3'>
  <div className="row">
   {product?.map((item)=>(
     <div className="col-md-3" style={{display:"flex",justifyContent:"center"}}>
    <ProductCard data={item}/>
    </div>
   ))} 
   </div>
  </div>
      </>
    }
    </>

  )
}

export default CatPage