import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../Context Api/ShoppingCard/CartContext";
import "./CartList.scss";
import FormButton from "../forms/FormButton/FormButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CartItem from "./CartItem/CartItem";

const CartList = ({}) => {
  const navigate = useNavigate();
  const { state, actions } = useCartStore();

  useEffect(() => {
    actions.getTotal(state.cart);
  }, [state.cart]);

  const errMsg = "You have no items in your cart.";

  return (
    <div className="cart-list">
      {state.cart.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }}>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align="center">Description</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="center">Price</TableCell>
                <TableCell align="right">Remove</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {state.cart.map((item) => (
                <CartItem {...item} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <p>{errMsg}</p>
      )}
      <h3>Total: {state.totalPrice} €</h3>
      <div className="button-group">
        <FormButton onClick={() => navigate("/search")}>
          Continue Shopping
        </FormButton>
        <FormButton onClick={() => navigate("/")}>Complete Order</FormButton>
      </div>
    </div>
  );
};

export default CartList;
