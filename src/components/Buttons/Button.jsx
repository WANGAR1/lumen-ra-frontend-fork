{/* =================Button Component================== */}
import React from 'react';
import "./Button.css";

const Button = ({
 label,
 onClick,
 variant,
 customStyles,
 customClass,
 icon,
 loading
 }) => {

  return (
  <>
  {/* =================Variant Props================== */}
    <button className={`btn ${variant} ${customClass}`}
    styles={customStyles}
    onClick={onClick}
    disabled={loading}>

    {loading ? (
    <span className='spinner'></span>
    ) : ( 
      icon && <span className='icon'>{icon}</span>
    )}
    {label}
   </button>
   </>
  )
};
export default Button;
