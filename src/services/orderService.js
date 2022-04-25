import BackendService from "./BackendService";

const createOrder = async (data) => {
  return BackendService.post("orders", data);
};

const getOrders = async () => {
  return BackendService.get("orders");
};

const updateStatus = async (orderId, data) => {
  return BackendService.patch(`orders/${orderId}`, data);
};

const orderService = {
  createOrder,
  getOrders,
  updateStatus,
};

export default orderService;
