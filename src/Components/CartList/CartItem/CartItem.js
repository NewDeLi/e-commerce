import React from "react";
import { useCartStore } from "../../../Context Api/ShoppingCard/CartContext";
import { TableRow, TableCell } from "@mui/material";

const CartItem = (product) => {
  const { name, image, price, quantity, id } = product;

  const { actions } = useCartStore();

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        <img src={image} alt={name} width="100px" height="100px" />
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">
        <span
          className="td-action"
          onClick={() => actions.reduceCartItem(product)}
        >
          -
        </span>
        <span className="td-content">{quantity}</span>
        <span className="td-action" onClick={() => actions.addToCart(product)}>
          +
        </span>
      </TableCell>
      <TableCell align="center">{price}</TableCell>
      <TableCell align="right">
        <span className="td-action" onClick={() => actions.removeCartItem(id)}>
          Delete
        </span>
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
