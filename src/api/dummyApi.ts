import { Axios } from "axios";
import ApiService from "./apiBase";

class DummyApi extends ApiService {
  // eslint-disable-next-line no-useless-constructor
  constructor(baseUrl: string, axiosInstance: Axios) {
    super(baseUrl, axiosInstance);
  }
}

export { DummyApi };
