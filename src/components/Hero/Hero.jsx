import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import './_hero.scss'
import SearchBar from '../SearchBar/SearchBar'

const Hero = () => {
    const [blur, setBlur] = useState(false)
    
    return <section className="hero">
        <AnimatePresence>
            {blur && 
                <motion.div 
                    className='blurred'
                    initial={{ opacity: 0 }}
                    exit={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: { duration: 0.2 } 
                    }}
                />
            }
        </AnimatePresence>
        
        <h2 className='hero__title'>Adam Zamouri</h2>
        <SearchBar changeFocus={setBlur}></SearchBar>
    </section>
}
export default Hero