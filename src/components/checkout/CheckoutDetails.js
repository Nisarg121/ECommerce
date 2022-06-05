import React, { useState } from "react";
import ShippingAddress from "./ShippingAddress";

const CheckoutDetails = () => {
  const [stepperCount, setStepperCount] = useState(1);
  
  return (
    <>
      <div className="checkout__col">
        <div className="checkout__steps">
          {[1, 2, 3].map((i) => (
            <div
              className={`checkout__step js-checkout-step ${
                i <= stepperCount && "active"
              }`}
              onClick={() => {
                if (stepperCount > i) {
                  setStepperCount(i);
                }
              }}
              key={i}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="checkout__container">
          <ShippingAddress count={stepperCount} setCount={setStepperCount} />
        </div>
      </div>
    </>
  );
};

export default CheckoutDetails;
