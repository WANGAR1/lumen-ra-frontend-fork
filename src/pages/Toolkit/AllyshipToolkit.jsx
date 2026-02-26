import React from 'react';
import './AllyshipToolkit.css';
import Button from "../../components/Buttons/Button";

const AllyshipToolkit = () => {
  return (
    <div className="allyship-container">
      <div className="allyship-card">
        <h1 className="allyship-title">Your Allyship Toolkit</h1>
        
        <p className="allyship-description">
          A structured gender-based Toolkit designed to Empower<br />
          and Educate Men to Support Women
        </p>

        <div className="allyship-button-group">
          <Button label="Start Learning" variant= "Let's chat "/>
          
          <button className="btn-secondary">
            Browse Modules 
            <span className="btn-arrow">&rsaquo;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllyshipToolkit;