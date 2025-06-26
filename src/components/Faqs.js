import React from 'react';
import { useNavigate } from "react-router-dom";
import  { useState } from 'react';
import logo from '../Assets/logo (1).png';
import './Faqs.css'
import book from '../Assets/book.png';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const Faqs = () => {
  const navigate = useNavigate();
  const [showOrdering, setShowOrdering] = useState(true);
  const [showGeneral, setShowGeneral] = useState(false);
  const [showPayments, setShowPayments] = useState(false);
  const [showReturns, setShowReturns] = useState(false);
  const [showGrooming, setShowGrooming] = useState(false);
  const [showActive, setShowActive] = useState('ordering');
  const [activeIndex, setActiveIndex] = useState(null);

  const orderingData = [
    {
      q:'How do I place an order?',
      answer:'Browse through our product categories, add your chosen items to the cart, and proceed to checkout. You can complete your purchase by logging into your account or as a guest.',
    },
    {
      q:'Can I track my order?',
      answer:'Yes, once your order is shipped, you’ll receive a tracking number via email. You can also track your order through your account on our website.',
    },
    {
      q:'How long does shipping take?',
      answer:'Shipping times vary based on your location and the shipping method selected. Estimated delivery dates are provided during checkout.',
    },
    {
      q:'Do you offer expedited shipping?',
      answer:'Yes, we offer expedited shipping options at checkout. The estimated delivery time will be adjusted based on the chosen method.',
    },
    {
      q:'What are your shipping rates?',
      answer:'Shipping rates vary depending on your location, the weight of the package, and the shipping method selected. Exact rates are calculated at checkout.',
    },
    {
      q:'Do you ship internationally?',
      answer:'Currently, we ship within India. International shipping options may be available in the future—stay tuned for updates.',
    },
    {
      q:'Can I cancel my order after it has been placed?',
      answer:'Orders can be canceled within a short window after they are placed. Contact our customer service team as soon as possible to cancel your order.',
    },
    {
      q:'What should I do if my order hasn’t arrived by the estimated delivery date?',
      answer:'If your order is delayed beyond the estimated delivery date, please contact our customer service team for assistance.',
    },
    {
      q:'Can I change the shipping address after placing an order?',
      answer:'If your order hasn’t shipped yet, you can change the shipping address by contacting our customer service team as soon as possible.',
    },
    {
      q:'What happens if my order arrives damaged?',
      answer:'If your order arrives damaged, please contact us immediately with photos of the damage, and we will arrange for a replacement or refund.',
    },
  ]
  
  const generalData = [
    {
      q:'How do I create an account?',
      answer:'Click on the "Sign Up" button at the top of our website, fill in your details, and create a password. You can also sign up using your social media accounts.',
    },
    {
      q:'How do I reset my password?',
      answer:'If you’ve forgotten your password, click on the "Forgot Password" link on the login page. Enter your email address, and we’ll send you instructions to reset your password.',
    },
    {
      q:'Can I update my account information?',
      answer:'Yes, you can update your personal information, addresses, and payment methods by logging into your account and navigating to the "My Profile" section.',
    },
    {
      q:'How do I contact customer service?',
      answer:'You can reach our customer service team via the "Contact Us" page on our website, through live chat, or by calling our support hotline. Our team is available to assist you with any questions or concerns.',
    },
    {
      q:'What if I can’t find the product I’m looking for?',
      answer:'If you’re looking for a specific product and can’t find it on our website, please contact us. We may be able to assist you in finding the product or suggest an alternative.',
    },
    {
      q:'How can I stay updated on new products and promotions?',
      answer:'Sign up for our newsletter to receive updates on new products, exclusive offers, and the latest pet care tips directly to your inbox. You can subscribe at the bottom of our homepage.',
    },
    {
      q:'What if I have a suggestion or feedback?',
      answer:'We value your feedback and suggestions! You can share your thoughts with us through our "Contact Us" page or by leaving a review on our website. Your input helps us improve our products and services.',
    },
    {
      q:'Where can I find more information about your grooming services?',
      answer:'Detailed information about our grooming services is available in the app. You can also visit the "Grooming Services" section of our website for an overview and to download the app.',
    },
    {
      q:'Are your products cruelty-free and environmentally friendly?',
      answer:'We are committed to offering products that are cruelty-free and eco-friendly. Our product descriptions highlight these values where applicable.',
    },
  ]

  const paymentsData =[
    {
      q:'What payment methods do you accept?',
      answer:'We accept major credit and debit cards, PayPal, and other digital payment options such as Apple Pay and Google Pay.',
    },
    {
      q:'Is my payment information secure?',
      answer:'Yes, we use SSL encryption to protect your payment information during transactions. Your data is securely handled and never shared with third parties.',
    },
    {
      q:'When will my credit card be charged?',
      answer:'Your credit card will be charged at the time of purchase. You will receive an order confirmation email immediately after your payment is processed.',
    },
    {
      q:'Can I save my payment details for future purchases?',
      answer:'Yes, you can save your payment details in your account for faster checkout on future orders. Your information is securely stored and encrypted.',
    },
    {
      q:'What should I do if my payment is declined?',
      answer:'If your payment is declined, please double-check your payment details and try again. If the issue persists, contact your bank or our customer service for assistance.',
    },
    {
      q:'Do you charge sales tax?',
      answer:'Sales tax is applied based on your shipping address and will be calculated at checkout. The exact amount will be displayed before you complete your purchase.',
    },
    {
      q:'How can I apply a discount code to my order?',
      answer:'You can enter your discount code at checkout in the designated field. The discount will be applied to your total before you complete the purchase.',
    },
    {
      q:'Can I use multiple payment methods for a single order?',
      answer:'At this time, we accept only one payment method per order. Choose the option that best suits your needs at checkout.',
    },
    {
      q:'What currencies do you accept?',
      answer:'All transactions are processed in [your local currency]. Currently, we do not support other currencies.',
    },
    {
      q:'What should I do if I suspect fraudulent activity on my account?',
      answer:'What should I do if I suspect fraudulent activity on my account?',
    },
    
  ]

  const returnsData =[
    {
      q:'What is your return policy?',
      answer:'We offer a 30-day return policy on most products. If you are not satisfied with your purchase, you can return it within 30 days of delivery for a full refund or exchange.',
    },
    {
      q:'How do I initiate a return?',
      answer:'To initiate a return, contact our customer service team with your order number and the reason for the return. We will provide you with instructions on how to proceed.',
    },
    {
      q:'Do I need to pay for return shipping?',
      answer:'Return shipping costs are typically the responsibility of the customer unless the return is due to a defective or incorrect item.',
    },
    {
      q:'How long does it take to process a refund?',
      answer:'Refunds are processed within 5-7 business days after we receive and inspect the returned item. You will receive an email confirmation once your refund has been issued.',
    },
    {
      q:'Can I exchange an item?',
      answer:'Yes, you can exchange an item for a different size or color, depending on availability. Contact our customer service team to arrange an exchange.',
    },
    {
      q:'What should I do if I receive a defective or incorrect item?',
      answer:'If you receive a defective or incorrect item, please contact our customer service team immediately with your order number and a description of the issue. We will arrange for a replacement or refund.',
    },
    {
      q:'Are there any items that cannot be returned?',
      answer:'Certain items, such as perishable goods, custom products, or clearance items, may not be eligible for return. Please check the product description or our return policy for details.',
    },
    {
      q:'Can I return an item if it’s been used?',
      answer:'Items must be returned in their original condition and packaging. Products that have been used, damaged, or altered may not be eligible for a refund.',
    },
    {
      q:'How will I know if my return has been received?',
      answer:'You will receive an email notification once your return has been received and processed. If you do not receive confirmation within 10 days, please contact our customer service.',
    },
    {
      q:'What should I do if my refund is incorrect or delayed?',
      answer:'If you believe your refund is incorrect or delayed, please contact our customer service team. We will review the issue and correct any errors.',
    },
  ]

  const groomingData = [
    {
      q:'How do I book a grooming appointment through the app?',
      answer:'Download our app from the App Store or Google Play, create an account or log in, and navigate to the Grooming section. Select your desired service, choose a date and time, and confirm your booking.',
    },
    {
      q:'What grooming services are available through the app?',
      answer:'We offer a range of grooming services, including basic grooming, full-service grooming, spa treatments, and specialized care like anti-tick baths.',
    },
    {
      q:'Can I choose a specific groomer for my pet?',
      answer:'Yes, the app allows you to select a specific groomer based on availability. You can view profiles and choose the best fit for your pet.',
    },
    {
      q:'What if I need to reschedule or cancel my appointment?',
      answer:'You can easily reschedule or cancel your appointment through the app. Simply go to your booking history, select the appointment, and choose the option to reschedule or cancel.',
    },
    {
      q:'How should I prepare my pet for their grooming appointment?',
      answer:'Make sure your pet is clean, free of tangles, and has had a chance to relieve themselves before the appointment. If your pet has any special needs, please inform the groomer ahead of time through the app.',
    },
    {
      q:'What happens if I’m late for my appointment?',
      answer:'If you’re running late, please notify the groomer via the app. While we’ll do our best to accommodate you, your appointment may be shortened or rescheduled if necessary.',
    },
    {
      q:'How do I pay for grooming services booked through the app?',
      answer:'You can pay securely through the app using a saved payment method. The app will charge your card after the service is completed.',
    },
    {
      q:'Are the grooming products used safe for all pets?',
      answer:'Yes, all products used by our groomers are pet-safe and suitable for a wide range of skin and coat types. If your pet has specific sensitivities, please mention them when booking.',
    },
    {
      q:'How do I book a grooming appointment through the app?',
      answer:'Download our app from the App Store or Google Play, create an account or log in, and navigate to the Grooming section. Select your desired service, choose a date and time, and confirm your booking.',
    },
    {
      q:'What should I do if I’m not satisfied with the grooming service?',
      answer:'If you’re not satisfied with the service, please contact customer support through the app. We’ll work with you to resolve the issue and ensure your pet’s grooming experience meets your expectations.',
    },
  ]



    const handleOrderingClick = () => {
     setShowOrdering(true);
     setShowGeneral(false);
     setShowGrooming(false);
     setShowPayments(false);
     setShowReturns(false);
     setShowActive('ordering');
  }
  const handleGeneralClick = () => {
    setShowOrdering(false);
    setShowGeneral(true);
    setShowGrooming(false);
    setShowPayments(false);
    setShowReturns(false);
    setShowActive('general');
  }
  const handlePaymentsClick = () => {
    setShowOrdering(false);
    setShowGeneral(false);
    setShowGrooming(false);
    setShowPayments(true);
    setShowReturns(false);
    setShowActive('payments');
  }
  const handleReturnsClick = () => {
    setShowOrdering(false);
    setShowGeneral(false);
    setShowGrooming(false);
    setShowPayments(false);
    setShowReturns(true);
    setShowActive('returns');
  }
  const handleGroomingClick = () => {
    setShowOrdering(false);
    setShowGeneral(false);
    setShowGrooming(true);
    setShowPayments(false);
    setShowReturns(false);
    setShowActive('grooming');
  }

  const handleClick = (index) => {
    if (activeIndex === index) {
      // If the clicked question is already open, close it
      setActiveIndex(null);
      
    } else {
      // Otherwise, open the clicked question
      setActiveIndex(index);
    }
  };

  return (
        <>
          <img onClick={() => navigate("/")} src={logo} className="logo" alt="Logo" />
        <p id="pet1">Pet Care Your Pet Deserve</p>
        <div id='ad'>
        <div id='ele'>
        <h1  id='hh' className='h' onClick={() => navigate("/")}>Home</h1>
        <h1  id='hh' className='s'>Shop</h1>
        <h1  id='hh' className='c' onClick={() => navigate("/blog")}>Blog</h1>
        <h1  id='hh' className='active'  onClick={() => navigate("/faq")}>FAQs</h1>
        <h1 id='hh' className='f' onClick={() => navigate("/aboutus")}>About us</h1>
        </div>
        <div id="faq"><h1>FAQ</h1>
        <p>Your questions answer here</p>
        </div>
        <div id="qs">
          <p onClick={handleOrderingClick} className={showActive === 'ordering' ? 'active' : ' '}>Ordering & shipping</p>
          <p onClick={handleGeneralClick} className={showActive === 'general' ? 'active' : ' '}>General</p>
          <p onClick={handlePaymentsClick} className={showActive === 'payments' ? 'active' : ' '}>Payments & Security</p>
          <p onClick={handleReturnsClick} className={showActive === 'returns' ? 'active' : ' '}>Returns & Refunds</p>
          <p onClick={handleGroomingClick} className={showActive === 'grooming' ? 'active' : ' '}>Grooming Services</p>
        </div>

        {showOrdering && (
          <>
          
          <div id="ordering">
            <img id="book" src={book} alt="book" />
            <h1 id="order">Ordering & Shipping</h1>
            
            {orderingData.map((data,index) => (
              <h1 id='o11'>
              <div key={index} className="qss-container">
              <div className={`qss ${activeIndex === index ? 'actives' : 'b'}`}
            onClick={() => handleClick(index)}
          >
            <span id="black">{data.q}</span>
            <span className="icon">{activeIndex === index ?  <h1 id="cm"> <CiCircleMinus /> </h1> :  <h1  id="cp"> <CiCirclePlus /> </h1>}
            </span>
              </div>
              {activeIndex === index && <div id="paragra">{data.answer}</div>}
              <div id="border"></div>
              
              </div> 
              </h1>
              
           
        ))}
         </div>
          </>
          
        )}

        { showGeneral && (
          <>
          <div id="ordering">
             <img id="book" src={book} alt="book" />
             <h1 id="order">General </h1>
             {generalData.map((data,index) => (
              <h1 id='o11'>
              <div key={index} className="qss-container">
              <div className={`qss ${activeIndex === index ? 'actives' : 'b'}`}
            onClick={() => handleClick(index)}
          >
            <span id="black">{data.q}</span>
            <span className="icon">{activeIndex === index ?  <h1 id="cm"> <CiCircleMinus /> </h1> :  <h1  id="cp"> <CiCirclePlus /> </h1>}
            </span>
              </div>
              {activeIndex === index && <div id="paragra">{data.answer}</div>}
              <div id="border"></div>
              
              </div> 
              </h1>
              
           
        ))}
         </div>
          </>
        )}

        { showPayments && (
          <>
          <div id="ordering">
            <img id="book" src={book} alt="book" />
            <h1 id="order">Payments & Security</h1>
            {paymentsData.map((data,index) => (
              <h1 id='o11'>
              <div key={index} className="qss-container">
              <div className={`qss ${activeIndex === index ? 'actives' : 'b'}`}
            onClick={() => handleClick(index)}
          >
            <span id="black">{data.q}</span>
            <span className="icon">{activeIndex === index ?  <h1 id="cm"> <CiCircleMinus /> </h1> :  <h1  id="cp"> <CiCirclePlus /> </h1>}
            </span>
              </div>
              {activeIndex === index && <div id="paragra">{data.answer}</div>}
              <div id="border"></div>
              
              </div> 
              </h1>
              
           
        ))}
         </div>
          </>
        )}
        
        {showReturns &&(
          <>
          <div id="ordering">
            <img id="book" src={book} alt="book" />
            <h1 id="order">Returns & Refunds</h1>
            {returnsData.map((data,index) => (
              <h1 id='o11'>
              <div key={index} className="qss-container">
              <div className={`qss ${activeIndex === index ? 'actives' : 'b'}`}
            onClick={() => handleClick(index)}
          >
            <span id="black">{data.q}</span>
            <span className="icon">{activeIndex === index ?  <h1 id="cm"> <CiCircleMinus /> </h1> :  <h1  id="cp"> <CiCirclePlus /> </h1>}
            </span>
              </div>
              {activeIndex === index && <div id="paragra">{data.answer}</div>}
              <div id="border"></div>
              
              </div> 
              </h1>
              
           
        ))}
         </div>
          </>
        )}
        

        { showGrooming && (
          <>
          <div id="ordering">
            <img id="book" src={book} alt="book" />
            <h1 id="order">Grooming Services</h1>
            {groomingData.map((data,index) => (
              <h1 id='o11'>
              <div key={index} className="qss-container">
              <div className={`qss ${activeIndex === index ? 'actives' : 'b'}`}
            onClick={() => handleClick(index)}
          >
            <span id="black">{data.q}</span>
            <span className="icon">{activeIndex === index ?  <h1 id="cm"> <CiCircleMinus /> </h1> :  <h1  id="cp"> <CiCirclePlus /> </h1>}
            </span>
              </div>
              {activeIndex === index && <div id="paragra">{data.answer}</div>}
              <div id="border"></div>
              
              </div> 
              </h1>
              
           
        ))}
         </div>
          </>
        )}

        </div>
    </>
    )
}






export default Faqs
































































































































































































































































// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import { useState } from 'react';
// import logo from '../Assets/logo (1).png';
// import './Faqs.css';
// import book from '../Assets/book.png';
// import { CiCirclePlus } from "react-icons/ci";
// import { CiCircleMinus } from "react-icons/ci";

// const Faqs = () => {
//   const navigate = useNavigate();
//   const [showOrdering, setShowOrdering] = useState(true);
//   const [showGeneral, setShowGeneral] = useState(false);
//   const [showPayments, setShowPayments] = useState(false);
//   const [showReturns, setShowReturns] = useState(false);
//   const [showGrooming, setShowGrooming] = useState(false);
//   const [showActive, setShowActive] = useState('ordering');
//   const [showans, setShowAns] = useState({}); // Track visibility for each question

//   const handleOrderingClick = () => {
//     setShowOrdering(true);
//     setShowGeneral(false);
//     setShowGrooming(false);
//     setShowPayments(false);
//     setShowReturns(false);
//     setShowActive('ordering');
//   };

//   const handleGeneralClick = () => {
//     setShowOrdering(false);
//     setShowGeneral(true);
//     setShowGrooming(false);
//     setShowPayments(false);
//     setShowReturns(false);
//     setShowActive('general');
//   };

//   const handlePaymentsClick = () => {
//     setShowOrdering(false);
//     setShowGeneral(false);
//     setShowGrooming(false);
//     setShowPayments(true);
//     setShowReturns(false);
//     setShowActive('payments');
//   };

//   const handleReturnsClick = () => {
//     setShowOrdering(false);
//     setShowGeneral(false);
//     setShowGrooming(false);
//     setShowPayments(false);
//     setShowReturns(true);
//     setShowActive('returns');
//   };

//   const handleGroomingClick = () => {
//     setShowOrdering(false);
//     setShowGeneral(false);
//     setShowGrooming(true);
//     setShowPayments(false);
//     setShowReturns(false);
//     setShowActive('grooming');
//   };

//   // Toggle visibility for a specific question
//   const handleAns = (questionId) => {
//     setShowAns((prev) => ({
//       ...prev,
//       [questionId]: !prev[questionId], // Toggle the state for the specific question
//     }));
//   };

//   return (
//     <>
//       <img onClick={() => navigate("/")} src={logo} className="logo" alt="Logo" />
//       <p id="pet1">Pet Care Your Pet Deserve</p>
//       <div id="ad">
//         <div id="ele">
//           <h1 id="hh" className="h" onClick={() => navigate("/")}>Home</h1>
//           <h1 id="hh" className="s">Shop</h1>
//           <h1 id="hh" className="c" onClick={() => navigate("/blog")}>Blog</h1>
//           <h1 id="hh" className="active" onClick={() => navigate("/faq")}>FAQs</h1>
//           <h1 id="hh" className="f" onClick={() => navigate("/aboutus")}>About us</h1>
//         </div>
//         <div id="faq">
//           <h1>FAQ</h1>
//           <p>Your questions answer here</p>
//         </div>
//         <div id="qs">
//           <p onClick={handleOrderingClick} className={showActive === 'ordering' ? 'active' : ' '}>Ordering & shipping</p>
//           <p onClick={handleGeneralClick} className={showActive === 'general' ? 'active' : ' '}>General</p>
//           <p onClick={handlePaymentsClick} className={showActive === 'payments' ? 'active' : ' '}>Payments & Security</p>
//           <p onClick={handleReturnsClick} className={showActive === 'returns' ? 'active' : ' '}>Returns & Refunds</p>
//           <p onClick={handleGroomingClick} className={showActive === 'grooming' ? 'active' : ' '}>Grooming Services</p>
//         </div>
//         {showOrdering && (
//           <>
//             <div id="ordering">
//               <img id="book" src={book} alt="book" />
//               <h1 id="order">Ordering & Shipping</h1>
//             </div>

//             {/* Question 1 */}
//             <h1 id="qss">
//               How do I place an order?{' '}
//               <span
//                 onClick={() => handleAns('question1')}
//                 className={showans['question1'] ? 'minus' : 'plus'}
//                 id="cp"
//                 style={{ fontSize: '24px', color: showans['question1'] ? 'red' : 'green' }} // Debugging styles
//               >
//                 {showans['question1'] ? <CiCircleMinus /> : <CiCirclePlus />}
//               </span>
//             </h1>
//             {showans['question1'] && (
//               <p id="paragra">
//                 Browse through our product categories, add your chosen items to the cart, and proceed to
//                 checkout. You can complete your purchase by logging into your account or as a guest.
//               </p>
//             )}
//             <div id="border"></div>

//             {/* Question 2 */}
//             <h1 id="qss">
//               Can I track my order?{' '}
//               <span
//                 onClick={() => handleAns('question2')}
//                 className={showans['question2'] ? 'minus' : 'plus'}
//                 id="cp"
//                 style={{ fontSize: '24px', color: showans['question2'] ? 'red' : 'green' }} // Debugging styles
//               >
//                 {showans['question2'] ? <CiCircleMinus /> : <CiCirclePlus />}
//               </span>
//             </h1>
//             {showans['question2'] && (
//               <p id="paragra">
//                 Yes, once your order is shipped, you’ll receive a tracking number via email. You can also track your order through your account on our website.
//               </p>
//             )}
//             <div id="border"></div>
//           </>
//         )}

//         {showGeneral && <div>Hi Hellogeneral</div>}
//         {showPayments && <div>Hi hello payments</div>}
//         {showReturns && <div>Hi hello returns</div>}
//         {showGrooming && <div>Hi hello grooming</div>}
//       </div>
//     </>
//   );
// };

// export default Faqs;