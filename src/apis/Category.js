import { getAllCategriesUrl, getFilteredProductsUrl } from "../Routes/Routes";

export const getAllCategries = async () => {
  const response = await fetch(getAllCategriesUrl);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Categories.");
  }

  return data.data;
};

export const getfilteredProducts = async (filtersBody) => {
  const response = await fetch(getFilteredProductsUrl, {
    method: "POST",
    body: JSON.stringify(filtersBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Categories.");
  }

  return data;
};
