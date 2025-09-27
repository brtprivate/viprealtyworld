import Image from "next/image";

const Agents = () => {
  const agents = [
    {
      id: 1,
      name: "James Stallon",
      image: "/images/agents/agent-1.png",
      listings: "10 Properties",
    },
    {
      id: 2,
      name: "James Stallon",
      image: "/images/agents/agent-2.png",
      listings: "10 Properties",
    },
    {
      id: 3,
      name: "James Stallon",
      image: "/images/agents/agent-3.png",
      listings: "10 Properties",
    },
    {
      id: 4,
      name: "James Stallon",
      image: "/images/agents/agent-4.png",
      listings: "10 Properties",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-2">
            Agents
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our Agents
          </h2>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden group"
            >
              {/* Agent Image */}
              <div className="relative w-full h-80">
                <Image
                  src={agent.image}
                  alt={agent.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Agent Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">
                  {agent.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Listing — <span className="text-gray-900 font-medium">{agent.listings}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Agents;
