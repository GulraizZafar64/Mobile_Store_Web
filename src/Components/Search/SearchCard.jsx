import React, { useEffect, useState } from 'react'
import './searchCard.css'
import { Slider } from "@mui/material";
import Select from 'react-select'
import { Button } from 'antd';
import {FilterOutlined} from '@ant-design/icons'
const SearchCard = ({products,filArray}) => {
  const [value, setValue] = React.useState([0,50000]);
  const [phoneName,setPhoneNames]=useState([])
  const [colorArray,setColorArray]=useState([])
  const [phoneNameValue,setPhoneNameValue]=useState('')
  const [orignalName,setOrignalName]=useState('')
  const minDistance = 0;
useEffect(() => {
  let phoneArray=[]
  products.map((item)=>{
    phoneArray.push({label:item.company,value:item.company})
  })
  let uniqueLabels = {};
  let uniqueArr = phoneArray.filter(item => {
    if (!uniqueLabels[item.label]) {
      uniqueLabels[item.label] = true;
      return true;
    }
    return false;
  });
  
  setPhoneNames(uniqueArr)
}, [products])

  function valuetext(value) {
      return `${value}°PKR`;
    }
    const handleRangeChange = (event, newValue, activeThumb) => {
      if (!Array.isArray(newValue)) {
        return;
      }
  
      if (activeThumb === 0) {
        setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      } else {
        setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      }
    };
    const handlesNameChange=(e)=>{
      setPhoneNameValue(e.value)
      let color=[]
      products.map((item)=>{
        if(item.company==e.value){
          color.push({label:`${item.name}`,value:`${item.name}`})
        }
      })
      setColorArray(color)
    }

    function onchangeSearchHandler (){
      if(phoneNameValue==''){
        const onlyForRange = products.filter(product => {
          const productPrice = parseInt(product.price);
          return productPrice >= value[0] && productPrice <= value[1];
        });
      
        console.log(onlyForRange);
        filArray(onlyForRange)
      }else{
        const filteredProducts = products.filter(product => {
          if (parseInt(product.price) < value[0]|| parseInt(product.price) > value[1]) {
            return false;
          }
          if (phoneNameValue && !product.company.includes(phoneNameValue)) {
            return false;
          }
          if (orignalName && !product.name.includes(orignalName)) {
            return false;
          }
         
          return true;
        });
        filArray(filteredProducts)
        console.log(filteredProducts)
      }
    
      
    }
  return (
    <>
    <div className='headingContainerSearch mt-3'>
        <h2 className='headingSearch'>Search The Phone</h2>
        
        <div className='liner'></div>
    </div>
    <div className='searchCard'>
    <div className='container-fluid'>
     <div className='row'>
     <div className='col-md-4'>
  <label><b>Select Company</b></label>
             <Select
        className="basic-single mt-3"
        classNamePrefix="select"
        onChange={(e)=>handlesNameChange(e)}
        options={phoneName}
      />
      </div>
      <div className='col-md-4'>
  <label><b>Select Phone</b></label>
             <Select
             onChange={(e)=>setOrignalName(e.value)}
        className="basic-single mt-3"
        classNamePrefix="select"
        options={colorArray}
      />
      </div>
       <div className='col-md-4'>
       <div className="mainRangeWrapper">
<div className="rangeLabel">
        <p><b>Max Price</b></p>
        <p><b>50000PKR</b></p>
    </div>
<div className="rangepaker">
<Slider
 max={50000}
 min={0}
  getAriaLabel={() => 'Minimum Price'}
  value={value}
  onChange={handleRangeChange}
  valueLabelDisplay="auto"
  getAriaValueText={valuetext}
  disableSwap
/>
</div>
   </div>
       </div>
     </div>
    </div>
   <div className='filterButtonContainer'>
   <Button onClick={onchangeSearchHandler} className='filterButton' type="primary" icon={<FilterOutlined />} size="large">
            Filter
          </Button>
   </div>
    </div>
    </>
  )
}

export default SearchCard