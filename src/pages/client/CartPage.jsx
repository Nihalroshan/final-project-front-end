import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import CartCard from "../../components/client/CartCard";
import PriceCard from "../../components/client/PriceCard";
import clientService from "../../services/clientService";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const clientId = localStorage.getItem("clientId");

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await clientService.getCart(clientId);
        console.log(response.cart);
        setCart(response.cart);
      } catch (err) {}
    };
    getCart();
  }, []);

  const totalPrice = cart.reduce(
    (partialSum, item) => partialSum + parseInt(item.price),
    0
  );
  console.log(totalPrice);

  return (
    <>
      <Container>
        Cart page
        {cart &&
          cart.map((item) => {
            return <CartCard item={item} />;
          })}
      </Container>
      {cart.length !== 0 ? (
        <PriceCard totalPrice={totalPrice} cart={cart} />
      ) : (
        <Container sx={{ display: "grid", placeItems: "center",height:"80vh" }}>
          <h1>Your Cart Is Empty</h1>
        </Container>
      )}
    </>
  );
};

export default CartPage;
