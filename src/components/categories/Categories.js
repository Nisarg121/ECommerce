import React from "react";

const Categories = () => {
  // // global variables
  // var prevArrow =
  //     '<button type="button" className="slick-prev"><svg className="icon icon-arrow-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use></svg></button>',
  //   nextArrow =
  //     '<button type="button" className="slick-next"><svg className="icon icon-arrow-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use></svg></button>';

  // $(document).ready(function () {
  //   // slider categories
  //   $(".js-slider-categories").slick({
  //     slidesToShow: 8,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     prevArrow: prevArrow,
  //     nextArrow: nextArrow,
  //     speed: 600,
  //     infinite: true,
  //     responsive: [
  //       {
  //         breakpoint: 1366,
  //         settings: {
  //           slidesToShow: 7,
  //         },
  //       },
  //       {
  //         breakpoint: 1200,
  //         settings: {
  //           slidesToShow: 6,
  //         },
  //       },
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 5,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 4,
  //         },
  //       },
  //       {
  //         breakpoint: 640,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //     ],
  //   });

  //   // slider review
  //   $(".js-slider-review").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     prevArrow: prevArrow,
  //     nextArrow: nextArrow,
  //     dots: true,
  //     speed: 600,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           adaptiveHeight: true,
  //         },
  //       },
  //     ],
  //   });

  //   // slider card
  //   $(".js-slider-card").slick({
  //     slidesToShow: 3,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     prevArrow: prevArrow,
  //     nextArrow: nextArrow,
  //     speed: 600,
  //     vertical: true,
  //     verticalSwiping: true,
  //     responsive: [
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           vertical: false,
  //           verticalSwiping: false,
  //         },
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: {
  //           slidesToShow: 1,
  //           vertical: false,
  //           verticalSwiping: false,
  //         },
  //       },
  //     ],
  //   });

  //   // slider products
  //   $(".js-slider-products").slick({
  //     slidesToShow: 4,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     prevArrow: prevArrow,
  //     nextArrow: nextArrow,
  //     speed: 600,
  //     responsive: [
  //       {
  //         breakpoint: 1366,
  //         settings: {
  //           slidesToShow: 3,
  //         },
  //       },
  //       {
  //         breakpoint: 1024,
  //         settings: {
  //           slidesToShow: 2,
  //         },
  //       },
  //       {
  //         breakpoint: 640,
  //         settings: {
  //           slidesToShow: 1,
  //           adaptiveHeight: true,
  //         },
  //       },
  //     ],
  //   });

  //   $(".js-slider-blog").slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 1,
  //     arrows: true,
  //     prevArrow: prevArrow,
  //     nextArrow: nextArrow,
  //     speed: 600,
  //     adaptiveHeight: true,
  //     responsive: [
  //       {
  //         breakpoint: 9999,
  //         settings: "unslick",
  //       },
  //       {
  //         breakpoint: 768,
  //         settings: "",
  //       },
  //     ],
  //   });

  //   $(window).on("resize orientationchange", function () {
  //     $(".js-slider-blog").slick("resize");
  //   });
  // });

  // $(".js-slider-blog").slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   arrows: true,
  //   prevArrow: prevArrow,
  //   nextArrow: nextArrow,
  //   speed: 600,
  //   adaptiveHeight: true,
  //   responsive: [
  //     {
  //       breakpoint: 9999,
  //       settings: "unslick",
  //     },
  //     {
  //       breakpoint: 768,
  //       settings: "",
  //     },
  //   ],
  // });

  return (
    <div className="categories section">
      <div className="categories__center center">
        <div className="categories__stage stage">- The Categories</div>
        <h2 className="categories__title title title_mb-lg">Browse by Category</h2>
        <div className="categories__container">
          <div className="categories__slider js-slider-categories">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
