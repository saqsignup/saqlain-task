import React from "react";
import { addToCartBtn, paraText } from "../../Styles/Home/home";
import { Product } from "../../types";
export interface SubProductDetailInterface {
  item: Product;
  handleAddToCart: (item: Product) => void;
}
const ProductsSubDetail: React.FC<SubProductDetailInterface> = (props) => {
  return (
    <div className="px-5 pb-5">
      <h3 className="text-gray-500  text-xl tracking-tight dark:text-white">
        {props?.item?.name}
      </h3>

      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-gray-900 dark:text-white">
          ${props?.item?.price}
          <p className={paraText}>{props?.item?.colour}</p>
        </span>
        <button
          className={addToCartBtn}
          onClick={() => props.handleAddToCart(props?.item)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductsSubDetail;
