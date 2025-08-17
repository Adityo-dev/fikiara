"use client";

import { useState } from "react";

export default function MyCart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "React Mastery Course",
      type: "Course",
      price: 1200,
      qty: 1,
      img: "/images/course.jpg",
    },
    {
      id: 2,
      title: "JavaScript for Beginners",
      type: "Book",
      price: 800,
      qty: 2,
      img: "/images/book.jpg",
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
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />

                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <span className="text-sm text-blue-500">{item.type}</span>
                  <p className="text-gray-700 font-medium">৳ {item.price}</p>

                  <div className="flex items-center mt-2">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-l"
                      onClick={() => updateQty(item.id, item.qty - 1)}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{item.qty}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded-r"
                      onClick={() => updateQty(item.id, item.qty + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="ml-4 text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  🗑
                </button>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <p className="flex justify-between text-gray-700">
              <span>Subtotal:</span>
              <span>৳ {subtotal}</span>
            </p>
            <p className="flex justify-between text-gray-700">
              <span>Shipping:</span>
              <span className="text-green-500">Free</span>
            </p>
            <hr className="my-4" />
            <h3 className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span>৳ {subtotal}</span>
            </h3>
            <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
