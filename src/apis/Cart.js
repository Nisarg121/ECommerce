import { getCartUrl, manageCartUrl } from "../Routes/Routes";

export const getCart = async () => {
  const response = await fetch(getCartUrl, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("eComToken")}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Categories.");
  }

  return data.data;
};

export const manageCart = async (productBody) => {
  const response = await fetch(manageCartUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("eComToken")}`,
    },
    body: JSON.stringify(productBody),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Categories.");
  }

  return data.data;
};
