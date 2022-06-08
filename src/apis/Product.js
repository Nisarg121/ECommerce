import { getAllProductsUrl, getProdctByIdUrl } from "../Routes/Routes";

export const getAllProducts = async () => {
  const response = await fetch(getAllProductsUrl);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};

export const getProductDetails = async (productId) => {
  const response = await fetch(`${getProdctByIdUrl}/${productId}`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};
