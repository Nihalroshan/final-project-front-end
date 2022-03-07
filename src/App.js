import "./App.css";
import AdminLayout from "./Layouts/AdminLayout";
import ProductPage from "./pages/admin/ProductPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/admin/DashboardPage";
import CategoriesPage from "./pages/admin/CategoriesPage";
import UserLayout from "./Layouts/UserLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="categories" element={<CategoriesPage />} />
        </Route>
        <Route path="/" element={<UserLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
