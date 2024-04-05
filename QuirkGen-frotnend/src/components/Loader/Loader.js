import React, { useState, useEffect } from 'react';
import "./Loader.css";

const Loader = ({ isLoaderOpen, children }) => {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
          setIsVisible(false);
        }, 4000);
    
        // Clear the timer when the component unmounts or when isVisible becomes false
        return () => clearTimeout(timer);
      }, []);
    if (!isLoaderOpen) {
        return null;
      }
  return (
    <>
      {isVisible && (
        <div className="modal-overlay-loader">
        <div className="modal-content-loader">
          {children}
        </div>
      </div>
      )}
    </>
  )
}

export default Loader