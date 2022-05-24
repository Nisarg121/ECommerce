const DOMAIN = "http://167.71.234.132:3000";

//Main Routes
export const homePage = "homePage";
export const aboutUs = "aboutUs";
export const category = "category";
export const contact = "contact";
export const login = "login";
export const signUp = "signUp";

//api Routes

export const getAllCategriesUrl = `${DOMAIN}/category`;
export const getAllProductsUrl = `${DOMAIN}/product`;
export const getBannerDetailsUrl = `${DOMAIN}/banner/bannerDetails`;
export const getReviewsUrl = `${DOMAIN}/review`;
export const getCartUrl = `${DOMAIN}/cart/getAllCartItems`;
export const manageCartUrl = `${DOMAIN}/cart/manageCart`;

//images path
export const productImageUrl = `${DOMAIN}/uploads/product/original`;
export const categoryImageUrl = `${DOMAIN}/uploads/categoryIcon/original`;
export const signUpUrl = `${DOMAIN}/userAuth/signup`;
export const loginUrl = `${DOMAIN}/userAuth/login`;
