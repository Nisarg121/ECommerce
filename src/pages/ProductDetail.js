import React from "react";

const ProductDetail = () => {
  return (
    <>
      <div class="breadcrumbs breadcrumbs_mb-md">
        <div class="breadcrumbs__center center">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="category.html">
                Categories
              </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="#">
                Sun Care
              </a>
            </li>
            <li class="breadcrumbs__item">Sun Cream 950 ml</li>
          </ul>
        </div>
      </div>
      <div class="card section">
        <div class="card__center center">
          <div class="card__row">
            <div class="card__col">
              <div class="card__gallery">
                <div class="card__container" id="gallery">
                  <div class="card__slider js-slider-card">
                    <div class="card__slide">
                      <a
                        class="card__preview active"
                        data-image="img/card-pic-1.png"
                        data-zoom-image="img/card-pic-big-1.png"
                        href="#"
                      >
                        <img
                          class="card__pic"
                          src="img/card-pic-1.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="card__slide">
                      <a
                        class="card__preview"
                        data-image="img/card-pic-2.png"
                        data-zoom-image="img/card-pic-big-2.png"
                        href="#"
                      >
                        <img
                          class="card__pic"
                          src="img/card-pic-2.png"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="card__slide">
                      <a
                        class="card__preview"
                        data-image="img/card-pic-3.png"
                        data-zoom-image="img/card-pic-big-3.png"
                        href="#"
                      >
                        <img
                          class="card__pic"
                          src="img/card-pic-3.png"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="card__wrap">
                  <div class="card__preview">
                    <img
                      class="card__pic js-zoom"
                      src="img/card-pic-1.png"
                      alt=""
                      data-zoom-image="img/card-pic-big-1.png"
                    />
                  </div>
                  <div class="card__icon">
                    <svg class="icon icon-magnifier">
                      <use xlinkHref="img/sprite.svg#icon-magnifier"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="card__col">
              <div class="card__stage stage">- Selling Fast</div>
              <h1 class="card__title title">Sun Cream</h1>
              <div class="card__details">
                <div class="card__category yellow">Sun Care</div>
                <div class="card__prices">
                  <div class="card__old">$30</div>
                  <div class="card__actual">$20</div>
                </div>
              </div>
              <div class="card__code">
                SKU:<span class="card__number">123456789</span>
              </div>
              <div class="card__control">
                <div class="card__counter counter js-counter">
                  <button
                    class="counter__btn counter__btn_minus js-counter-minus"
                    type="button"
                  >
                    <svg class="icon icon-arrow-prev">
                      <use xlinkHref="img/sprite.svg#icon-arrow-prev"></use>
                    </svg>
                  </button>
                  <input
                    class="counter__input js-counter-input"
                    type="text"
                    value="1"
                    size="3"
                  />
                  <button
                    class="counter__btn counter__btn_plus js-counter-plus"
                    type="button"
                  >
                    <svg class="icon icon-arrow-next">
                      <use xlinkHref="img/sprite.svg#icon-arrow-next"></use>
                    </svg>
                  </button>
                </div>
                <a class="card__btn btn btn_green" href="cart.html">
                  Add to Cart
                </a>
                <button class="card__favorite">
                  <svg class="icon icon-heart-border">
                    <use xlinkHref="img/sprite.svg#icon-heart-border"></use>
                  </svg>
                  <svg class="icon icon-heart-fill">
                    <use xlinkHref="img/sprite.svg#icon-heart-fill"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="details section">
        <div class="details__center center">
          <div class="details__row">
            <div class="details__col">
              <div class="details__stage stage">- Product Features</div>
              <h1 class="details__title title">Explore the Features</h1>
            </div>
            <div class="details__col">
              <div class="details__item">
                <div class="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      d="M15.993 2l7.783 8.203c1.54 1.62 2.587 3.687 3.012 5.937a12.18 12.18 0 0 1-.625 6.7c-.832 2.12-2.242 3.93-4.05 5.205S18.176 30 16 30s-4.303-.68-6.112-1.955-3.22-3.086-4.05-5.205a12.18 12.18 0 0 1-.625-6.7c.425-2.25 1.473-4.315 3.012-5.937L15.993 2z"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="details__box">
                  <div class="details__category">Natural</div>
                  <div class="details__text">
                    We are using natural ingredients only when creating our
                    products.
                  </div>
                </div>
              </div>
              <div class="details__item">
                <div class="details__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                  >
                    <path
                      d="M16 30s11-5.6 11-14V6.2L16 2 5 6.2V16c0 8.4 11 14 11 14z"
                      stroke="#000"
                      stroke-width="2.5"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <div class="details__box">
                  <div class="details__category">Full Protection</div>
                  <div class="details__text">
                    This product provides broad spectrum SPF 50 and blue light
                    protection.
                  </div>
                </div>
              </div>
              <div class="details__item">
                <div class="details__icon">
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
                <div class="details__box">
                  <div class="details__category">Trending</div>
                  <div class="details__text">
                    It is one of our most popular products that we have on
                    offer.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider section">
        <div class="slider__center center">
          <div class="slider__stage stage">- Explore More</div>
          <h2 class="slider__title title title_mb-lg">Related Products</h2>
          <div class="slider__container">
            <div class="slider__list js-slider-products">
              <div class="slider__slide">
                <div class="product">
                  <div class="product__sale">20% OFF</div>
                  <div class="product__view">
                    <a class="product__preview" href="product.html">
                      <img
                        class="product__pic"
                        src="img/products/product-pic-1.png"
                        alt=""
                      />
                    </a>
                    <a class="product__btn btn btn_green" href="cart.html">
                      Add to Cart
                    </a>
                  </div>
                  <a class="product__name" href="product.html">
                    Damaged Repair
                  </a>
                  <div class="product__details">
                    <div class="product__category yellow">Sun Care</div>
                    <div class="product__price">
                      <span class="product__old">$30</span>
                      <span class="product__actual">$20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__slide">
                <div class="product">
                  <div class="product__view">
                    <a class="product__preview" href="product.html">
                      <img
                        class="product__pic"
                        src="img/products/product-pic-3.png"
                        alt=""
                      />
                    </a>
                    <a class="product__btn btn btn_green" href="cart.html">
                      Add to Cart
                    </a>
                  </div>
                  <a class="product__name" href="product.html">
                    Acne Skin Gel
                  </a>
                  <div class="product__details">
                    <div class="product__category pink">Treatments</div>
                    <div class="product__price">
                      <span class="product__actual">$20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__slide">
                <div class="product">
                  <div class="product__sale">20% OFF</div>
                  <div class="product__view">
                    <a class="product__preview" href="product.html">
                      <img
                        class="product__pic"
                        src="img/products/product-pic-2.png"
                        alt=""
                      />
                    </a>
                    <a class="product__btn btn btn_green" href="cart.html">
                      Add to Cart
                    </a>
                  </div>
                  <a class="product__name" href="product.html">
                    Night Eye Cream
                  </a>
                  <div class="product__details">
                    <div class="product__category blue">EYE CARE</div>
                    <div class="product__price">
                      <span class="product__old">$30</span>
                      <span class="product__actual">$20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__slide">
                <div class="product">
                  <div class="product__view">
                    <a class="product__preview" href="product.html">
                      <img
                        class="product__pic"
                        src="img/products/product-pic-4.png"
                        alt=""
                      />
                    </a>
                    <a class="product__btn btn btn_green" href="cart.html">
                      Add to Cart
                    </a>
                  </div>
                  <a class="product__name" href="product.html">
                    Dry Skin Rescue
                  </a>
                  <div class="product__details">
                    <div class="product__category green">Moisturizers</div>
                    <div class="product__price">
                      <span class="product__actual">$20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__slide">
                <div class="product">
                  <div class="product__view">
                    <a class="product__preview" href="product.html">
                      <img
                        class="product__pic"
                        src="img/products/product-pic-5.png"
                        alt=""
                      />
                    </a>
                    <a class="product__btn btn btn_green" href="cart.html">
                      Add to Cart
                    </a>
                  </div>
                  <a class="product__name" href="product.html">
                    Damaged Repair
                  </a>
                  <div class="product__details">
                    <div class="product__category yellow">Sun Care</div>
                    <div class="product__price">
                      <span class="product__actual">$20</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__slide">
                <div class="product">
                  <div class="product__view">
                    <a class="product__preview" href="product.html">
                      <img
                        class="product__pic"
                        src="img/products/product-pic-6.png"
                        alt=""
                      />
                    </a>
                    <a class="product__btn btn btn_green" href="cart.html">
                      Add to Cart
                    </a>
                  </div>
                  <a class="product__name" href="product.html">
                    All In One Gel
                  </a>
                  <div class="product__details">
                    <div class="product__category blue">FEATURED</div>
                    <div class="product__price">
                      <span class="product__actual">$20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
