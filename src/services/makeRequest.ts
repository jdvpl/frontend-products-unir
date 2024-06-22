import { clientAxios } from "@/config/AxiosProduct";
import { Method } from "axios";

export interface RequestResponse<T> {
    response: T;
    error: boolean;
  }
  
  const makeRequest = async <T>(
    endpoint: string,
    body: any,
    method: Method = "GET",
    token?: string
  ): Promise<RequestResponse<T>> => {
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    const config = {
      method: method,
      url: endpoint,
      headers: headers,
      data: body,
    };
    try {
      const { data: response } = await clientAxios.request(config);      return {
        response: response as T,
        error: false,
      };
    } catch (e: any) {

      return { error: true, response: e.response.data as T };
    }
  };
  
  export default makeRequest;