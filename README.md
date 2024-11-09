# Shobee

Welcome to **Shobee**, a sample e-commerce site designed to showcase essential features for an online shopping experience. This project is built to demonstrate my skills in frontend development, e-commerce structure, and API integration. 

### 🌐 Live Demo
[Shobee Demo Link](#)

## 🛒 Project Overview

Shobbee is a user-friendly e-commerce platform that allows users to browse through various products, add items to their cart, and simulate the online shopping process. This project leverages a third-party API for product data, providing a realistic context for product listings, categories, and cart management. Please note that the API data may change or be temporarily unavailable, which could affect the functionality of certain features.

## 📋 Features

- **Product Browsing**: View a range of products with details like title, description, price, and category.
- **Shopping Cart**: Add, remove, and view products in a cart with real-time updates.
- **Responsive Design**: Fully optimized for desktop and mobile viewing.
- **API Integration**: Uses a REST API for product data, which dynamically populates the site’s content.

## 🛠️ Tech Stack

- **Frontend**: Vue.js, Vuetify (UI Library)
- **Routing**: Vue Router for seamless navigation between pages
- **State Management**: Pinia for reactive, modular state management
- **API**: [Platzi Fake API](https://fakeapi.platzi.com/en/rest/swagger/) for realistic product data

## ⚠️ Important Note

Shobbee relies on the [Platzi Fake API](https://fakeapi.platzi.com/en/rest/swagger/), an open REST API that provides sample e-commerce data. Since the API's data may be modified, it could result in unexpected behavior or errors. For example, product categories or IDs may change, which could break certain features.

## 🚀 Getting Started

To run **Shobbee** locally, follow these steps:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed (version 14.x or later is recommended).
- **Git**: You’ll need Git to clone the repository.

### Installation and Running the Application

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/shobbee.git
   cd shobbee
2. **Install Dependencies**
   ```bash
   npm install
3. **Run the Application**
   ```bash
   npm run dev

4. **Open your browser and go to http://localhost:3000 to see the app in action.**

### Usage

Once you’re on the homepage, you can:
- Browse and search for products.
- View product details by clicking on each item.
- Add products to your shopping cart and view the cart for a summary of your selected items.

## 📚 API Reference

Shobbee uses the **[Platzi Fake API](https://fakeapi.platzi.com/en/rest/swagger/)** for product data. Endpoints include:
- **Products**: `/products`
- **Categories**: `/categories`

Visit the [API documentation](https://fakeapi.platzi.com/en/rest/swagger/) for more details on how the data is structured.

### 🙏 Acknowledgments

This project is inspired by the need for a hands-on demonstration of e-commerce functionalities in frontend development. Special thanks to Platzi for their free API service, which made this project possible.

