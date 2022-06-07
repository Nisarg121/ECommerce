import React, { useState } from "react";
import Addresses from "./Addresses";
import AddressForm from "./AddressForm";
import BillingAddress from "./BillingAddress";

const ShippingAddress = (props) => {
  const { count, setCount } = props;
  const [allAddresses, setAllAddresses] = useState([]);
  const [addNew, setAddNew] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shippingAddress, setShippingAddress] = useState(null);

  return (
    <>
      {count === 1 && (
        <div className={`checkout__item js-checkout-item `}>
          <div className="checkout__category">Shipping Address</div>
          {(!isLoaded || allAddresses.length > 0) && !addNew && (
            <>
              <Addresses
                setAllAddresses={setAllAddresses}
                allAddresses={allAddresses}
                setShippingAddress={setShippingAddress}
                shippingAddress={shippingAddress}
                setIsLoaded={setIsLoaded}
              />
              <button
                className={`checkout__btn btn btn_wide js-checkout-btn ${
                  shippingAddress ? "btn_green" : "disabled"
                }`}
                disabled={shippingAddress ? false : true}
                onClick={() => setCount(2)}
              >
                Continue
              </button>
            </>
          )}

          <div className="checkout__fieldset">
            {!addNew && allAddresses.length > 0 && (
              <label className="checkout__checkbox checkbox">
                <input
                  className="checkbox__input js-checkout-checkbox"
                  type="checkbox"
                  onChange={() => setAddNew(!addNew)}
                />
                <span className="checkbox__in">
                  <span className="checkbox__tick"></span>
                  <span className="checkbox__text">Add new address</span>
                </span>
              </label>
            )}

            {(addNew || allAddresses.length === 0) && isLoaded && (
              <>
                <AddressForm
                  setCount={setCount}
                  count={count}
                  addNew={addNew}
                  setAllAddresses={setAllAddresses}
                  setAddress={setShippingAddress}
                  setCloseAddNew={setAddNew}
                />
              </>
            )}
          </div>
        </div>
      )}
      <BillingAddress
        count={count}
        setCount={setCount}
        shippingAddress={shippingAddress}
        allAddresses={allAddresses}
        setAllAddresses={setAllAddresses}
      />
    </>
  );
};

export default ShippingAddress;
