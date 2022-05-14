import { getBannerDetailsUrl, getReviewsUrl } from "../Routes/Routes";

export const getBanner = async () => {
  const response = await fetch(getBannerDetailsUrl);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch Categories.");
  }

  return responseData.data;
};

export const getReviews = async () => {
  const response = await fetch(getReviewsUrl);
  const responseData = await response.json();

  if (!response.ok) {
    throw new Error(responseData.message || "Could not fetch Categories.");
  }

  return responseData.data;
};
