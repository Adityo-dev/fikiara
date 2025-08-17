"use client";
import { useState } from "react";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "React Mastery Course",
      type: "Course",
      price: 1200,
      qty: 1,
      img: "/design1.png",
    },
    {
      id: 2,
      title: "JavaScript for Beginners",
      type: "Book",
      price: 800,
      qty: 2,
      img: "/product-1.jpg",
    },
    {
      id: 3,
      title: "C# for Beginners",
      type: "Book",
      price: 800,
      qty: 2,
      img: "/product-2.jpg",
    },
  ]);

  const updateQty = (id, newQty) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, qty: newQty > 0 ? newQty : 1 } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <section className="bg-[#F5F1EA]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <CartItems
            items={cartItems}
            updateQty={updateQty}
            removeItem={removeItem}
          />

          {/* Cart Summary */}
          <CartSummary subtotal={subtotal} removeItem={removeItem} />
        </div>
      </div>
    </section>
  );
}
