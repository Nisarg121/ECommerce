import React, { useEffect } from "react";
import CategoryTitle from "./CategoryTitle";
import ProductFilters from "./ProductFilters";

const AllCategoriesProducts = () => {
  useEffect(() => {});

  return (
    <div className="products products_full section">
      <div className="products__center center">
        <CategoryTitle />
        <ProductFilters />
        <div className="products__list">
          <div className="product">
            <div className="product__sale">20% OFF</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-1.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Sun Cream
            </a>
            <div className="product__details">
              <div className="product__category yellow">Sun Care</div>
              <div className="product__price">
                <span className="product__old">$30</span>
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__sale">20% OFF</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-2.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Night Eye Cream
            </a>
            <div className="product__details">
              <div className="product__category blue">EYE CARE</div>
              <div className="product__price">
                <span className="product__old">$30</span>
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-3.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Acne Skin Gel
            </a>
            <div className="product__details">
              <div className="product__category pink">Treatments</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-4.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Anti Dry Skin
            </a>
            <div className="product__details">
              <div className="product__category green">Moisturizers</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__new">NEW IN</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-5.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Body Protection
            </a>
            <div className="product__details">
              <div className="product__category yellow">Treatments</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-6.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              All In One Gel
            </a>
            <div className="product__details">
              <div className="product__category blue">FEATURED</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__sale">20% OFF</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-7.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Deep Treatment
            </a>
            <div className="product__details">
              <div className="product__category pink">ON SALE</div>
              <div className="product__price">
                <span className="product__old">$30</span>
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-8.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Morning Shine
            </a>
            <div className="product__details">
              <div className="product__category green">NIGHT CARE</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-3.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Acne Skin Gel
            </a>
            <div className="product__details">
              <div className="product__category pink">Treatments</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-4.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Anti Dry Skin
            </a>
            <div className="product__details">
              <div className="product__category green">Moisturizers</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__new">NEW IN</div>
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-5.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              Body Protection
            </a>
            <div className="product__details">
              <div className="product__category yellow">Treatments</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
          <div className="product">
            <div className="product__view">
              <a className="product__preview" href="product.html">
                <img
                  className="product__pic"
                  src="img/products/product-pic-6.png"
                  alt=""
                />
              </a>
              <a className="product__btn btn btn_green" href="cart.html">
                Add to Cart
              </a>
            </div>
            <a className="product__name" href="product.html">
              All In One Gel
            </a>
            <div className="product__details">
              <div className="product__category blue">FEATURED</div>
              <div className="product__price">
                <span className="product__actual">$20</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesProducts;
