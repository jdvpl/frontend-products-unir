import makeRequest from "./makeRequest";


export const productService = async (
    token:string,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('products', {},"GET",token);
export const categoryService = async (
    token:string,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('category/all', {},"GET",token);
