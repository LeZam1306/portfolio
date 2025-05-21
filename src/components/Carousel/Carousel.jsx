import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './_Carousel.scss';

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="carousel">
            <button 
                className="carousel__arrow carousel__arrow--left" 
                onClick={handlePrevious}
            >
                <ChevronLeft size={48}/>
            </button>

            <div className="carousel__content">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.3 }}
                        className="carousel__item"
                    >
                        {items[currentIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>

            <button 
                className="carousel__arrow carousel__arrow--right" 
                onClick={handleNext}
            >
                <ChevronRight size={48}/>
            </button>

            <div className="carousel__dots">
                {items.map((_, index) => (
                    <span 
                        key={index}
                        className={`carousel__dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;