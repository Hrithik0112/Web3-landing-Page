import Header from "@/components/Header";
import AboutUs from "@/sections/AboutUs";
import Collection from "@/sections/Collection";
import FAQ from "@/sections/FAQ";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Popularity from "@/sections/Popularity";
import Promotion from "@/sections/Promotion";
export default function Home() {
  return (
    <div className="max-w-6xl xl:px-0 px-4 flex-col items-center mx-auto pb-8 md:space-y-32 space-y-12 overflow-x-clip">

      <Header/>
      <Hero/>
      <Popularity/>
      <AboutUs/>
      <Features/>
      <Collection/>
      <FAQ/>
      <Promotion/>
      <Footer/>
    </div>
  );
}
