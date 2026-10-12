import React from "react";

const AICarousel = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description:
        "Leverage AI-powered predictive analytics to forecast trends, optimize operations, and make data-driven decisions. Stay ahead by identifying patterns and predicting outcomes.",
        image:"/Images/ai1.webp",
    },
    {
      title: "Natural Language Processing (NLP)",
      description:
        "Automate text and speech-based tasks with NLP. Enhance customer engagement through chatbots, sentiment analysis, and smart text recognition systems.",
        image:"/Images/ai2.webp",
    },
    {
      title: "Intelligent Automation",
      description:
        "Automate repetitive and time-consuming processes with AI-driven solutions. Boost efficiency and reduce costs while ensuring high accuracy and productivity.",
        image:"/Images/ai3.webp",
    },
    {
      title: "Computer Vision",
      description:
        "Unlock the potential of image and video data with AI-powered computer vision. From facial recognition to object detection, we deliver robust and scalable solutions.",
      image:"/Images/ai4.webp",
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
    </div>
  );
};

export default AICarousel;
