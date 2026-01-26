import Header from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import CarreirasPage from "@/components/sections/page";

export default function Home() {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <CarreirasPage />   
      <Footer />
     
    </div>
  );
}
