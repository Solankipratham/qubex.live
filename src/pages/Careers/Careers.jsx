import React from "react";
import {
  FaUserMd,
  FaGraduationCap,
  FaMoneyBillWave,
  FaRocket,
  FaCalendarAlt,
  FaHeart,
  FaHome,
  FaHandHoldingHeart,
} from "react-icons/fa";

function Careers() {
  // const testimonials = [
  //   {
  //     image: "/Images/mauro.png", // Replace with actual image URL
  //     name: "Mauricio Correa",
  //     position: "Chief executive officer",
  //     quote:
  //       "I enjoy working for Qubex because the work atmosphere is fantastic, like a home away from home. We all come from different ethnic backgrounds but still manage to feel like one big happy family striving for the same goal – to always deliver for our clients no matter how tall the task may be.",
  //   },
  //   {
  //     image: "/Images/Maria-Paula.png", // Replace with actual image URL
  //     name: "Maria Paula",
  //     position: "Chief Marketing Officer",
  //     quote:
  //       "Qubex is a great place for young and creative minds to apply their skills and knowledge, and let their talent prosper in a positive working environment. At Qubex, I am always treated as a professional and I am also thankful for the support I receive from all of my colleagues.",
  //   },

  //   // {
  //   //   image: "https://via.placeholder.com/100", // Replace with actual image URL
  //   //   name: "Leonardo Vega",
  //   //   position: "Chief Technology Officer",
  //   //   quote:
  //   //     "In my opinion, Qubex is an excellent company providing high value to its employees. The company motivates us to master other skills, responsibilities, and roles. My work at Qubex has allowed me to grow personally and professionally.",
  //   // },
  // ];
  return (
    <div class="">
      <div
        className="bg-cover flex items-center justify-center opacity-6 bg-center w-full h-screen z-[-10]"
        style={{
          background: `url(/Images/academytraining.jpg) no-repeat center center fixed, linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))`,
          backgroundSize: "cover", // Ensures the image covers the entire div
          backgroundAttachment: "fixed", // Keeps the image fixed
        }}
      >
        <div className="flex  text-white  px-10 flex-col">
          <h1 className=" font-bold text-4xl sm:text-5xl  w-full sm:w-2/3">
            Careers
          </h1>
        </div>
      </div>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Why Join Us */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Why Join Us?</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
              Rated amongst the fastest-growing companies, our organization is
              built on a strong vision and corporate philosophy of continuous
              adaptation, client service, and professional growth. Our team is
              always growing, and we look forward to welcoming new members.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 px-5 gap-10 mb-12">
            <div>
              <h3 className="text-lg font-semibold  border-b-2 border-black inline-block pb-2">
                Personal and Professional Growth
              </h3>
              <p className="text-gray-600 mt-2">
                We believe in growing team members to become future leaders.
                Growth comes from within, allowing each team member to take on
                new responsibilities.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold  border-b-2 border-black inline-block pb-2">
                Reach Your True Potential
              </h3>
              <p className="text-gray-600 mt-2">
                We learn from successes and failures and grow as a company. We
                foster innovation and creativity in every role.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold  border-b-2 border-black inline-block pb-2">
                Positive Corporate Culture
              </h3>
              <p className="text-gray-600 mt-2">
                We create an atmosphere of openness and passion for growth,
                welcoming new ideas and fostering innovation.
              </p>
            </div>
          </div>

          {/* Benefits */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-gray-800">
              World-Class Benefits for a World-Class Team
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
              <div className="flex flex-col items-center">
                <FaUserMd className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  100% Paid Medical Insurance
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaGraduationCap className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  Learning and Skill Development
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaMoneyBillWave className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">Retirement Planning</p>
              </div>
              <div className="flex flex-col items-center">
                <FaRocket className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  Swift Growth Opportunities
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaCalendarAlt className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  Paid Vacation & Time Off
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaHeart className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  Loyalty & Gratuity Bonuses
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaHome className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  Subsidized Housing Rent
                </p>
              </div>
              <div className="flex flex-col items-center">
                <FaHandHoldingHeart className=" text-4xl mb-4" />
                <p className="text-gray-700 font-medium">
                  Charity Participation
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-center space-x-4">
            <button className="border border-black  px-4 py-2 rounded Careers">
              US Benefits
            </button>
            <button className="border border-black  px-4 py-2 rounded Careers">
              India Benefits
            </button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800">
              Meaningful Work, Good People, Unparalleled Rewards
            </h2>
            <p className="mt-4 max-w-3xl mx-auto">
              We foster an atmosphere of mutual respect and take pride in our
              culturally diverse team of capable professionals by celebrating a
              multitude of backgrounds and cultures.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition duration-200"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic text-sm mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="font-bold text-center">{testimonial.name}</p>
                <p className="text-gray-500 text-center text-sm">
                  {testimonial.position}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
