import React from 'react';
import WhyChooseUsSection from './WhyChooseUsSection';
import './WhyChooseUsSectionLayout.css';
import image1 from '../Assets/image 4.png'
import image2 from '../Assets/image 5.png'
import image3 from '../Assets/image 6.png'
import image4 from '../Assets/image 8.png'
import image5 from '../Assets/image 10.png'
import CircleGroup from './Circle';


const Layouts = () => {
  return (
    <div className="why-choose-us-layout">
      <div className="top-row">
       <div className="experienced"> <WhyChooseUsSection
          title="Experienced Groomers"
          description="Certified professionals who care for your pets as their own."
          imageUrl={image1}
        /></div>
       <div className="convenient"> <WhyChooseUsSection
          title="Convenient Booking"
          description="Easy online scheduling for stress-free grooming"
          imageUrl={image2}
        />
        </div>
      </div>
      <CircleGroup />
      <div className="bottom-row">
      <div className="high"><WhyChooseUsSection
          title="High-Quality Products"
          description="Only the best, vet-approved products for your pet’s health and happiness"
          imageUrl={image3}
        />
        </div>
        <div className="customer"><WhyChooseUsSection
          title="Customer Satisfaction"
          description="5-star rated services loved by pets and owners alike"
          imageUrl={image4}
        />
        </div>
        <div className="care"><WhyChooseUsSection
          title="Comprehensive Care"
          description="From grooming to products, we offer a one-stop solution"
          imageUrl={image5}
        />
        </div>
      </div>
    </div>
  );
};

export default  Layouts;

