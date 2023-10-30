import { APIClient } from '../helpers/api_helper';

const baseUrl = 'api/auth';
const api = new APIClient();

export const Login = (data) => { 
  return api.create(baseUrl + '/login', data, null).then((res) => {
    return res;
  });
};
export const LogoutApi = () => api.get(baseUrl + '/logout', null);
export const Register = (data) => api.create(baseUrl + '/register', data, null);
export const Logout = () => {
  LogoutApi();
};
