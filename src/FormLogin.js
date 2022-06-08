import React from 'react';
import "./Form.css";

const FromLogin = () => {
    return (
        <div className='form-content-right'>
            <form className="form">
                <h1>
                    Get started with us today! Log-in to your account by filling out the
                information below.
                </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Username</label>
                    <input
                        className='form-input'
                        type='text'
                        name='username'
                        placeholder='Enter your username'
                    />
                </div>
                <div className='form-inputs'>
                    <label className='form-label'>Password</label>
                    <input
                        className='form-input'
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                    />
                </div>
                <button className='form-input-btn' type='submit'>
                    Log-in
                </button>
            </form>
        </div>
    );
}

export default FromLogin;