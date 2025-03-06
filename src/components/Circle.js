import React from 'react'
import './Circle.css'
import i1 from '../Assets/icomoon-free_arrow-up (1).png';
import i2 from '../Assets/icomoon-free_arrow-up (2).png';
import i3 from '../Assets/icomoon-free_arrow-up (3).png';
import i4 from '../Assets/icomoon-free_arrow-up (4).png';
import i5 from '../Assets/icomoon-free_arrow-up.png';

const CircleGroup = () => {
  return (
    <div className='circle' >
    <div className='circle2'>
    <div className = "name">
      <p id="f">Five Reasons</p>
      <p id="w">Why Choose Us?</p>
      </div>
    <div className='arrows'>
      <div className="i1">
        <img  className="arrow1"src={i1} alt='1'></img>
      </div>
      <div className="i2">
      <img className="arrow2"src={i2} alt='2'></img>
      </div>
      <div className="i3">
      <img className="arrow3"src={i3} alt='3'></img>
      </div>
      <div className="i4">
      <img className="arrow4" src={i4} alt='4'></img>
      </div>
      <div className="i5">
      <img className="arrow5" src={i5} alt='5'></img>
      </div>
      </div>
      </div> 
    </div>
  )
}

export default CircleGroup