import Hero from "@/components/common/Hero";
import Services from "@/components/Home/Services";
import Works from "@/components/Home/Works";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero title="Our Services" subtitle="" />
      <Services />
      <Works />
    </div>
  );
};

export default ServicesPage;
