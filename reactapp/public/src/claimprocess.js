// src/components/ClaimProcess.js

import React, { useState } from 'react';
import './claimprocess.css';  

const ClaimProcess = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='hello'>
    <div className="claim-form">
    <h2>File a Claim</h2>
    {currentStep === 1 && (
      <div className="form-step">
      <h3>Step 1: Personal Information</h3>
      {/* Add personal information form fields here */}
      <button onClick={nextStep}>Next</button>
      </div>
      )}
      {currentStep === 2 && (
        <div className="form-step">
        <h3>Step 2: Incident Details</h3>
        {/* Add incident details form fields here */}
        <button onClick={prevStep}>Previous</button>
        <button onClick={nextStep}>Next</button>
        </div>
        )}
        {currentStep === 3 && (
          <div className="form-step">
          <h3>Step 3: Documentation Upload</h3>
          {/* Add documentation upload fields here */}
          <button onClick={prevStep}>Previous</button>
          <button onClick={nextStep}>Next</button>
          </div>
          )}
          {currentStep === 4 && (
            <div className="form-step">
            <h3>Step 4: Review and Submit</h3>
            {/* Add review and submit details here */}
            <button onClick={prevStep}>Previous</button>
            <button type="submit">Submit Claim</button>
            </div>
            )}
            </div>
            </div>
            );
          };
          
          export default ClaimProcess;
          