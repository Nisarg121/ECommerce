import React from "react";

const Category = () => {
  return (
    <>
      <div class="breadcrumbs">
        <div class="breadcrumbs__center center">
          <ul class="breadcrumbs__list">
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="index.html">
                Home Page
              </a>
            </li>
            <li class="breadcrumbs__item">
              <a class="breadcrumbs__link" href="#">
                Navigation
              </a>
            </li>
            <li class="breadcrumbs__item">Eye Care</li>
          </ul>
        </div>
      </div>
      <div class="products products_full section">
        <div class="products__center center">
          <div class="products__stage stage">- Eye Care Products</div>
          <h2 class="products__title title title_mb-lg">Explore the Eye Care <br />Products</h2>
          <div class="filters js-filters">
            <div class="filters__sorting">
              <div class="filters__open js-filters-open">Filter By</div>
              <div class="filters__wrap js-filters-wrap">
                <div class="filters__drop drop js-drop">
                  <div class="drop__head js-drop-head">Color</div>
                  <div class="drop__body js-drop-body"><a class="drop__link js-drop-link" href="#">Red</a><a class="drop__link js-drop-link" href="#">Blue</a><a class="drop__link js-drop-link" href="#">Green</a><a class="drop__link js-drop-link" href="#">Black</a></div>
                </div>
                <div class="filters__drop drop js-drop">
                  <div class="drop__head js-drop-head">Category</div>
                  <div class="drop__body js-drop-body"><a class="drop__link js-drop-link" href="#">Treatments</a><a class="drop__link js-drop-link" href="#">Moisturizers</a><a class="drop__link js-drop-link" href="#">Featured</a></div>
                </div>
                <div class="filters__drop drop js-drop">
                  <div class="drop__head js-drop-head">Price Range</div>
                  <div class="drop__body js-drop-body"><a class="drop__link js-drop-link" href="#">$0 - $10</a><a class="drop__link js-drop-link" href="#">$10 - $50</a><a class="drop__link js-drop-link" href="#">$50 +</a></div>
                </div>
              </div>
              
            </div>
            <div class="filters__tags">
              <div class="filters__tag">$0 - $10<button class="filters__remove"></button></div>
              <div class="filters__tag">Skincare<button class="filters__remove"></button></div>
              <div class="filters__tag">Green<button class="filters__remove"></button></div>
            </div>
          </div>
          <div class="products__list">
            <div class="product">
              <div class="product__sale">20% OFF</div>
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-1.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Sun Cream</a>
              <div class="product__details">
                <div class="product__category yellow">Sun Care</div>
                <div class="product__price"><span class="product__old">$30</span><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__sale">20% OFF</div>
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-2.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Night Eye Cream</a>
              <div class="product__details">
                <div class="product__category blue">EYE CARE</div>
                <div class="product__price"><span class="product__old">$30</span><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-3.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Acne Skin Gel</a>
              <div class="product__details">
                <div class="product__category pink">Treatments</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-4.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Anti Dry Skin</a>
              <div class="product__details">
                <div class="product__category green">Moisturizers</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__new">NEW IN</div>
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-5.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Body Protection</a>
              <div class="product__details">
                <div class="product__category yellow">Treatments</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-6.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">All In One Gel</a>
              <div class="product__details">
                <div class="product__category blue">FEATURED</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__sale">20% OFF</div>
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-7.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Deep Treatment</a>
              <div class="product__details">
                <div class="product__category pink">ON SALE</div>
                <div class="product__price"><span class="product__old">$30</span><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-8.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Morning Shine</a>
              <div class="product__details">
                <div class="product__category green">NIGHT CARE</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-3.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Acne Skin Gel</a>
              <div class="product__details">
                <div class="product__category pink">Treatments</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-4.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Anti Dry Skin</a>
              <div class="product__details">
                <div class="product__category green">Moisturizers</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__new">NEW IN</div>
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-5.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">Body Protection</a>
              <div class="product__details">
                <div class="product__category yellow">Treatments</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
            <div class="product">
              <div class="product__view"><a class="product__preview" href="product.html"><img class="product__pic" src="img/products/product-pic-6.png" alt="" /></a><a class="product__btn btn btn_green" href="cart.html">Add to Cart</a></div><a class="product__name" href="product.html">All In One Gel</a>
              <div class="product__details">
                <div class="product__category blue">FEATURED</div>
                <div class="product__price"><span class="product__actual">$20</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
