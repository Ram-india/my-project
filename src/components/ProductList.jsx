import React, { useEffect, useState } from 'react'

function ProductList({cartItems, setCartItems,totalPrice,setTotalPrice}) {
    const [products, setProducts]= useState([]);
  
   
    useEffect (() => {
        fetch ('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then (data => setProducts(data))

    }, []);
   
    const addToCart = (product) => {
      if(cartItems.find((item) => item.id === product.id)){
        alert("Product already exist in cart")
      }
        else{

            setCartItems([...cartItems, product]);
            console.log(product.price);
            setTotalPrice(totalPrice + product.price);
        }

    }
     // Function to generate star rating
     const renderStars = (rating) => {
      const fullStars = Math.floor(rating); // Full stars
      const halfStar = rating % 1 !== 0; // Half star condition
      const emptyStars = 5 - Math.ceil(rating); // Remaining stars

      return (
          <>
              {"★".repeat(fullStars)}
              {halfStar && "☆"}
              {"☆".repeat(emptyStars)}
          </>
      );
  };
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 gap-2 p-4'>
        {products.map((product) => (
                <div key={product.id} className='border border-gray-100 p-4 rounded-md shadow bg-white flex-col justify-center items-center  '>
                    <img src={product.image} alt={product.title} className='h-40 mx-auto mb-3 p-2 md:h-25 ' />
                    <h2 className='text-sm text-center font-semibold text-gray-600 min-h-20 mb-2'>{product.title}</h2>
                    <div className='text-blue-400 text-center font-thin'>{renderStars(product.rating.rate)} <span className='text-blue-600 font-'> { product.rating.rate}</span> </div>
                    <p className='text-black font-black text-center mb-2'>$ {product.price} </p>
                    <div className='flex justify-center items-center '>
                        <button onClick = {() => addToCart(product)} className='bg-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-500 '>Add to Cart</button>
                    </div>
                </div>
            )) }
      
    </div>
    
  )
}

export default ProductList