import React from 'react';
import './Adoption.css';
import logo from '../Assets/logo (1).png';
import { useNavigate } from "react-router-dom";
import image1 from '../Assets/adopting.jpg';
import image2 from '../Assets/Ellipse 39.png';
import Bloger2  from './Bloger2';


const Adoption = () => {
  const navigate = useNavigate();
  return (
    <>
    <img src={logo} className="logo" alt="Logo" />
    <p id="pet1">Pet Care Your Pet Deserve</p>
    <div id='ad'>
    <div id='ap'>Adoption</div>
    <div id='ele'>
    <h1  id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
    <h1  id='hh' className='s'>Shop</h1>
    <h1  id='hh' className='active'onClick={() => navigate("/blog")}>Blog</h1>
    <h1  id='hh' className='f'>FAQs</h1>
    <h1 id='hh' className='c'>Contact</h1>
    </div>
    <h1 id='keep'>Keeping Your Yorkie Sparkling: A Guide<br></br> to Fur and Skin Care</h1>
    <img id="yo"src={image2} alt="image"></img>
    <h1 id='bala'>By <span>bala</span></h1>
    <div id="uu"></div>
    <p id="posted">Posted on 01 Oct 2024</p>
    <p id='para'>I’ve gotta tell you guys, I’m a little excited for the “end of<br></br> the world.” Of course I’ll miss my human. I do love belly <br></br> rubs. And food. Oh, the sound of my food going into the <br></br> bowl, the smell of deliciousness floating through the air <br></br> and into my nose, the drool building up on my tongue,<br></br> the first tasty morsel that — Sorry, I.</p>
    <img id="i1"src={image1} alt="image"></img>
    <p id='para'>got a little sidetracked there. Anyway, I’m looking <br></br> forward to this end of the world stuff. Here’s why: No.<br></br> More. Rules. That’s right. I can do what I want, when I<br></br> want, and how I want. And there won’t be anybody,<br></br> anywhere to tell me otherwise. For example: Bark all <br></br>Night!There won’t be any of those silly noise ordinances.<br></br> No pesky neighbors shuffling outside in the middle of the<br></br> night, yelling for me to keep it down. Nope. Just me and<br></br> my voice box, free to shout out with reckless abandon<br></br> whenever I choose! Chew all the Shoes in <br></br> the House!Sneakers, flip-flops, high heels, flats! I’ll eat them <br></br> all! Especially the ones way up high in the closet – I’ve <br></br>been eyeing those for years! In fact… before all you dog <br></br>parents go wherever it is you’re going, would you mind<br></br> just moving those special shoes to the floor? Eat As <br></br> Many Treats as I Want!I guess they call them treats<br></br> because they’re sooo good, and because I only get one <br></br> every now and then, like after I perform some stupid<br></br> trick. But, when the people are all gone, the treats are<br></br> all mine! Eat the Couch!Fabric. Foam. Solid wood <br></br>construction. All the things I love! Since I was a tiny pup,<br></br> I’ve been trying to get my teeth around that couch. My<br></br> time has finally come! All the Things that Make Humans<br></br> Mad!I’ll drag my bottom across the white carpet. I’ll <br></br>chase the cat. I’ll fart in the bedroom. I’ll pee on the rug.<br></br> I’ll take up as much room on the bed as I want. I’ll go<br></br> running at full speed, right through the screen door! I’ll<br></br> go walking without a leash. I’ll poop in the neighbor’s<br></br> yard! Oh the possibilities are endless. So… when is this<br></br> supposed to happen again? I’m waiting….</p>
    <p id="popu">READ OUR POPULAR ARTICLES</p>
    <div id="dline"></div>
   <dib id="bbb2" ><Bloger2/></dib>
    </div>
    </>
  )
}

export default Adoption