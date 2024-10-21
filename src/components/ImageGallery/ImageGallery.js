import React from 'react';
import './ImageGallery.scss'; 

// const importAll = (r) => {
//     return r.keys().map((file) => ({
//         src: `${process.env.PUBLIC_URL}/images/${file.replace('./', '')}`,
//     }));
// };

// const images = importAll(require.context('../../../public/images', false, /\.(png|jpe?g|svg)$/));

const ImageGallery = ({ images, onImageClick }) => {
    return (
        <div className="gallery">
            {images.map((image, index) => (
                <div
                    key={image.id}
                    className="gallery-item"
                    onClick={() => onImageClick(image, index)} 
                >
                    <img src={image.url} alt={image.alt} loading="lazy" />
                </div>
            ))}
        </div>
    );
};

export default ImageGallery;
