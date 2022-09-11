import { useDispatch } from "react-redux";
import { checkout } from "../../reducers/cart/cartSlice";
import { closingModal } from "../../reducers/modalSlice";
import {
  cancelButton,
  checkoutButton,
  footer,
} from "../../Styles/Modal/modalFooter";

const ModalFooter = () => {
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closingModal());
  };
  const Checkout = () => {
    dispatch(checkout());
    dispatch(closingModal());
  };
  return (
    <div className={footer}>
      <button type="button" className={checkoutButton} onClick={Checkout}>
        Checkout
      </button>
      <button type="button" className={cancelButton} onClick={handleClose}>
        Cancel
      </button>
    </div>
  );
};

export default ModalFooter;
