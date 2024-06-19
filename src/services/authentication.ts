import { LoginInterface } from "@/interface/Authentication";
import makeRequest from "./makeRequest";

export const clientInfoFinancialData = async (
    body: LoginInterface
  ): Promise<{ response: any; error: boolean }> =>
    makeRequest('auth/login', body);