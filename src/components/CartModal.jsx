import React, { useState } from "react";


function CartModal({ closeCart, cartItems, removeFromCart, totalPrice }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center ">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 shadow-xl flex-col flex justify-center items-center ">
        <div className=" flex w-full justify-center items-center border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-gray-700">Your Cart</h2>
          </div>
          

        <div className="p-6 max-h-96 overflow-y-auto">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b py-4"
              >
                <div>{index + 1}</div>
                <div>
                  <img src={item.image} alt={item.title} className="w-20   " />
                </div>
                <div className="text-gray-700 w-1/5">{item.title}</div>
              
                <div className="text-gray-700"> $ {item.price } </div>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-300 py-10"> Your Cart is Empty</p>
          )}
        </div>
        <div className="text-gray-700 font-bold mb-2 flex justify-evenly items-center gap-x-40">
          {" "}
          Total Price:$ {totalPrice.toFixed(2)}
          <button  onClick={closeCart} className="  bg-gray-400 px-4 py-2 rounded-lg font-bold hover:bg-gray-500">
          Close
        </button>
        </div>

        
      </div>
    </div>
  );
}

export default CartModal;