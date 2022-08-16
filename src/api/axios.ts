import axios from "axios";

const Axios = axios.create();

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    // eslint-disable-next-line no-console
    console.log(error);
    return Promise.reject(error);
  },
);

export { Axios };
