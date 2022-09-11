import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import {
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../reducers/cart/cartSlice";
import { Cart } from "../../types";
import ProductDetail from "./ProductDetail";
import HandleClose from "./HandleRemove";
import ModalFooter from "./ModalFooter";
import { cartDetail, cartDiv, mainCart } from "../../Styles/Modal/cart";

const Modal = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: RootState) => state.cart);
  const handleAddToCarts = (item: Cart, operation: string) => {
    switch (operation) {
      case "increment":
        dispatch(incrementQuantity(item));
        break;
      case "decrement":
        dispatch(decrementQuantity(item));
        break;
      case "remove":
        dispatch(removeItem(item));
        break;
    }
  };
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className={mainCart}>
          <div className={cartDiv}>
            {cart.length >= 1 ? (
              cart.map((item: Cart) => (
                <div className={cartDetail} key={item?.id}>
                  <HandleClose
                    item={item}
                    handleAddToCarts={handleAddToCarts}
                  />
                  <ProductDetail
                    item={item}
                    handleAddToCarts={handleAddToCarts}
                  />
                </div>
              ))
            ) : (
              <div className="flex justify-center py-4">
                There is no record to display
              </div>
            )}
            <ModalFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
