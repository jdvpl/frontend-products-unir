import { LoginInterface } from "@/interface/Authentication";
import makeRequest from "./makeRequest";


export const productService = async (
    body: LoginInterface
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('products', body);
