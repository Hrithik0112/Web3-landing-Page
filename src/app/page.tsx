import Header from "@/components/Header";
import Hero from "@/sections/Hero";
export default function Home() {
  return (
    <div className="max-w-6xl xl:px-0 px-4 flex-col items-center mx-auto pb-8 md:gap-36 gap-12">

      <Header/>
      <Hero/>
    </div>
  );
}
