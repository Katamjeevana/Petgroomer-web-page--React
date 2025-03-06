import React from 'react';
import './FooterLinks.css';

const FooterLinks = () => {
  const linkSections = [
    {
      title: 'Exclusive',
      links: ['Pet Grooming', 'Pet Training', 'Pet Hotel', 'Pet Adoption']
    },
    {
      title: 'Services',
      links: ['Dog Walking', 'Pet Sitting', 'Veterinary Care', 'Pet Insurance']
    },
    {
      title: 'Account',
      links: ['My Account', 'Orders', 'Wishlist', 'Newsletter']
    },
    {
      title: 'Quick Links',
      links: ['About Us', 'Contact Us', 'Blog', 'FAQs']
    },
    {
      title: 'Contact Us',
      links: ['support@lalassa.com', '+1 234 567 8900', 'Live Chat', 'Feedback']
    }
  ];

  return (
    <div className="footer-links">
      {linkSections.map((section, index) => (
        <div key={index} className="link-section">
          <h2 className="section-title">{section.title}</h2>
          <ul className="link-list">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a href="#" className="footer-link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;

