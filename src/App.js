import './App.css';
import AdminLayout from './pages/AdminLayout';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <div className="App">
     <AdminLayout>
       <ProductPage/>
     </AdminLayout>
    </div>
  );
}

export default App;
