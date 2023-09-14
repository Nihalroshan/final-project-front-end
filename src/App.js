import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//admin
import AdminLayout from "./layouts/AdminLayout";
import ProductsPage from "./pages/admin/ProductsPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import ProductPage from "./pages/admin/ProductPage";
import LoginPage from "./pages/admin/LoginPage";
import Orders from "./components/admin/orders";
//client
import UserLayout from "./layouts/UserLayout";
import ClientProductPage from "./pages/client/ProductsPage";
import ClientCategoriesPage from "./pages/client/CategoriesPage";
import SingleItemPage from "./pages/client/SingleItemPage";
import ClientName from "./pages/client/ClientName";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CartPage from "./pages/client/CartPage";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6642b4",
    },
    secondary: {
      main: "#2e3238",
    },
    white: {
      main: "#fff",
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="/" element={<ClientName />} />
          <Route path="/" element={<UserLayout />}>
            <Route path="/products" element={<ClientProductPage />} />
            <Route path="/products/:productId" element={<SingleItemPage />} />
            <Route path="/categories" element={<ClientCategoriesPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
          <Route path="/item" element={<SingleItemPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
