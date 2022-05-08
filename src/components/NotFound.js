import React from "react";
import Slider from "react-slick";

const NotFound = () => {
      const setting = {
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: true,
        speed: 600,
        infinite: true,
        responsive: [
          {
            breakpoint: 1366,
            settings: {
              slidesToShow: 7,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 4,
            },
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
  return (
    <div className="categories section">
      <div className="categories__center center">
        <div className="categories__stage stage">- The Categories</div>
        <h2 className="categories__title title title_mb-lg">
          Browse by Category
        </h2>
        <div className="categories__container">
          <div className="">
            <Slider {...setting}>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/shopping-bag.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">On Sale</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/trending.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Featured</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/skincare.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Masks</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/eye-care.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Eye Care</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/natural.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Moisturizers</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/protection.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Treatments</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/night-care.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Night Care</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/after-sun.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Sun Care</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/shopping-bag.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">On Sale</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/trending.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Featured</div>
                </a>
              </div>
              <div className="categories__slide">
                <a className="categories__item" href="category.html">
                  <div className="categories__icon">
                    <img
                      className="categories__pic"
                      src="img/categories/skincare.svg"
                      alt=""
                    />
                  </div>
                  <div className="categories__text">Masks</div>
                </a>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
