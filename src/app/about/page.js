import Hero from "@/components/common/Hero";
import People from "@/components/Home/People";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <div>
    <Hero  title="About Us" subtitle=""  />
    <People/>

</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a leading real estate company dedicated to helping you find your dream home. 
            With years of experience and a team of expert agents, we make property buying and 
            selling simple and stress-free.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-pink-500 mb-4">10+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Experience</h3>
            <p className="text-gray-600">Serving clients with excellence</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-pink-500 mb-4">1000+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Properties Sold</h3>
            <p className="text-gray-600">Successful transactions completed</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl font-bold text-pink-500 mb-4">500+</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Happy Clients</h3>
            <p className="text-gray-600">Satisfied customers nationwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;