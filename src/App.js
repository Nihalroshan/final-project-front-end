import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//admin
import AdminLayout from "./Layouts/AdminLayout";
import ProductsPage from "./pages/admin/ProductsPage";
import DashboardPage from "./pages/admin/DashboardPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import ProductPage from "./pages/admin/ProductPage";
import OrderPage from "./pages/admin/OrderPage";
import LoginPage from "./pages/admin/LoginPage";
//client
import UserLayout from "./Layouts/UserLayout";
import ClientProductPage from "./pages/client/ProductsPage";
import ClientCategoriesPage from "./pages/client/CategoriesPage";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import SingleItemPage from "./pages/client/SingleItemPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6642b4",
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
            <Route index element={<DashboardPage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="orders" element={<OrderPage />} />
          </Route>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<ClientProductPage />} />
            <Route path="/categories" element={<ClientCategoriesPage />} />
          </Route>
          <Route path="/item" element={<SingleItemPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
