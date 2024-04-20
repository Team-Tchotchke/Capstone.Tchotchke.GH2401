import { useState } from "react";
import { useEffect } from "react";
import RemoveItemFromCart from "./RemoveItemFromCart";
import Stripe from "./Stripe";

export default function Cart({ auth, products }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function getUserProducts() {
      const baseUrl = "/tchotchke";
      try {
        const cartAuth = !auth.id ? JSON.parse(auth) : auth;

        const response = await fetch(`${baseUrl}/orders/${cartAuth.id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch products.");
        }
        const ordersAndProducts = await response.json();
        setCartItems(ordersAndProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    if (cartItems.length <= 0) {
      getUserProducts();
    }
  }, [cartItems]);

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.products.price,
    0
  );

  return (
    <>
      <h3 className="text-center mt-5">Your Cart</h3> <br />
      <div className="container cart-container py-5 px-3 d-flex justify-content-center">
        <div className="col-4">
          <div className="cart-card">
            {cartItems.length === 0 ? (
              <p className="col"> Your cart is empty. </p>
            ) : (
              cartItems.map(({ id, products }) => {
                return (
                  <div key={id} className="col">
                    <img
                      className="card-img-top img-fluid product-image rounded border"
                      style={{ objectFit: "cover" }}
                      src={products.imgURL}
                      alt={products.name}
                    ></img>
                    <h5>{products.name}</h5>
                    <h5>${products.price}</h5>
                    <RemoveItemFromCart
                      orderId={id}
                      setCartItem={setCartItems}
                      cartItems={cartItems}
                    />
                  </div>
                );
              })
            )}
          </div>{" "}
          <br />
          <div className="price-total">
            <h4>Cart Total: ${cartTotal}</h4>
            <button className="StripeCheckout">
              <Stripe />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
