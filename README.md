# Gadget Hub

**Gadget Hub** is an electronic gadgets marketplace designed to offer a seamless and immersive shopping experience for enthusiasts of electronic gadgets. By incorporating modern technologies and UI/UX enhancements, the platform allows users to browse, purchase, and review gadgets with ease and confidence.

## Live URLs

- **Frontend**: [Gadget Hub Frontend](https://electronic-gadget-hub-final.vercel.app/)
- **Backend**: [Gadget Hub Backend](https://electronic-gadgets-shop-backend.vercel.app/)


## 🚀 Demo Credentials

### Admin Login
- **Email**: admin@gmail.com
- **Password**: 123456

### User Login
- **Email**: user@gmail.com
- **Password**: 123456


## Key Features

### UI/UX Enhancements
- **Responsive Design**: Tailored to electronic gadgets enthusiasts with a focus on intuitive navigation and visually appealing components.
- **Improved User Interface**: Updated from previous versions to ensure a more engaging and user-friendly experience.

### Error Handling
- Implemented Next.js error handling features to provide informative error messages and graceful fallbacks, ensuring a robust user experience even in the event of unexpected errors.

### SEO Optimization
- Integrated static and dynamic meta tags for enhanced search engine visibility.
- Dynamic route names and product details displayed in browser tabs for improved discoverability.

### Redux Persist
- Utilized Redux Persist to maintain user cart data across sessions, ensuring a seamless shopping experience even after reloading or revisiting the platform.

### Navbar Enhancements
- Added key elements to the navigation bar including:
  - **Login/Register Button**
  - **Logout Button**
  - **Cart Icon** with a badge showing the number of unique products added.

### Pages

#### Login / Register Page
- **Register Page (`/register`)**: Allows users to create an account with essential details such as User Name, Email, and Password.
- **Login Page (`/login`)**: Enables secure user login with email and password credentials.

#### Dashboard Page
- **Admin Dashboard**:
  - **Products Table (`/dashboard/admin/products`)**: Table view of all electronic gadgets with action buttons for product management.
  - **Add Product (`/dashboard/admin/products/add-product`)**: Route for administrators to add new products.
  - **Orders Management (`/dashboard/admin/orders`)**: Manage order status transitions from Pending to Delivered.
- **User Dashboard**:
  - **My Orders (`/dashboard/my-orders`)**: View personal order history and provide ratings for delivered products.

#### Product Pages
- **Product Listing Pages (`/mobile`, `/fridge`, `/tv`, etc.)**:
  - Add products to cart with an "Add To Cart" button.
  - Cart icon in the navbar displays a badge for unique products added.
- **Product Detail Pages (`/mobile/123`, `/fridge/456`, `/tv/789`, etc.)**:
  - Add products to cart from the detail page.
  - Authorized users can provide reviews without the need to purchase or receive the product.
  - Reviews displayed below product details.

#### Checkout Page (`/checkout`)
- Displays added products with quantity and calculates total price including a delivery charge of 15 Taka.
- Provides "Cash On Delivery" as the payment option.
- "Proceed Checkout" button creates an order with a pending status, clears the cart, and displays a toast notification upon completion.

### Optional Tasks
- **Dark & Light Mode**: Implemented using the Next Themes package.
- **Server Actions**: Utilized to POST reviews for products on the Product Detail Page.

## Technologies Used
- **Next.js**: For server-side rendering and static site generation.
- **Redux**: State management for user and cart data.
- **Redux Persist**: To persist cart data across sessions.
- **NextUI**: For UI components.
- **Sonner**: For toast notifications.
- **Next Themes** (Optional): For implementing dark and light modes.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/NurMuhammadCSE/Electronic-Gadgets-Shop-Frontend.git
    ```
2. Navigate to the project directory:
    ```bash
    cd gadget-hub
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm run dev
    ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or fix.
3. Make your changes and ensure tests pass.
4. Submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
