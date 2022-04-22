import BackendService from "./BackendService";

const createOrder = async (data) => {
  return BackendService.post("orders", data);
};

const getOrders = async () => {
  return BackendService.get("orders");
};
const orderService = {
  createOrder,
  getOrders,
};

export default orderService;
