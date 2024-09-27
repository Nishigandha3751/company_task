import React, { useState } from 'react';
import Slide from './Slide';
import Modal from './Modal'; 
import './BannerSlider.css'; 

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false); 
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [containerColor, setContainerColor] = useState('#ffffff'); 

  const slides = [
    {
      id: 1,
      image: 'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg',
      title: 'Mumbai',
      description: 'All About Mumbai',
    },
    {
      id: 2,
      image: 'https://th.bing.com/th/id/OIP.yPTOZFe-lJHeICOvji2HbwHaEK?rs=1&pid=ImgDetMain',
      title: 'Delhi',
      description: 'All About Delhi',
    },
    {
      id: 3,
      image: 'https://images.herzindagi.info/image/2024/Jan/Charminar.jpg',
      title: 'Hyderabad',
      description: 'All About Hyderabad',
    },
  ];

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  const handleButtonClick1 = () => {
    setModalContent({ title: 'Button 1', content: 'Content for Button 1' });
    setModalOpen(true); 
  };

  const handleButtonClick2 = () => {
    setModalContent({ title: 'Button 2', content: 'Content for Button 2' });
    setModalOpen(true); 
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to change the container color
  const changeColor = (color) => {
    setContainerColor(color);
  };

  return (
    <>
      {/* Slider Section */}
      <div className="slider">
        <div
          className="slider-inner"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <Slide key={index} slide={slide} />
          ))}
        </div>

        <button className="prev" onClick={goToPrevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={goToNextSlide}>
          &#10095;
        </button>
      </div>

      {/* Video Section */}
      <div className="video-section">
        <h2>See This </h2>
        <div className="video-container">
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/UeC9-5o22aU?si=BUeoqfxen-RzCIrh" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/uvJOsGpexh4?si=XfU8I9zrExgu2DyV" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>
        </div>

        {/* Button Section */}
        <div className="button-container">
          <button className="action-button" onClick={handleButtonClick1}>Button 1</button>
          <button className="action-button" onClick={handleButtonClick2}>Button 2</button>
        </div>
      </div>

   {/* Color Change Section */}
<div className="color-section">
  <h3>Change Container Color</h3>
  <div className="color-buttons">
    <button onClick={() => changeColor('#ffcccc')}>Red</button>
    <button onClick={() => changeColor('#ccffcc')}>Green</button>
    <button onClick={() => changeColor('#ccccff')}>Blue</button>
    <button onClick={() => changeColor('#ffffcc')}>Yellow</button>
  </div>
</div>



      {/* Footer Section */}
      <footer className="footer-section">
        <div className="footer-content">
          <p>&copy; 2024 My Website. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </footer>

      {/* Modal Component */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        title={modalContent.title} 
        content={modalContent.content} 
      />
    </>
  );
};

export default BannerSlider;
