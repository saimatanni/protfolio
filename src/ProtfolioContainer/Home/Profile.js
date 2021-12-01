import React from "react";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.facebook.com/sayma.alam.773">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://github.com/saimatanni">
              <i class="fa fa-github"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
          </div>
          <div className="profile-details-name">
              <span className="primary-text">
                  {" "}
                  Hello, I'm <span className="highlighted-text">Saima </span>
              </span>
          </div>
          <div className='profile-details-role'>
              <span className="primary-text">
                  {" "}
                  <h1>
                      
                  </h1>
              </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
