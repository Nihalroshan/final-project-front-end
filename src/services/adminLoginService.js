import BackendService from "./BackendService";

const loginAdmin = async (user) => {
  return BackendService.post("auth/login", user);
};

const adminLoginService = {
  loginAdmin,
};

export default adminLoginService;
