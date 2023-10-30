import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL + '/',
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log(process.env.NEXT_PUBLIC_API_URL);
api.defaults.headers.post['Content-Type'] = 'application/json';

api.interceptors.request.use(function (req) {
  req.withCredentials = true;
  return req;
});

class APIClient {
  get = (url, params: any) => {
    let response;
    let paramKeys: any = [];
    if (params) {
      Object.keys(params).map((key: any) => {
        const param = key + '=' + params[key];
        paramKeys.push(param);
        return paramKeys;
      });
      const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : '';
      response = api.get(`${url}?${queryString}`, params);
    } else {
      response = api.get(`${url}`, params);
    }
    return response;
  };

  create = (url, data, config) => {
    return api.post(url, data, config);
  };

  delete = (url, id) => {
    return api.delete(url + '/' + id);
  };
}

export { APIClient };
