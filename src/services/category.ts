import makeRequest from "./makeRequest";


export const categoryService = async (
    token:string,
    body:any,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('category/admin/save', body,"POST",token);