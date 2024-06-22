'use client'
import BannerHome from "@/components/BannerHome/BannerHome";
import Header from "@/components/Header/header";
import useProtectedRoutes from "@/hooks/useProtectedRoutes";

export default function Home() {
  useProtectedRoutes()
  return (
    <main >
      <Header/>
      <BannerHome/>
    </main>
  );
}
