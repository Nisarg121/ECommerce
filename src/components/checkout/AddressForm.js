import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { addNewAddress } from "../../apis/checkOut";
import useHttp from "../../hooks/use-http";
import useInput from "../../hooks/use-input";
const isEmpty = (value) => {
  return value.trim() === "";
};

const AddressForm = (props) => {
  const {
    enteredValue: enteredName,
    isInputInvalid: isNameInvalid,
    valueInputHandler: nameChangeHanlder,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredMobNum,
    isInputInvalid: isMobNumInvalid,
    valueInputHandler: mobNumChangeHandler,
    inputBlurHandler: mobNumBlurHandler,
  } = useInput((value) => {
    return /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(value);
  });

  const {
    enteredValue: enteredAddress,
    isInputInvalid: isAddressInvalid,
    valueInputHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredCity,
    isInputInvalid: isCityInvalid,
    valueInputHandler: cityChangeHanlder,
    inputBlurHandler: cityBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredArea,
    isInputInvalid: isAreaInvalid,
    valueInputHandler: areaChangeHandler,
    inputBlurHandler: areaBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredCountry,
    isInputInvalid: isCountryInvalid,
    valueInputHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    enteredValue: enteredZipCode,
    isInputInvalid: isZipCodeInvalid,
    valueInputHandler: zipCodeChangeHandler,
    inputBlurHandler: zipCodeBlurHandler,
  } = useInput((value) => /^\d{6}?$/.test(value));

  const {
    sendRequest,
    data: addressData,
    status,
    error,
  } = useHttp(addNewAddress);

  useEffect(() => {
    if (status === "completed" && !error) {
      props.setAllAddresses((state) => {
        return [...state, addressData];
      });
      props.setAddress(addressData);
      props.setCloseAddNew(false);
      props.setCount(props.count + 1);
    }
  }, [sendRequest, status, error, addressData]);

  const addAddress = (e) => {
    e.preventDefault();

    if (
      isEmpty(enteredAddress) ||
      isEmpty(enteredArea) ||
      isEmpty(enteredCity) ||
      isEmpty(enteredCountry) ||
      isEmpty(enteredMobNum) ||
      isEmpty(enteredName) ||
      isEmpty(enteredZipCode)
    ) {
      toast.error("All fields are required!");
      return;
    }

    let errors = [];
    if (isNameInvalid) errors.push("Full Name reqired!");
    if (isAddressInvalid) errors.push("Address reqired!");
    if (isCityInvalid) errors.push("City reqired!");
    if (isCountryInvalid) errors.push("Country reqired!");
    if (isZipCodeInvalid) errors.push("ZipCode must be of 6 digit!");
    if (isMobNumInvalid) errors.push("Mobile Number must be 10 digit!");
    if (isAreaInvalid) errors.push("address reqired!");

    if (errors.length > 0) {
      errors.forEach((error) => toast.error(error));
      return;
    }

    const address = {
      fullName: enteredName,
      mobileNumber: enteredMobNum,
      address: enteredAddress,
      area: enteredArea,
      city: enteredCity,
      country: enteredCountry,
      zipCode: Number(enteredZipCode),
    };

    sendRequest(address);
    return;
  };

  if (error) {
  }

  return (
    <form onSubmit={addAddress}>
      <div className={`checkout__box js-checkout-box display`}>
        <div className="checkout__field field">
          <div className="field__label">Full Name</div>
          <div className="field__wrap">
            <input
              className="field__input"
              type="text"
              name="name"
              style={isNameInvalid ? { borderColor: "red" } : {}}
              value={enteredName}
              onChange={nameChangeHanlder}
              onBlur={nameBlurHandler}
              readOnly={status === "pending" && true}
            />
          </div>
        </div>
        <div className="checkout__field field">
          <div className="field__label">Mobile number</div>
          <div className="field__wrap">
            <input
              className="field__input"
              type="text"
              name="mobileNumber"
              style={isMobNumInvalid ? { borderColor: "red" } : {}}
              value={enteredMobNum}
              onChange={mobNumChangeHandler}
              onBlur={mobNumBlurHandler}
              readOnly={status === "pending" && true}
            />
          </div>
        </div>
        <div className="checkout__field field">
          <div className="field__label">
            Flat, House no., Building, Company, Apartment
          </div>
          <div className="field__wrap">
            <input
              className="field__input"
              type="text"
              name="address"
              style={isAddressInvalid ? { borderColor: "red" } : {}}
              value={enteredAddress}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
              readOnly={status === "pending" && true}
            />
          </div>
        </div>
        <div className="checkout__line">
          <div className="checkout__cell">
            <div className="checkout__field field">
              <div className="field__label">Area, Street, Sector, Village</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="text"
                  name="area"
                  style={isAreaInvalid ? { borderColor: "red" } : {}}
                  value={enteredArea}
                  onChange={areaChangeHandler}
                  onBlur={areaBlurHandler}
                  readOnly={status === "pending" && true}
                />
              </div>
            </div>
          </div>
          <div className="checkout__cell">
            <div className="checkout__field field">
              <div className="field__label">City</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  name="city"
                  style={isCityInvalid ? { borderColor: "red" } : {}}
                  value={enteredCity}
                  onChange={cityChangeHanlder}
                  onBlur={cityBlurHandler}
                  readOnly={status === "pending" && true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="checkout__line">
          <div className="checkout__cell">
            <div className="checkout__field field">
              <div className="field__label">Country</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="text"
                  name="country"
                  style={isCountryInvalid ? { borderColor: "red" } : {}}
                  value={enteredCountry}
                  onChange={countryChangeHandler}
                  onBlur={countryBlurHandler}
                />
              </div>
            </div>
          </div>
          <div className="checkout__cell">
            <div className="checkout__field field">
              <div className="field__label">ZIP Code</div>
              <div className="field__wrap">
                <input
                  className="field__input"
                  type="text"
                  name="zipCode"
                  style={isZipCodeInvalid ? { borderColor: "red" } : {}}
                  value={enteredZipCode}
                  onChange={zipCodeChangeHandler}
                  onBlur={zipCodeBlurHandler}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          className={`checkout__btn btn  btn_wide js-checkout-btn ${"btn_green"}`}
          type="submit"
        >
          {status === "pending" ? (
            <i className="fa fa-spinner fa-spin"></i>
          ) : (
            "Continue"
          )}
        </button>
        <button
          className={`checkout__btn btn btn_wide js-checkout-btn cancel_btn
                  }`}
          onClick={() => props.setCloseAddNew(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddressForm;
