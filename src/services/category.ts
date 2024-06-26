import makeRequest from "./makeRequest";


export const categoryService = async (
    token:string,
    body:any,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('category/admin/save', body,"POST",token);
export const deletecategoryService = async (
    token:string,
    id:any,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest(`category/admin/delete?id=${id}`, {},"DELETE",token);