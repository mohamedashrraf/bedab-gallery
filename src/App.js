import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Lightbox from './components/Lightbox/Lightbox';

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
