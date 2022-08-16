import { Axios, AxiosPromise, AxiosRequestConfig } from "axios";

export interface IApiService {
  get<T>(endpoint: string, options?: AxiosRequestConfig): AxiosPromise<T>;
  post<T, R = undefined>(
    endpoint: string,
    payload?: R,
    options?: AxiosRequestConfig,
  ): AxiosPromise<T>;
  put<T, R>(
    endpoint: string,
    payload: R,
    options?: AxiosRequestConfig,
  ): AxiosPromise<T>;
  delete<T, R = undefined>(endpoint: string, payload?: R): AxiosPromise<T>;
}

class ApiService implements IApiService {
  private readonly baseUrl: string;

  private readonly axiosInstance: Axios;

  constructor(baseUrl: string, axiosInstance: Axios) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axiosInstance;
  }

  getBaseUrl = (): string => this.baseUrl;

  get<Response>(
    endpoint: string,
    options?: AxiosRequestConfig,
  ): AxiosPromise<Response> {
    return this.axiosInstance.get(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers: {},
    });
  }

  post<Response, Body = undefined>(
    endpoint: string,
    payload?: Body,
    options?: AxiosRequestConfig,
  ): AxiosPromise<Response> {
    return this.axiosInstance.post(`${this.baseUrl}${endpoint}`, payload, {
      ...options,
      headers: {},
    });
  }

  put<Response, Body>(
    endpoint: string,
    payload: Body,
    options?: AxiosRequestConfig,
  ): AxiosPromise<Response> {
    return this.axiosInstance.put(`${this.baseUrl}${endpoint}`, payload, {
      ...options,
      headers: {},
    });
  }

  delete<Response, Body = undefined>(
    endpoint: string,
    payload?: Body,
  ): AxiosPromise<Response> {
    return this.axiosInstance.delete(`${this.baseUrl}${endpoint}`, {
      headers: {},
      data: payload,
    });
  }
}

export default ApiService;
