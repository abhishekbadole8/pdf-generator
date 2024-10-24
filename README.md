# Invoice Generator

This is a simple invoice generator application built with **React**, **Redux**, and **React Router**. It includes user authentication for accessing protected routes, such as adding a product.

## Features

- **Login and Register**: Users can sign in or create a new account.
- **Protected Routes**: Only authenticated users can access certain pages, such as the page to add products.
- **Navigation**: Uses `react-router-dom` to manage page routing and redirects based on the authentication status.
- **Redux State Management**: The application uses Redux to store and manage user authentication state.


## Technologies Used

- **React**: For building the user interface.
- **Redux**: For managing the global state, particularly for authentication.
- **React Router**: For handling routing in the application.
- **TypeScript**: For adding static typing to the application.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **npm**: Package manager for installing dependencies.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/product-management-app.git
   cd product-management-app


2. Install dependencies:

  ```bash
    npm install
    Start the development server:

3. Start the development server:

  ```bash
    npm start


## Redux Store

The Redux store manages the authentication state. The RootState is used in useSelector to access the authToken for checking if the user is logged in or not.

## Protected Routes

The ProtectedRoute component is used to restrict access to certain routes. If a user is not authenticated, they will be redirected to the login page.


## Available Scripts

  npm start: Starts the development server.
  npm run build: Builds the app for production.
