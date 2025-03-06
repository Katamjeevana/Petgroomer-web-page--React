import React from 'react';
import image1 from '../Assets/image 56.png';
import image2 from '../Assets/image 57.png';
import image3 from '../Assets/image 58.png';
import image4 from '../Assets/image 52.png';

const NewarrivalsLayout = () => {
  return (
    <>
    <div id='card1'>
    <img className="bed"src ={image1} alt='image1'></img>
    <div className ="d1">
         <h1>Soft Flush bed</h1>
         <p>Give your pet the comfort <br></br> they deserve with our ultra-soft beds</p>
         <button id='shop' >Shop Now</button>
         <div className="underline"></div>
    </div>

    </div>
    <div id='card2'>
    <div className="c1">
    <img className="socks"src ={image2} alt='image1'></img>
    <div className='d2'>
    <h1>Dog winter Hoodie</h1>
         <p>Keep the dog warm in cold weather <br></br>with style and a sense of humor</p>
         <button id='shop' >Shop Now</button>
         <div className="underline"></div>
    </div>
    </div>
    <div id="flee">
    <div className="c2">
    <img className="winter"src ={image3} alt='image1'></img>
    <div className='d3'>
    <h1>Dog winter Hoodie</h1>
         <button id='shop' >Shop Now</button>
         <div className="underline"></div>
    </div>
    </div>
    <div className="c3">
    <img className="pedigree"src ={image4} alt='image1'></img>
    <div className='d4'>
    <h1>Dog winter Hoodie</h1>
         <button id='shop' >Shop Now</button>
         <div className="underline"></div>
    </div>

    </div>
    </div>

    </div>
    </>
  )
}

export default NewarrivalsLayout