import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../app/store";
import Loader from "../../modules/Partials/Loader/Loader";
import { addToCart } from "../../reducers/cart/cartSlice";

import { GET_PRODUCTS } from "../../reducers/products/productsSlice";
import { home, productImg } from "../../Styles/Home/home";
import { Product } from "../../types";
import ProductsSubDetail from "./ProductsSubDetail";
const HomeProductsDetail = () => {
  const dispatch = useAppDispatch();

  const { loading, product } = useSelector((state: RootState) => state.product);
  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, []);
  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };
  return (
    <>
      {!loading ? (
        product &&
        product.map((item: Product) => (
          <div className="lg:w-1/3 md:w-1/3 py-4 justify-center" key={item?.id}>
            <div className={home}>
              <img className={productImg} src={item?.img} alt="product image" />
              <ProductsSubDetail
                item={item}
                handleAddToCart={handleAddToCart}
              />
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </>
  );
};

export default HomeProductsDetail;
