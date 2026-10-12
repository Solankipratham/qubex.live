import React, { useState } from "react";

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-300 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium">{faq.question}</span>
            <span
              className={`text-2xl transition-transform ${
                activeIndex === index ? "rotate-45" : "rotate-0"
              }`}
            >
              +
            </span>
          </div>
          {activeIndex === index && (
            <div className="mt-3 text-gray-600">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
