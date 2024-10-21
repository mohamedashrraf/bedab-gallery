import React, { useEffect } from 'react';
import './Lightbox.scss';

const Lightbox = ({ image, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    if (!image) return null;

    return (
        <div className="lightbox" onClick={onClose}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img src={image.url} alt={image.alt} />
                <button className="lightbox-close" onClick={onClose}>×</button>
                <button className="lightbox-prev" onClick={onPrev}>‹</button>
                <button className="lightbox-next" onClick={onNext}>›</button>
            </div>
        </div>
    );
};

export default Lightbox;
