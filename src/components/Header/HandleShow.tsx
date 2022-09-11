import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import { ADD_TO_CART } from "../../modules/imagesUrl/url";
import { showingModal } from "../../reducers/modalSlice";
import { modalPara } from "../../Styles/Navbar/navbarMain";

const HandleShow = () => {
  const dispatch = useAppDispatch();

  const { totalQuanity } = useSelector((state: RootState) => state.cart);
  const showModal = () => {
    dispatch(showingModal());
  };
  return (
    <div className="relative cursor-pointer" onClick={showModal}>
      <img
        alt="add to cart"
        className="object-cover object-center w-10 h-10 block"
        src={ADD_TO_CART}
      />
      <p className={modalPara}>{totalQuanity}</p>
    </div>
  );
};

export default HandleShow;
