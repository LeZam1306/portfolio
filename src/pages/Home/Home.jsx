import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import PageAnimations from '../../styles/PageAnimations/PageAnimations'
import './_home.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
import { Info } from 'lucide-react'

const Home = () => {
    const [blur, setBlur] = useState(false)

    return <PageAnimations close={true}>
        <section className="hero">
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
    </PageAnimations>
}
export default Home