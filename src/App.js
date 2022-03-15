import "./App.css";
import AdminLayout from "./Layouts/AdminLayout";
import ProductsPage from "./pages/admin/ProductsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import UserLayout from "./Layouts/UserLayout";
import ProductPage from "./pages/admin/ProductPage";
import OrderPage from "./pages/admin/OrderPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="product" element={<ProductPage/>}/>
          <Route path="products" element={<ProductsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="orders" element={<OrderPage />} />
        </Route>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
