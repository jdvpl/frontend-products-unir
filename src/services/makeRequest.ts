import { clientAxios } from "@/config/AxiosProduct";

export interface RequestResponse<T> {
    response: T;
    error: boolean;
  }
  
  const makeRequest = async <T>(
    endpoint: string,
    body: any
  ): Promise<RequestResponse<T>> => {
    try {
      const { data: response } = await clientAxios.post(endpoint, {
        ...body,
      });
      console.log(response)
      return {
        response: response as T,
        error: false,
      };
    } catch (e: any) {
      return { error: true, response: e as T };
    }
  };
  
  export default makeRequest;