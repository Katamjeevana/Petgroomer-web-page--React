import React from 'react';
import logo from '../Assets/logo (1).png';
import './About.css';
import { useNavigate } from "react-router-dom";
import  { useState } from 'react';
import image from '../Assets/dog.png'
import mission from '../Assets/mission.png';
import dogs from '../Assets/dogs.png'
import img1 from '../Assets/abt-icon1.png'
import img2 from '../Assets/abt-icon5.png'
import img3 from '../Assets/abt-icon4.png'
import img4 from '../Assets/abt-icon2.png'
import img5 from '../Assets/abt-icon3.png';
import mobile from '../Assets/mobile.png';
import google from  '../Assets/GooglePlay.jpg';
import apple from '../Assets/AppStore.jpg';
import designe from '../Assets/design.png';
import dooog from '../Assets/dogs.png';


const Aboutus = () => {
  const navigate = useNavigate();
  return (
    <><img onClick={() => navigate("/")} src={logo} className="logo" alt="Logo" />
    <p id="pet1">Pet Care Your Pet Deserve</p>
    <div id='ad'>
    <div id='ele'>
    <h1  id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
    <h1  id='hh' className='s'>Shop</h1>
    <h1  id='hh' className='c' onClick={() => navigate("/blog")}>Blog</h1>
    <h1  id='hh' className='f'  onClick={() => navigate("/faq")}>FAQs</h1>
    <h1 id='hh' className='active' onClick={() => navigate("/aboutus")}>About us</h1>
    </div>
    <img id="dogss" src={dooog} alt="image"></img>
    <div id='what'>What we do?</div>
    <p id='p1'>Lalassa was born out of a deep love for pets and a passion for<br></br> providing the best care possible. Our journey began with a<br></br> simple mission: to create a place where pet owners could find<br></br> everything they need to keep their furry friends happy and<br></br> healthy. From premium pet products to professional grooming <br></br> services, we’re dedicated to making pet care easier, more <br></br>accessible, and more enjoyable for everyone.</p>
    <div  id='what'>Why Lalassa?</div>
    <p id='p1'>At Lalassa, we believe that pets are family. That’s why we go <br></br>above and beyond to ensure that every product we offer and<br></br> every service we provide is of the highest quality. We’re not just<br></br> a pet store—we’re a partner in your pet’s life, here to support<br></br> you every step of the way.</p>
    <h1 id="our" >Our Vision</h1>
    <img id='imm' src={image} alt="image"></img>
    <p id="p2">Our vision is to become the leading name in holistic pet care, known for our unwavering commitment to quality, innovation, and <br></br>compassion. We strive to create a world where every pet receives the care, love, and attention they deserve, and where pet owners<br></br> feel empowered to provide the best for their furry companions. Through continuous improvement and a focus on sustainability, we <br></br> aim to set new standards in the pet care industry, fostering a healthier, happier life for pets everywhere.</p>
    <h1  className='ov' >Our Mission</h1>
    <p id='p3'>Our mission is to deliver exceptional pet care products and services that <br></br>enhance the well-being of pets and the lives of their owners. We are <br></br>committed to providing a seamless shopping experience, offering only <br></br>the best products that are safe, effective, and thoughtfully selected.<br></br> Through our grooming services, available via our user-friendly app, we <br></br>ensure that every pet looks and feels their best. We are dedicated to <br></br>building a community that values the health and happiness of pets,<br></br> supported by our expert team, innovative solutions, and a heartfelt <br></br> approach to customer care.</p>
    <img id="mission"src={mission} alt="mission"></img>
    <div id='tagss'>
      <div id="quality">
      <h1 id="q">Quality</h1>
        <p id='ppp1'>We are committed to offering <br></br> only the highest quality products <br></br>and services, ensuring that every <br></br>pet receives the best care<br></br> possible.</p>
        <img id="img11"src={img1} alt="mission"></img>
      </div>
      <div id="community">
      <h1 id="q">Community</h1>
        <p id='ppp1'>We are committed to offering <br></br> only the highest quality products <br></br>and services, ensuring that every <br></br>pet receives the best care<br></br> possible.</p>
        <img id="img11"src={img2} alt="mission"></img>
      </div>
      
      <div id="innovation">
      <h1 id="q">Innovation</h1>
        <p id='ppp1'>We are committed to offering <br></br> only the highest quality products <br></br>and services, ensuring that every <br></br>pet receives the best care<br></br> possible.</p>
        <img id="img11"src={img3} alt="mission"></img>
      </div>
      
      <div id="sus">
      <h1 id="q">Sustainability</h1>
        <p id='ppp1'>We are committed to offering <br></br> only the highest quality products <br></br>and services, ensuring that every <br></br>pet receives the best care<br></br> possible.</p>
        <img id="img11"src={img4} alt="mission"></img>
      </div>
      
      <div id="passion">
      <h1 id="q">Passion</h1>
        <p id='ppp1'>We are committed to offering <br></br> only the highest quality products <br></br>and services, ensuring that every <br></br>pet receives the best care<br></br> possible.</p>
        <img id="img11"src={img5} alt="mission"></img>
        <h1 id="down">Download our app with just a few steps!!</h1>
        <div id="app">
          <img  id="mobile"src={mobile} alt='mobile'></img>
          <div id="visit">
          <h1 id='visitii'>1.Visit the <span> App Store or Google Play</span></h1><p>Ready to give your pet the royal treatment? Head over<br></br> to the App Store if you’re on iOS, or Google Play if<br></br> you’re on Android.</p><h1>2.Search for <span>"Lalassa"</span></h1>
          <p>In the search bar, type “Lalassa” and watch as our app <br></br>pops up, promising a world of premium grooming <br></br>services at your fingertips!</p>
          <h1>3.Tap <span> ‘Install’</span></h1>
          <p>Hit that ‘Install’ button and feel the excitement as the<br></br> Lalassa app downloads in just seconds. You’re one <br></br>step closer to elevating your pet’s grooming <br></br> experience!</p>
          <h1>4.Open and Get <span> Started</span></h1>
          <p>Once installed, open the app, sign in or create your<br></br> account, and start exploring. From luxurious baths to <br></br>full grooming sessions, your pet’s pampering begins<br></br> here!</p></div>
          <img id='google' src={google} alt="google"></img>
          <h1 id="ava">Available on</h1>
          <img id="apple"src={apple} alt='app'></img>
          <h1 id="join">Join the Lalassa family</h1>
          <p id="famm">We invite you to explore our products, book our grooming services, and become part of the Lalassa <br></br> family. Whether you’re a new pet owner or a seasoned pro, we’re here to support you with everything <br></br> you need for your pet’s journey. Let’s make the world a better place for pets, together.</p>
          <button id='dw'>Download Lalassa</button> <button id='sn'>Shop Now</button>
          <img id='desii' src={designe} alt="frame"></img>
        </div>
      </div>
    </div>
    </div>
    </>
    
  )
}

export default Aboutus