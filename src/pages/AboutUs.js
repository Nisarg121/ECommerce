import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="breadcrumbs">
        <div className="breadcrumbs__center center">
          <ul className="breadcrumbs__list">
            <li className="breadcrumbs__item">
              <a className="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li className="breadcrumbs__item">
              <Link className="breadcrumbs__link" to="/aboutUs">
                Navigation
              </Link>
            </li>
            <li className="breadcrumbs__item">About</li>
          </ul>
        </div>
      </div>
      <div className="company section js-faq">
        <div className="company__wrap section">
          <div className="company__center center">
            <div className="company__stage stage">- Learn More</div>
            <h2 className="company__title title title_mb-lg">All About Us</h2>
            <img className="company__bg" src="img/company-bg.jpg" alt="" />
          </div>
        </div>
      </div>
      <div class="about section">
        <div class="about__center center">
          <div class="about__stage stage">- Company Values</div>
          <h2 class="about__title title title_mb-lg">Our Core Values</h2>
          <div class="about__list">
            <div class="about__item">
              <div class="about__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M30 9L17.91 20.875l-6.364-6.25L2 24"></path>
                  <path d="M22 9h8v8"></path>
                </svg>
              </div>
              <div class="about__category">Great Innovation</div>
              <div class="about__text">
                We are always focusing on making all our products as innovative
                as possible.
              </div>
            </div>
            <div class="about__item">
              <div class="about__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                >
                  <path
                    d="M16 3l4.326 8.557L30 12.938l-7 6.657L24.652 29 16 24.557 7.348 29 9 19.595l-7-6.657 9.674-1.38L16 3z"
                    stroke="#000"
                    stroke-width="2.5"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </div>
              <div class="about__category">High Quality</div>
              <div class="about__text">
                One of our main values is the quality of the products that we
                sell to the customers.
              </div>
            </div>
            <div class="about__item">
              <div class="about__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  stroke="#000"
                  stroke-width="2.5"
                  stroke-linejoin="round"
                >
                  <path
                    d="M28 30v-3a6 6 0 0 0-6-6H10a6 6 0 0 0-6 6v3"
                    stroke-linecap="round"
                  ></path>
                  <path d="M16 14a6 6 0 1 0 0-12 6 6 0 1 0 0 12z"></path>
                </svg>
              </div>
              <div class="about__category">Teamwork Matters</div>
              <div class="about__text">
                We believe that being a successful company is all about being a
                team.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
