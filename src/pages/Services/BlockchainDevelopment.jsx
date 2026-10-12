import React, { useState } from "react";
import { Link } from "react-router-dom";
import FAQ from "../../components/FAQ";

const BlockchainServices = () => {
  const services = [
    {
      title: "Custom Blockchain Development",
      icon: "🔗",
    },
    {
      title: "NFT Development",
      icon: "🎨",
    },
    {
      title: "Secure Cryptocurrency Exchanges",
      icon: "💰",
    },
    {
      title: "Smart Contract Development",
      icon: "📜",
    },
    {
      title: "NFT Marketplace Development",
      icon: "🛒",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Blockchain Software Development Services
        </h2>
        <p className="text-gray-600 mb-6">
          Take advantage of our expertise. We specialize in accelerating
          businesses by finding spots where your business can take advantage of
          blockchain technology. Contact us for a custom solution and become our
          partner.
        </p>
        <Link to="/contact" className="text-blue-500 font-medium">
          Let’s get in touch →
        </Link>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-12 relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-56 h-56 border border-blue-300 rounded-full text-center mx-4 my-4 relative"
          >
            <div className="text-4xl mb-2">{service.icon}</div>
            <h3 className="text-lg font-medium">{service.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const BlockchainPage = () => {
  const faqs = [
    {
      question: "What is an NFT?",
      answer:
        "Non-fungible tokens (NFTs) are unique digital assets that are not interchangeable, unlike cryptocurrencies. NFTs can represent any type of digital asset, such as in-game items, crypto collectibles, or even digital artwork.",
    },
    {
      question: "What are the Dapps?",
      answer:
        "Decentralized applications or dapps are applications that run on a P2P network of computers. They are not controlled by any single entity and they don't use a central server. They usually have tokens which can be used to purchase services or give an incentive to the people who contribute their computer power. Dapps can be considered as a more general term than smart contracts because they are not limited to just financial transactions and can provide many other services like decentralized storage, messaging, social media, etc.",
    },
    {
      question: "What is DEFI?",
      answer:
        "DEFI is an open-source ecosystem for finance companies. It offers a variety of features, including trading, lending and more.",
    },
    {
      question: "Which are the prerequisites to develop a Blockchain solution?",
      answer:
        "If you're looking for more transparency, blockchain is the answer. Connect with us now to learn more.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Background Image */}
   <div
  className="relative w-full min-h-screen bg-center bg-cover flex items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url(/Images/nftbanner.jpg)`,
    backgroundAttachment: "scroll", // mobile-safe
  }}
>
  <div className="w-full px-4 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-28">
    <div className="max-w-5xl">
      <h1 className="text-white font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
        BLOCKCHAIN DEVELOPMENT SERVICES
      </h1>

      <p className="text-white/90 text-base sm:text-lg md:text-xl mt-4 max-w-3xl">
        Blockchain is a decentralized, distributed ledger technology that
        enables secure and transparent data transactions. It ensures that
        transactions are immutable and provides a trustless environment for
        all participants.
      </p>

      <Link
        to="/contact"
        className="inline-block mt-6 bg-black text-white px-6 sm:px-8 py-3 rounded-lg text-sm sm:text-base transition hover:bg-white hover:text-black"
      >
        Start Your Project →
      </Link>
    </div>
  </div>
</div>


      <div>
        <BlockchainServices />
      </div>

      {/* Recruiting & Academy Training Section */}
      <div className=" text-white">
        <section className="py-16 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <div className="md:w-1/2">
              <h2 className="text-blue-700 text-4xl font-bold mb-4">
                Custom AI Blockchain Development Services
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Our developers can combine Artificial Intelligence (AI) and
                Blockchain to more effectively secure data, establish ownership,
                optimize smart contracts, and track goods. We integrate AI
                technology into Blockchain software to develop transformative
                solutions across various industries. Our AI Blockchain solutions
                provide advanced functionality and optimal benefits.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="/Images/moviles.png"
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

      {/* Smart Contracts Section */}
      <div className="">
        <section className="py-16 px-6 text-gray-800">
          <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
            {/* Right Side: Text */}
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-4xl text-blue-700 font-bold mb-6">
                Blockchain Application Development
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We leverage third-party blockchain software solutions to develop
                protected, trusted, and scalable Blockchain Applications
                designed to support a wide range of plugins, reduce losses,
                avoid fraud, eliminate expensive intermediary fees, boost local
                & international trade, distribute sensitive information, and so
                much more in a centralized platform.
              </p>
            </div>

            {/* Left Side: Image */}
            <div className="md:w-1/2 flex justify-center px-10">
              <div className="relative w-full max-w-sm h-auto ">
                <img
                  src="/Images/nftblockchain.jpg"
                  alt="Smart Contracts"
                  className="rounded-lg shadow-lg w-full"
                />
                {/* Floating Elements */}
                <div className="absolute top-[-40px] left-[-40px] w-40 h-20 rounded-lg flex items-center justify-center">
                  <img
                    src="/Images/block.jpg" // Replace with actual floating image
                    alt="Floating Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute bottom-[-40px] right-[-40px] w-40 h-20  rounded-lg flex items-center justify-center">
                  <img
                    src="/Images/nft.jpg" // Replace with actual floating image
                    alt="Floating Icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Blockchain Development Section */}
      <div className=" text-white">
        <section className="py-16 px-6  text-white">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <div className="md:w-1/2">
              <h2 className="text-4xl text-blue-700 font-bold mb-4">
                Custom Blockchain Solutions
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                We develop Custom Blockchain Solutions and cryptocurrency
                development from scratch or by integrating customized features &
                components into existing systems for finance & banking, supply
                chain, retail & e-commerce, healthcare, and gaming markets.
              </p>
            </div>

            <div className="md:w-1/2">
              <img
                src="/Images/block.png"
                alt="Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>

      <div>
        <h2 className="text-2xl font-bold  text-center text-gray-800 mb-6">
          Frequently Asked Questions about Blockchain Development
        </h2>
        <FAQ faqs={faqs} />
      </div>
    </div>
  );
};

export default BlockchainPage;
