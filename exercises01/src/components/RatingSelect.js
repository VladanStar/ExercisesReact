import React from 'react';
 import {useState} from "react";

function RatingSelect() {
  const [selected, setSelected] = useState(10);
  const handleChange = (e) => {
    console.log(e)
  }
  return (
    <ul className='rating'>
      <li>
        <input type="radio"
        id='num1'
        name='rating'
        value="1"
        onChange={handleChange} 
        checked={selected===1}/>
      </li>
      <label htmlFor='num1'>1</label>
      <li>
        <input type="radio"
        id='num2'
        name='rating'
        value="2"
        onChange={handleChange} 
        checked={selected===2}/>
      </li>
      <label htmlFor='num2'>2</label>
      <li>
        <input type="radio"
        id='num3'
        name='rating'
        value="3"
        onChange={handleChange} 
        checked={selected===3}/>
      </li>
      <label htmlFor='num3'>3</label>
      <li>
        <input type="radio"
        id='num4'
        name='rating'
        value="4"
        onChange={handleChange} 
        checked={selected===4}/>
      </li>
      <label htmlFor='num4'>4</label>
      <li>
        <input type="radio"
        id='num5'
        name='rating'
        value="5"
        onChange={handleChange} 
        checked={selected===5}/>
      </li>
      <label htmlFor='num5'>5</label>
      <li>
        <input type="radio"
        id='num6'
        name='rating'
        value="6"
        onChange={handleChange} 
        checked={selected===6}/>
      </li>
      <label htmlFor='num6'>6</label>
      <li>
        <input type="radio"
        id='num7'
        name='rating'
        value="7"
        onChange={handleChange} 
        checked={selected===7}/>
      </li>
      <label htmlFor='num7'>7</label>
      <li>
        <input type="radio"
        id='num8'
        name='rating'
        value="8"
        onChange={handleChange} 
        checked={selected===8}/>
      </li>
      <label htmlFor='num8'>8</label>
      <li>
        <input type="radio"
        id='num9'
        name='rating'
        value="9"
        onChange={handleChange} 
        checked={selected===9}/>
      </li>
      <label htmlFor='num9'>9</label>
      <li>
        <input type="radio"
        id='num10'
        name='rating'
        value="10"
        onChange={handleChange} 
        checked={selected===10}/>
      </li>
      <label htmlFor='num10'>10</label>

    </ul>
  )
}

export default RatingSelect