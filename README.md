# ReactJS Fake Store API Shopping Cart

This is a simple **ReactJS application** that fetches product data from the [Fake Store API](https://fakestoreapi.com) and allows users to add products to their cart using a modal interface.

---

## 📋 Features

- **Fetch Products**: Retrieves product data (title, price, description, and image) from the Fake Store API.
- **Add to Cart**: Lets users add products to their cart via a modal popup.
- **Cart Management**:
  - View all added items in the cart.
  - Adjust the quantity of items in the cart.
  - Calculate and display the total price dynamically.

---

## 🛠️ How It Works

### Fetching Products

     -Data is fetched from the Fake Store API using the useEffect hook and stored in state.


### Adding to Cart

    -When a user clicks “Add to Cart” product is added to the cart

### Cart Management
    -The cart state dynamically updates as products are added.
	-The total price is recalculated whenever changes occur.

