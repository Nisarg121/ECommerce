import React, { useEffect, useState } from "react";
import AddressForm from "./AddressForm";
import Payment from "./Payment";

const BillingAddress = (props) => {
  const { count, setCount } = props;
  const [billingAddress, setBillingAddress] = useState(null);
  const [addNew, setAddNew] = useState(false);

  useEffect(() => {
    setBillingAddress(props.shippingAddress);
  }, [props.shippingAddress]);

  return (
    <>
      {count === 2 && (
        <div className={`checkout__item js-checkout-item `}>
          <div className="checkout__category">Billing Details</div>
          {!addNew && (
            <>
              <div className="address">
                {props.allAddresses.map((address) => (
                  <div
                    className={`address_container checkbox__text ${
                      (billingAddress ? billingAddress._id : "") ===
                        address._id && "active"
                    }`}
                    onClick={() => setBillingAddress(address)}
                    key={address._id}
                  >
                    <div style={{ fontWeight: 600 }}>{address.fullName}</div>
                    <div>{address.address}</div>
                    <div>{`${address.area} ${address.city} ${address.zipCode}`}</div>
                    <div>{address.country}</div>
                    <div>{address.mobileNumber}</div>
                  </div>
                ))}
              </div>
              <button
                className="checkout__btn btn btn_green btn_wide js-checkout-btn"
                onClick={() => setCount(3)}
              >
                Continue
              </button>
            </>
          )}

          <div className="checkout__fieldset">
            {!addNew && (
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

            {addNew && (
              <AddressForm
                setCount={setCount}
                count={props.count}
                addNew={addNew}
                setAllAddresses={props.setAllAddresses}
                setAddress={setBillingAddress}
                setCloseAddNew={setAddNew}
              />
            )}
          </div>
        </div>
      )}
      {count === 3 && (
        <Payment
          shippingAddress={props.shippingAddress}
          billingAddress={billingAddress}
        />
      )}
    </>
  );
};

export default BillingAddress;
