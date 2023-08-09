'use client'
import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import './ZoomImage.scss'
import { ParallaxProvider } from 'react-scroll-parallax';

const ZoomImage = ({ src, alt }) => {

  return (
      <div className="image-container">
        <ParallaxProvider>
      <Parallax speed={-30} tagOuter="figure">
        <img src={src} alt={alt} className="zoomable-image" />
      </Parallax>
    </ParallaxProvider>
    </div>
  );
};

export default ZoomImage;