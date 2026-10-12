import React from "react";

const AnimationSection = () => {
  const features = [
    {
      title: "2D and 3D Animation",
      description:
        "Create visually stunning 2D and 3D animations that bring characters, products, and ideas to life. Engage your audience with dynamic and high-quality visuals.",
        image:"/Images/animation1.webp",
    },
    {
      title: "Motion Graphics",
      description:
        "Enhance your marketing and storytelling efforts with motion graphics. Deliver complex ideas with engaging visuals that resonate with your audience.",
        image:"/Images/animation2.webp",
    },
    {
      title: "Visual Effects (VFX)",
      description:
        "Add breathtaking visual effects to your videos, films, and commercials. From realistic explosions to futuristic scenes, we make your vision a reality.",
        image:"/Images/animation3.webp",
    },
    {
      title: "Explainer Videos",
      description:
        "Simplify complex concepts with engaging explainer videos. Communicate your message effectively with animations tailored to your brand and goals.",
      image:"/Images/animation4.avif",
    },
  ];

  return (
    <div className="py-12">
      {/* Features Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f5f7fa] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            {/* Feature Image */}
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-48 rounded-md object-cover mb-4"
            />
            {/* Feature Title */}
            <h2 className="text-xl sm:text-2xl font-semibold text-blue-700 mb-2">
              {feature.title}
            </h2>
            {/* Feature Description */}
            <p className="text-black text-sm sm:text-base">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>  );
};

export default AnimationSection;
