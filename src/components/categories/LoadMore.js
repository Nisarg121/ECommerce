import React, { useEffect, useState } from "react";
import { getfilteredProducts } from "../../apis/Category";

const LoadMore = (props) => {
  const [pageNo, setPageNo] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  console.log(pageNo);
  useEffect(() => {
    setPageNo(1);
  }, [props.filterBody]);

  const loadMoreHanlder = async () => {
    setIsLoading(true);
    try {
      const productList = await getfilteredProducts({
        ...props.filterBody,
        pageNo: pageNo + 1,
      });

      if (productList.length < 8) props.setIsLoadMore(false);

      props.setProductList((state) => {
        return [...state, ...productList];
      });
      setIsLoading(false);
    } catch (error) {}
  };

  return (
    <div className="products__btns">
      <button
        className="products__btn btn btn_green"
        onClick={() => {
          setPageNo(pageNo + 1);
          loadMoreHanlder();
        }}
      >
        {isLoading ? <i class="fa fa-spinner fa-spin"></i> : "Show More"}
      </button>
    </div>
  );
};

export default LoadMore;
