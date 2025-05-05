import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import './_hero.scss'
import SearchBar from '../SearchBar/SearchBar'
import { Info } from 'lucide-react'

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
        <p className='hero__paragraph'>
            Développeur front-end React
        </p>
        <SearchBar changeFocus={setBlur} />
        <p className='hero__info'><Info size={16}/> Disponible — stage, alternance ou CDI (embauche souhaitée)</p>
    </section>
}
export default Hero