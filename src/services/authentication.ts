import { LoginInterface } from "@/interface/Authentication";
import makeRequest from "./makeRequest";


export const loginService = async (
    body: LoginInterface
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('auth/login', body, 'POST');
export const registerService = async (
    body: LoginInterface
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('auth/register', body, 'POST');