import React from "react";
import {
  decrementOperator,
  incrementOperator,
} from "../../Styles/Modal/operators";
import { Cart } from "../../types";
export interface OperationsInterface {
  item: Cart;
  handleAddToCarts: (item: Cart, operation: string) => void;
}
const Operations: React.FC<OperationsInterface> = (props) => {
  return (
    <div className="flex">
      <span
        className={decrementOperator}
        onClick={() => props.handleAddToCarts(props.item, "decrement")}
      >
        -
      </span>
      <span className="px-2 py-2">{props.item?.qty}</span>
      <span
        className={incrementOperator}
        onClick={() => props.handleAddToCarts(props.item, "increment")}
      >
        +
      </span>
    </div>
  );
};

export default Operations;
