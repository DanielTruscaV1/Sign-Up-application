import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import FormLogin from "./FormLogin";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [auxiliary, setAuxiliary] = useState(false);
  const [lockedInValues, setLockedInValues] = useState({});
  function submitForm() {
    setIsSubmitted(true);
  }
  const hanldeClick = () => {
    setIsSubmitted(!isSubmitted);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn' onClick={hanldeClick}>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>
        {
        !auxiliary ?
          !isSubmitted ? (
            <FormSignup submitForm={submitForm} auxiliary={auxiliary} setAuxiliary={setAuxiliary}/>
          ) : (
            <FormSuccess />
          )
          :
          <FormLogin/>
        }
      </div>
    </>
  );
};

export default Form;
