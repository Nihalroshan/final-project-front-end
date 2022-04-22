import BackendService from "./BackendService";

const createClient = (data) => {
  return BackendService.post("client", data);
};

const addToCart = (data, clientId) => {
  return BackendService.post(`client/addCart/${clientId}`, data);
};

const getCart = (clientId) => {
  return BackendService.get(`client/cart/${clientId}`);
};

const clientService = {
  createClient,
  addToCart,
  getCart,
};

export default clientService;
