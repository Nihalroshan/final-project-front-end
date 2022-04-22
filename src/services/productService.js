import BackendService from "./BackendService";

const getProducts = async () => {
  return BackendService.get("products");
};

const getProduct = async (productId) => {
  return BackendService.get(`products/${productId}`);
};

const createProduct = async (product) => {
  return BackendService.post("products", product);
};

const deleteProduct = async (id) => {
  return BackendService.destroy(`products/${id}`);
};

const productService = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
};

export default productService;
