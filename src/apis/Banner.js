import { getBannerDetailsUrl } from "../Routes/Routes";

export const getBanner = async () => {
  const response = await fetch(getBannerDetailsUrl);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch Categories.");
  }

  return responseData.data;
};
