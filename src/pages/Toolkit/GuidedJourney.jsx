import React from 'react';
import './GuidedJourney.css';
import SignupIcon from '../../assets/Icons/signup.svg';
import CheckIcon from '../../assets/Icons/confidence-check.svg';
import ModuleIcon from '../../assets/Icons/modules.svg';
import ScenarioIcon from '../../assets/Icons/scenarios.svg';
import CertificateIcon from '../../assets/Icons/certificate.svg';

const GuidedJourney = () => {
  const steps = [
   { id: 1, text: "1. Sign-up", icon: SignupIcon },
    { id: 2, text: "2. Take a confidence self-check", icon: CheckIcon },
    { id: 3, text: "3. Learn through videos & modules", icon: ModuleIcon },
    { id: 4, text: "4. Practice scenarios", icon: ScenarioIcon },
    { id: 5, text: "5. Earn your certificate", icon: CertificateIcon }
  ];

  return (
    /* The outer white area visible on the left/right */
    <div className="page-wrapper"> 
      <section className="journey-card">
        <h2 className="journey-title">A Guided Learning Journey</h2>
        
        <div className="steps-row">
          {steps.map((step) => (
            <div key={step.id} className="step-column">
              <div className="icon-holder">
                <img 
                  src={step.icon} 
                  alt="" 
                  className="custom-icon" 
                />
              </div>
              <p className="step-label">{step.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GuidedJourney;