import React, { useState } from 'react';
import './FAQSection.css';

const FAQSection = () => {
  // First item open by default to match screenshot
  const [activeIndex, setActiveIndex] = useState(0);

  const faqData = [
    {
      question: "Who is LUMEN-RA designed for?",
      answer: "LUMEN-RA is specifically designed for men aged 16-40 who want to be better allies and provide informed support when women disclose experiences of violence or health-related distress. Whether you're a friend, partner, colleague, or family member, this platform will equip you with the skills you need."
    },
    { question: "Is this platform a substitute for professional mental health services?", answer: "No, this is an educational tool for allyship, not a clinical service." },
    { question: "How long does it take to complete the training?", answer: "The training is self-paced and designed to fit into your schedule." },
    { question: "What makes LUMEN-RA different from other allyship resources?", answer: "We focus on actionable skills and real-world scenarios specifically for men." },
    { question: "Will I receive a certificate upon completion?", answer: "Yes, a certificate is issued upon successful completion of all modules." },
    { question: "How do I know if I'm saying the right thing?", answer: "The modules include guided practice to help build your confidence." },
    { question: "Is my progress tracked?", answer: "Yes, your progress is saved automatically as you move through the training." },
    { question: "What if I make a mistake during the training?", answer: "The platform is a safe space to learn and refine your approach." }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-outer-wrapper">
      <div className="faq">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-underline"></div>
          <p>Find answers to common questions about LUMEN-RA</p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            >
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-toggle">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;