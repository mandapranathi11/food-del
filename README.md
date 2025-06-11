# Food Ordering Web Application

A full-stack food ordering web application built with **React.js**, **Node.js**, **Express**, **MongoDB**, and **Stripe**. The app allows users to browse a menu, add food items to a cart, place orders, and pay online. An admin panel is included for managing food items and tracking orders.

---

## Tech Stack

- **Frontend**: React.js, CSS, Context API
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Stripe

---

## Features

### Customer Features

- User authentication (Sign up / Log in)
- Add items to cart
- Stripe payment integration
- Place order

### Admin Features

-  Manage food items (add/edit/delete)
-  View current orders
-  View fulfilled orders
-  Update order status

---

##  Getting Started (For Local Setup)

###  Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Stripe account (for test keys)

---

##  Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/food-ordering-app.git
cd food-ordering-app
```

#### 2. Frontend Setup

- Open a terminal and navigate to the frontend folder  
`cd frontend`  
- Install dependencies using `npm install`  
- Start the development server with `npm run dev`  

#### 3. Backend Setup

- Open another terminal and navigate to the backend folder  
`cd backend`  
- Install dependencies using `npm install`  
- Create a `.env` file inside the backend folder with the following variables:  
   - MONGODB_URL = your MongoDB Atlas connection string  
   - JWT_SECRET = your JWT secret key  
   - STRIPE_SECRET_KEY = your Stripe secret key  
- Start the backend server with `npm run server`
  
---


## Usage  

**Customer Flow**  
- Sign Up / Log In: Create an account or log in with your credentials.  
- Browse Menu: Explore the menu and view item details.  
- Add to Cart: Add desired items to your cart.  
- Place Order: Review your cart and place the order using Stripe.

**Admin Flow**  
- Log In: Log in with admin credentials.  
- Manage Items: Add, edit, or delete food items and update availability.  
- Current Orders: View and manage active orders.  
- Fulfilled Orders: View the history of completed orders.

---

## Contributing  

Contributions are welcome! Please follow these steps to contribute:

- Fork the repository.  
- Create a new branch using `git checkout -b feature-branch`  
- Make your changes and commit them using `git commit -m 'Add some feature'`  
- Push to the branch using `git push origin feature-branch`  
- Create a new Pull Request  

---


## Acknowledgements

- Thanks to Stripe for providing the secure payment infrastructure.  
- Thanks to MongoDB Atlas for free database hosting.  
- Special thanks to the open-source community and tutorial creators for resources and inspiration.


