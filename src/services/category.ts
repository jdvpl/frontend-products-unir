import makeRequest from "./makeRequest";


export const categoryService = async (
    token:string,
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('category/admin/save', {},"POST",token);