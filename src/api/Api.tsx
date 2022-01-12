import axios from 'axios';

const API = axios.create();
API.defaults.baseURL = process.env.REACT_APP_API_URL;
API.defaults.headers.common['Content-Type'] = 'application/json';

interface HttpOptions<T> {
  method: 'get' | 'post' | 'put' | 'delete' | 'patch';
  url: string;
  body?: T;

  headers?: {
    [key: string]: string;
  };
  query?: {
    [key: string]: string | number | boolean | undefined | null;
  };
}

class Api {
  http = <T,>(options: HttpOptions<any>): Promise<T> => {
    const { url, method, body, headers, query } = options;

    return new Promise((resolve, reject) => {
      API.request<T>({
        url,
        method,
        data: body,
        headers,
        params: query,
      })
      .then((res) => resolve(this.handleResponse(res.data)))
      .catch((error) => reject(this.handleResponse(error)));
    });
  }

  handleResponse = async (res: any) => {
    return res;
  }
}

export default new Api();
