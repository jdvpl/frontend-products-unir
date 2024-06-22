"use client";

import { SessionStorageKeys } from "@/session";
import { useSessionStorage } from "./useSessionStorage";
import { usePathname, useRouter } from "next/navigation";
import { publicRoutes, routes } from "@/routes";
import { useEffect } from "react";
import { decodeJwt } from "@/utils";

const useProtectedRoutes = () => {
  const [token] = useSessionStorage<any>(SessionStorageKeys.login.key, "");
  const router = useRouter();
  const pathname = usePathname();
   
  useEffect(() => {
    if (token && decodeJwt(token)) {
      if (publicRoutes.includes(pathname)) {
        router.push(routes.products);
      }
    } else {
      if (!publicRoutes.includes(pathname)) {
        router.push(routes.login);
      }
    }
  }, [token, pathname, router]);
};
export default useProtectedRoutes;
