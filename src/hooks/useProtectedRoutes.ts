'use client'

import { SessionStorageKeys } from "@/session"
import { useSessionStorage } from "./useSessionStorage"
import { useRouter } from "next/navigation"
import { routes } from "@/routes"

const useProtectedRoutes=()=>{
    const [token]=useSessionStorage<any>(SessionStorageKeys.login.key,"")
    const router=useRouter()
    if(!token){
        router.push(routes.login)
    }
    if(token){
        router.push(routes.products)
    }
}
export default useProtectedRoutes;