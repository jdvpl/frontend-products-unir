import makeRequest from "./makeRequest";


export const productService = async (
    token:string,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('products', {},"GET",token);
