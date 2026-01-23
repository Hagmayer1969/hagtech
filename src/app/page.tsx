import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";

export default function Home() {
  return (
    <div className="bg-black min-h-screen"> 
     <Header />
     <main>
        <Hero />
     </main>
</div>
  );
}
