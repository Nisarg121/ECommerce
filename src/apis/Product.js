import {getAllProductsUrl} from "../Routes/Routes";

export const getAllProducts = async () => {
  const response = await fetch(getAllProductsUrl);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Products.");
  }

  return data.data;
};
