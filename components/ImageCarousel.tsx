import React from 'react';
import styles from '../styles/ImageCarousel.module.css'; 

interface ImageCarouselProps {
  images: string[];
  direction?: 'left' | 'right';
  children?: React.ReactNode;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, direction = 'left', children }) => {
  const isRight = direction === 'right';
  return (
    <div className={styles.carouselContainer}>
      <div className={`${styles.carouselTrack} ${isRight ? styles.scrollRight : styles.scrollLeft}`}>
        {images.concat(images).map((image, index) => (
          <div className={styles.carouselSlide} key={index}>
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <div className={styles.carouselButton}>
        {children}
      </div>
    </div>
  );
};

export default ImageCarousel;
