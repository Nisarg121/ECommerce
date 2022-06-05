import React, { useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";
import { getAddresses } from "../../apis/checkOut";
import useHttp from "../../hooks/use-http";

const Addresses = (props) => {
  const {
    sendRequest,
    data: addresses,
    status,
    error,
  } = useHttp(getAddresses, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  useEffect(() => {
    if (!error && status === "completed") {
      props.setAllAddresses(addresses);
      props.setIsLoaded(true);
    }
  }, [error, status, addresses, props]);

  if (error) {
    return toast.error(error);
  }

  if (status === "pending") {
    return (
      <div className="address">
        <div className="address_container checkbox__text">
          <div style={{ fontWeight: 600 }}>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton />
          </div>
          <div>
            <Skeleton width="50%" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="address">
      {props.allAddresses.map((address) => (
        <div
          className={`address_container checkbox__text ${
            (props.shippingAddress ? props.shippingAddress._id : "") ===
              address._id && "active"
          }`}
          onClick={() => props.setShippingAddress(address)}
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
  );
};

export default Addresses;
