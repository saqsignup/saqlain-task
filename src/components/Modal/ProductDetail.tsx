import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  cartDetailBoldText,
  cartDetailText,
  cartImg,
  cartImgDiv,
} from "../../Styles/Modal/cart";
import { Cart } from "../../types";
import Operations from "./Operations";

export interface ProductDetailInterface {
  item: Cart;
  handleAddToCarts: (item: Cart, operation: string) => void;
}
const ProductDetail: React.FC<ProductDetailInterface> = (props) => {
  const { totalQuanity } = useSelector((state: RootState) => state.cart);

  return (
    <div className="sm:flex sm:items-start">
      <div className="columns-md flex">
        <div className={cartImgDiv}>
          <img alt="ecommerce" className={cartImg} src={props.item?.img} />
        </div>

        <div className="flex px-3">
          <div>
            <h3 className={cartDetailText}>{props.item?.name}</h3>
            <Operations
              item={props?.item}
              handleAddToCarts={props?.handleAddToCarts}
            />
          </div>

          <div className="justify-end px-5">
            <h3 className={cartDetailBoldText}>
              $
              {props.item.totalPriceOfProduct
                ? props.item.totalPriceOfProduct
                : props.item.price}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
