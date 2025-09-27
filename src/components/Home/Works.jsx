const Works = () => {
    const steps = [
        {
            number: "01",
            title: "Evaluate Property",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            number: "02",
            title: "Meet Your Agent",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            number: "03",
            title: "Close the Deal",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        },
        {
            number: "04",
            title: "Have Your Property",
            description: "A small river named Duden flows by their place and supplies it with the necessary regelialia."
        }
    ];

    return (
        <section className="py-20 bg-gray-900 relative overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: 'url("/images/bg-3.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Content */}
                    <div className="text-white">
                        {/* Section Header */}
                        <div className="mb-12">
                            <p className="text-pink-500 text-sm font-medium tracking-wider uppercase mb-4">
                                WORK FLOW
                            </p>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                How it works
                            </h2>
                        </div>

                        {/* Steps Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {steps.map((step, index) => (
                                <div key={index} className="text-center">
                                    {/* Step Number */}
                                    <div className="flex justify-center mb-4">
                                        <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center">
                                            <span className="text-white font-bold text-lg">
                                                {step.number}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Step Content */}
                                    <h3 className="text-xl font-bold mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img
                                src="/images/bg-3.png"
                                alt="Modern living room interior"
                                className="w-full h-auto rounded-2xl shadow-2xl"
                            />
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-500 rounded-full opacity-20"></div>
                        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-30"></div>
                    </div>

                </div>
            </div>

            {/* Additional Background Pattern */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-40"></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-pink-400 rounded-full opacity-30"></div>
                <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-pink-300 rounded-full opacity-50"></div>
            </div>
        </section>
    );
};

export default Works;