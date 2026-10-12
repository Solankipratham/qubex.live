import React from "react";

const CaseStudyCard = ({
  category,
  title,
  description,
  industry,
  country,
  technologies,
  buttonText,
  buttonLink,
  imageSrc,
}) => {
  return (
    <div className="flex bg-[#f5f7fa] flex-col md:flex-row  p-6 sm:p-8 rounded-lg shadow-lg max-w-6xl mx-auto space-y-8 md:space-y-0">
      {/* Left Content */}
      <div className="flex-1 md:pr-8">
        {/* Category */}
        <h4 className="text-sm uppercase text-black font-semibold mb-1">{category}</h4>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{title}</h1>

        {/* Description */}
        <p className="text-black mb-4">{description}</p>

        {/* Industry & Country */}
        <div className="flex flex-wrap gap-y-2 justify-between text-black mb-4">
          <p>
            <strong>Industry:</strong>{" "}
            <span className="ml-1 px-1 py-1 rounded-full">
              {industry}
            </span>
          </p>
          <p>
            <strong>Country:</strong>{" "}
            <span className="ml-1 px-2 py-1 rounded-full">
              {country}
            </span>
          </p>
        </div>

        {/* Core Technologies */}
        <div className="">
          <h3 className="font-semibold text-black">Core Technologies:</h3>
          <div className="flex gap-4 mt-2">
            {technologies.map((tech, index) => (
              <div
                className="flex flex-col items-center py-2 rounded-md "
                key={index}
              >
                <p className="text-2xl text-black bg-[#bec3c9] p-1 rounded-full">{tech.icon}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <a href={buttonLink} target="_blank" rel="noopener noreferrer">
          <button className="hover:bg-[#272727]  bg-[#171717] max-w-fit text-white px-6 py-3 rounded-full mt-4  transition w-full sm:w-auto">
            {buttonText} &rarr;
          </button>
        </a>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center items-center">
        <img
          src={imageSrc}
          alt="Case Study"
          className="w-full max-w-xs sm:max-w-sm rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default CaseStudyCard;
  