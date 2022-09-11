import React, { useState } from "react";
import { useAppDispatch } from "../../app/store";
import {
  GET_PRODUCTS,
  update_product_data,
} from "../../reducers/products/productsSlice";
import { dropdown, mainDropdown } from "../../Styles/Navbar/dropdown";
import GetAlllProduct from "./GetAlllProduct";
const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const dispatch = useAppDispatch();

  const GettingAlllProducts = () => {
    setShow(false);
    setSelectedFilter("");
    dispatch(GET_PRODUCTS());
  };

  const handleSearch = (value: any) => {
    dispatch(update_product_data({ value }));
    if (value) {
      setSelectedFilter(value);
      setShow(true);
    }
  };

  return (
    <div className="flex justify-center">
      <div className={mainDropdown}>
        <select
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            handleSearch(e.target.value)
          }
          className={dropdown}
          aria-label="Default select example"
        >
          <option selected className="hidden">
            Search by Colour
          </option>
          <option selected={selectedFilter == "Black" && true}>Black</option>
          <option selected={selectedFilter == "Red" && true}>Red</option>
          <option selected={selectedFilter == "Stone" && true}>Stone</option>
        </select>

        <div className="pt-1.5 pr-2">
          {show ? (
            <GetAlllProduct GettingAllProducts={GettingAlllProducts} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
