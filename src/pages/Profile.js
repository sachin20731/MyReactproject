import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import './profile.css'
import img1 from './profile.jpg';

function Profile() {
  // Use useLocation hook to get the state from the navigation
  const location = useLocation();
  const { user } = location.state || {};

  return (
    <div className='background3'>
      <div className='user-profile-container'>
        <div className='header-user-profile'>Profile Details</div>
        {/* Render user data in the profile page */}
        {user && (
          <div className='user-profile-box'>
          <div>
          <img src={img1} alt='profile imag' className='profile-photo'/>
          </div>
            <div className='user-details'>
              <p>Email: {user.email}</p>
              <p>Name: {user.username}</p>
            </div>
            <Link to='./Login' className='delete-account-button'>
              <button type="button">Delete account</button>
            </Link>

            <div>
            <Link to='/' className='reset-account-button'>
              <button type="button">Reset Password</button>
            </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;