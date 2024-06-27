import makeRequest from "./makeRequest";


export const productService = async (
    token:string,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('products', {},"GET",token);
export const deleteProductService = async (
      token:string,
      id:any,
    ): Promise<{ response: any; error: boolean }> =>
      makeRequest(`products/admin/delete?id=${id}`, {},"DELETE",token);
export const createProductService = async (
      token:string,
      body:any,
    ): Promise<{ response: any; error: boolean }> =>
      makeRequest(`products/admin`, body,"POST",token);
      
export const categoryService = async (
    token:string,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('category/all', {},"GET",token);
