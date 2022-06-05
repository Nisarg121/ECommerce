import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createorder, updateOrder } from "../../apis/checkOut";
import { homePage } from "../../Routes/Routes";
import { clearCart } from "../../store/cart";

const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

const Payment = (props) => {
  const { shippingAddress, billingAddress } = props;
  const navigator = useNavigate();
  const dispatch = useDispatch();

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      return toast.error("Razorpay sdk failed to load. Are you Online?");
    }

    const orderBody = {
      shippingAddress: shippingAddress._id,
      billingAddress: shippingAddress._id,
    };

    const { orderInfo, userInfo } = await createorder(orderBody);

    try {
      const options = {
        key: "rzp_test_G9LLJCxFD9fN0S",
        currency: orderInfo.currency,
        amount: orderInfo.amount,
        name: userInfo.name,
        image: "img/logoimage2.png",
        order_id: orderInfo.razorpayOrderId,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            response;

          try {
            await updateOrder({
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
              orderId: orderInfo.orderId,
            });

            dispatch(clearCart());
            navigator(`/${homePage}`);
            return toast.success("your order successfully placed.");
          } catch (error) {
            navigator(`/${homePage}`);
            console.log(error);
            return toast.error(error.message);
          }
        },
        prefill: {
          name: userInfo.name,
          email: userInfo.email,
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className={`checkout__item js-checkout-item `}>
      <div className="checkout__category">Shipping Details</div>
      <div className="address">
        <div className={`address_container checkbox__text `}>
          <div style={{ fontWeight: 600 }}>{shippingAddress.fullName}</div>
          <div>{shippingAddress.address}</div>
          <div>{`${shippingAddress.area} ${shippingAddress.city} ${shippingAddress.zipCode}`}</div>
          <div>{shippingAddress.country}</div>
          <div>{shippingAddress.mobileNumber}</div>
        </div>
      </div>
      <div className="checkout__category">Billing Details</div>
      <div className="address">
        <div className={`address_container checkbox__text `}>
          <div style={{ fontWeight: 600 }}>{billingAddress.fullName}</div>
          <div>{billingAddress.address}</div>
          <div>{`${billingAddress.area} ${billingAddress.city} ${billingAddress.zipCode}`}</div>
          <div>{billingAddress.country}</div>
          <div>{billingAddress.mobileNumber}</div>
        </div>
      </div>
      <button
        className="checkout__btn btn btn_green btn_wide js-checkout-btn"
        onClick={displayRazorpay}
      >
        Make Payment
      </button>
    </div>
  );
};

export default Payment;
