import {getAllCategriesUrl} from "../Routes/Routes";

export const getAllCategries = async () => {
  const response = await fetch(getAllCategriesUrl);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Categories.");
  }

  return data.data;
};
