import React, { useState } from "react";

const InteractiveSection = () => {
  const [activeImage, setActiveImage] = useState("augmented");

  const images = {
    
    augmented: "/Images/ar.jpg", // Replace with the actual path to Augmented Reality image
    virtual: "/Images/vr.jpg", // Replace with the actual path to Virtual Reality image
    mixed: "/Images/mr.jpg", // Replace with the actual path to Mixed Reality image
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-6 px-5 py-10">
      {/* Image Section */}
      <div className="sm:w-1/2 w-full flex justify-center items-center">
        <img
          src={images[activeImage]}
          alt={`${activeImage} preview`}
          className="rounded-lg shadow-lg max-w-full sm:max-w-md"
        />
      </div>

      {/* Text Section */}
      <div className="sm:w-1/2 w-full">
        <div
          className={`p-4 rounded-lg cursor-pointer hover:bg-blue-50 transition ${
            activeImage === "augmented" ? "bg-blue-50" : ""
          }`}
          onClick={() => setActiveImage("augmented")}
        >
          <h3 className="text-lg font-semibold text-blue-600">
            1. Augmented Reality
          </h3>
          <p className="text-gray-600">
            AR overlays digital info onto the real world, enabling interactive
            marketing, product demos, employee training, remote assistance, and
            many more opportunities for your businesses.
          </p>
        </div>

        <div
          className={`p-4 rounded-lg cursor-pointer hover:bg-blue-50 transition ${
            activeImage === "virtual" ? "bg-blue-50" : ""
          }`}
          onClick={() => setActiveImage("virtual")}
        >
          <h3 className="text-lg font-semibold text-blue-600">
            2. Virtual Reality & Metaverse
          </h3>
          <p className="text-gray-600">
            VR is an immersive technology that enables businesses to enhance
            training, demonstrate products, and create engaging customer
            experiences to drive growth.
          </p>
        </div>

        <div
          className={`p-4 rounded-lg cursor-pointer hover:bg-blue-50 transition ${
            activeImage === "mixed" ? "bg-blue-50" : ""
          }`}
          onClick={() => setActiveImage("mixed")}
        >
          <h3 className="text-lg font-semibold text-blue-600">3. Mixed Reality</h3>
          <p className="text-gray-600">
            Leverage Mixed Reality (MR) to elevate your business with innovative
            product presentations, virtual collaboration, and heightened
            customer engagement for remarkable growth and brand loyalty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveSection;
