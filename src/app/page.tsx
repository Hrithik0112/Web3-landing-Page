import Header from "@/components/Header";
import AboutUs from "@/sections/AboutUs";
import Hero from "@/sections/Hero";
import Popularity from "@/sections/Popularity";
export default function Home() {
  return (
    <div className="max-w-6xl xl:px-0 px-4 flex-col items-center mx-auto pb-8 md:space-y-32 space-y-12">

      <Header/>
      <Hero/>
      <Popularity/>
      <AboutUs/>
    </div>
  );
}
