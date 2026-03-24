import React from 'react';
import './AdditionalResources.css';
import EmpathyImg from '../../assets/Resources/empathy.svg';
import TipsImg from '../../assets/Resources/tips.svg';
import ChatbotImg from '../../assets/Resources/chatbot.svg';
import { Link } from 'react-router-dom';

const AdditionalResources = () => {
  const resources = [
    {
      title: "Empathy-Building Exercises",
      desc: "Try simple exercises to better understand others’ feelings.",
      btnText: "Build Empathy",
      btnClass: "btn-teal",
      img: EmpathyImg 
    },
    {
      title: "Daily Tips",
      desc: "Download tips to guide supportive conversations anytime.",
      btnText: "Get Tips",
      btnClass: "btn-teal",
      img: TipsImg
    },
    {
      title: "24/7 Chatbot",
      desc: "Download tips to guide supportive conversations anytime.",
      btnText: "Access Support",
      btnClass: "btn-orange",
      img: ChatbotImg
    }
  ];
  return (
    <div className="resources-outer-wrapper">
      <section className="resources-section">
        <h2 className="resources-main-title">Additional Resources and Support</h2>
        
        <div className="resources-grid">
          {resources.map((item, index) => (
            <div key={index} className="resource-card">
              <div className="card-image-container">
                <img src={item.img} alt={item.title} className="card-img" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-description">{item.desc}</p>
                <button className={`card-btn ${item.btnClass}`}>
                  {item.btnText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="footer-action">
        <Link to= "/Progress">
          <button className="track-progress-btn">
            Track your progress <span className="chevron">&rsaquo;</span>
          </button>
        </Link>

        </div>
      </section>
    </div>
  );
};

export default AdditionalResources;