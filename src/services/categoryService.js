import BackendService from "./BackendService";

const getCategories = async () => {
  return BackendService.get("categories");
};

const createCategory = async (category) => {
  return BackendService.post("categories", category);
};

const deleteCategory = async (id) => {
  return BackendService.destroy(`categories/${id}`);
};

const categoryService = {
  getCategories,
  createCategory,
  deleteCategory
};

export default categoryService;
