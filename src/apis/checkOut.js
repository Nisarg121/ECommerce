import {
  addAddressesUrl,
  createOrderurl,
  getAddressesUrl,
  updateOrderurl,
} from "../Routes/Routes";

export const getAddresses = async () => {
  const response = await fetch(getAddressesUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("eComToken")}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};

export const addNewAddress = async (addressBody) => {
  console.log(addressBody);
  const response = await fetch(addAddressesUrl, {
    method: "POST",
    body: JSON.stringify(addressBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("eComToken")}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};

export const createorder = async (orderBody) => {
  const response = await fetch(createOrderurl, {
    method: "POST",
    body: JSON.stringify(orderBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("eComToken")}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};

export const updateOrder = async (orderBody) => {
  const response = await fetch(updateOrderurl, {
    method: "POST",
    body: JSON.stringify(orderBody),
    headers: {
      "Content-Type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("eComToken")}`,
    },
  });

  const data = await response.json();

  if (response.status === 401) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};
