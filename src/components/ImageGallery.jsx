import React from 'react';

const ImageGallery = () => {
  const images = [
    'image1.jpg', // Replace with actual image URLs or import them
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
    'image8.jpg',
    'image9.jpg',
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg shadow-lg">
          <img
            src={image}
            alt={`Gallery Image ${index + 1}`}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
