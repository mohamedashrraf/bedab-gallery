import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Lightbox from './components/Lightbox/Lightbox';
import './App.css'; 

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { id: 1, url: `${process.env.PUBLIC_URL}/images/image1.jpg`, alt: 'Bird 1' },
    { id: 2, url: `${process.env.PUBLIC_URL}/images/image2.jpg`, alt: 'Bird 2' },
    { id: 3, url: `${process.env.PUBLIC_URL}/images/image3.jpg`, alt: 'Bird 3' },
    { id: 4, url: `${process.env.PUBLIC_URL}/images/image4.jpg`, alt: 'Bird 4' },
    { id: 5, url: `${process.env.PUBLIC_URL}/images/image5.jpg`, alt: 'Bird 5' },
    { id: 6, url: `${process.env.PUBLIC_URL}/images/image6.jpg`, alt: 'Bird 6' },
    { id: 7, url: `${process.env.PUBLIC_URL}/images/image7.jpg`, alt: 'Bird 7' },
    { id: 8, url: `${process.env.PUBLIC_URL}/images/image8.jpg`, alt: 'Bird 8' },
    { id: 9, url: `${process.env.PUBLIC_URL}/images/image9.jpg`, alt: 'Bird 9' },
    { id: 10, url: `${process.env.PUBLIC_URL}/images/image10.jpg`, alt: 'Bird 10' },
    { id: 11, url: `${process.env.PUBLIC_URL}/images/image11.jpg`, alt: 'Bird 11' },
    { id: 12, url: `${process.env.PUBLIC_URL}/images/image12.jpg`, alt: 'Bird 12' },

  ];

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => setSelectedImage(null);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginBottom: '10px' }}>Bird Gallery</h1>
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={handleClose}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </div>
  );
};

export default App;
